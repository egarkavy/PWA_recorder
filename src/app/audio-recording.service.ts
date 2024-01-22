import { Injectable, signal } from "@angular/core";
import { Subject, fromEvent } from "rxjs";

@Injectable(
    {
        providedIn: "root"
    }
)
export class AudioRecordingService {
    public recordingState = signal<RecordingState>("inactive");
    
    private stream: MediaStream | null = null;
    private mediaRecorder: MediaRecorder | null = null;

    private audioChunks: BlobPart[] = [];

    private audioFile$: Subject<Blob> = new Subject<Blob>();

    public async beginRecording(): Promise<void> {
        await this.ensureStreamExists();

        if (!this.stream) {
            throw new Error("Stream is null");
        }

        if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
            throw new Error("Media recorder is still in use");
        }

        this.resetMediaRecorder();

        this.mediaRecorder?.start();
    }

    public pauseRecording(): void {
        if (this.mediaRecorder?.state === "recording") {
            this.mediaRecorder?.pause();
        }
    }

    public resumeRecording(): void {
        if (this.mediaRecorder?.state === "paused") {
            this.mediaRecorder?.resume();
        }
    }

    public stopRecording(): void {
        if (this.mediaRecorder?.state === "inactive") {
            return;
        }

        this.mediaRecorder?.stop();
        this.stream?.getTracks().forEach(track => track.stop());
    }

    public getAudioFile(): Subject<Blob> { 
        return this.audioFile$;
    }

    private async ensureStreamExists(): Promise<void> {
        this.stream = this.stream === null ? await navigator.mediaDevices.getUserMedia({ audio: true }) : this.stream;
    }

    private resetMediaRecorder(): void {
        if (!this.stream) {
            return;
        }

        // this.stream.getTracks().forEach(track => );

        this.mediaRecorder = new MediaRecorder(this.stream);
    
        this.audioChunks = [];
    
        this.mediaRecorder.addEventListener("dataavailable", event => {
          this.audioChunks.push(event.data);
        });
    

        this.mediaRecorder.addEventListener("start", () => {
            this.recordingState.set("recording");
        });
        this.mediaRecorder.addEventListener("resume", () => {
            this.recordingState.set("recording");
        });

        this.mediaRecorder.addEventListener("stop", () => {
            this.audioFile$.next(new Blob(this.audioChunks));

            this.recordingState.set("inactive");
        });
        
        this.mediaRecorder.addEventListener("pause", () => {
            this.recordingState.set("paused");
        });
    }
}