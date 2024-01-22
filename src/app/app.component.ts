import { Component, OnInit, inject } from '@angular/core';
import { ServiceWorkerMiddlewareService } from './service-worker-middleware.service';
import { MatButtonModule } from '@angular/material/button';
import { AudioRecordingService } from './audio-recording.service';
import { filter, first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly audioRecordingService = inject(AudioRecordingService);

  public readonly recording = this.audioRecordingService.recordingState;

  ngOnInit(): void {
    this.serviceWorkerMiddlewareService.startListeningUpdates();
    this.serviceWorkerMiddlewareService.startCheckingUpdates();

    this.serviceWorkerMiddlewareService.newVersionAvailable$.subscribe(() => {
      window.location.reload();
    })
  }

  private readonly serviceWorkerMiddlewareService = inject(ServiceWorkerMiddlewareService);

  private stream: MediaStream | null = null;
  private mediaRecorder: MediaRecorder | null = null;

  public async beginRecording(): Promise<void> {
    this.audioRecordingService.beginRecording();
  }

  public stopRecording(): void {
    const file$ = this.audioRecordingService.getAudioFile();

    file$.pipe(
      filter((file) => file !== null),
      first()
    ).subscribe((file) => {
      console.log(file);
      
      const audio = new Audio(URL.createObjectURL(file));
      audio.play();
    })

    this.audioRecordingService.stopRecording();
  }

  public pauseRecording(): void {
    this.audioRecordingService.pauseRecording();
  }

  public resumeRecording(): void {
    this.audioRecordingService.resumeRecording();
  }
}
