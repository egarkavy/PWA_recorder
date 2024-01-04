import { ApplicationRef, Injectable, inject } from "@angular/core";
import { SwUpdate, VersionEvent } from "@angular/service-worker";
import { BehaviorSubject, Subject, concat, filter, first, interval } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ServiceWorkerMiddlewareService {
    private readonly swUpdate = inject(SwUpdate);
    private readonly appRef = inject(ApplicationRef);

    public readonly newVersionAvailableSource = new Subject<void>();
    public readonly newVersionAvailable$ = this.newVersionAvailableSource.asObservable();
    
    public startListeningUpdates(): void {
        this.swUpdate.versionUpdates.pipe(
            filter((event: VersionEvent) => (event.type === "VERSION_READY"))
        ).subscribe((event) => {
            console.log("version update", event);
            
            this.newVersionAvailableSource.next();
        });
    }

    public startCheckingUpdates(): void {
        const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
        const everySixHours$ = interval(5000);
        const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

        everySixHoursOnceAppIsStable$.subscribe(async () => {
            try {
              const updateFound = await this.swUpdate.checkForUpdate();
              console.log(updateFound ? 'A new version is available.' : 'Already on the latest version.');
            } catch (err) {
              console.error('Failed to check for updates:', err);
              
              throw err;
            }
          });
    }
}