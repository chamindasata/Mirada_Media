import { AudioService } from './../service/audio.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AudioPlayerTrack } from './audioplayer-track';
import { trackList } from './audioplayer-tracks';
import { MillitosecoundPipe } from "./../share/millitosecound.pipe";

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})
export class AudioplayerComponent implements OnInit {

  public __audio: any = null;
  public __playing = false;
  public __tracks: AudioPlayerTrack[] = trackList;
  public __currentTrack: AudioPlayerTrack;
  public __trackIndex = 0;

  panelOpenState = false;

  public __currentTime: any;

  constructor(public AudioService: AudioService, private cd: ChangeDetectorRef) {
    
    this.AudioService.songPlayEmitter$.subscribe(
      res => {
        this.__tracks = []
        this.__tracks.push(res);
        this.__setTrack(res);
      }
    )

    // this.__trackIndex = 0;
    // this.__currentTrack = this.__tracks[this.__trackIndex];


  }







  __playTrack() {
    // debugger;
    this.__audio.play();
    this.__playing = true;
  }
  __pauseTrack() {
    this.__audio.pause();
    this.__playing = false;
  }
  __stopTrack() {
    this.__audio.pause();
    this.__playing = false;
    this.__audio.currentTime = 0;
  }
  __nextTrack() {
    this.__stopTrack();
    this.__trackIndex++;
    if (this.__trackIndex > this.__tracks.length) {
      this.__trackIndex = 0;
    }
    this.__currentTrack = this.__tracks[this.__trackIndex];
    this.__audio.src = this.__currentTrack.uri;
    this.__audio.load();
    this.__playTrack();
  }
  __previousTrack() {
    this.__stopTrack();
    this.__trackIndex--;
    if (this.__trackIndex < 0) {
      this.__trackIndex = this.__tracks.length - 1;
    }
    this.__currentTrack = this.__tracks[this.__trackIndex];
    this.__audio.src = this.__currentTrack.uri;
    this.__audio.load();
    this.__playTrack();
  }

  __setTrack(track: AudioPlayerTrack) {
    this.__stopTrack();
    this.__trackIndex = track.id;
    this.__currentTrack = this.__tracks[track.id];
    this.__audio.src = this.__currentTrack.uri;
    this.__audio.load();
    this.__playTrack();
  }

  __setVolume(vol) {
    this.__audio.volume = vol;
  }
  __setProgress(prog) {
  
    this.__audio.currentTime = prog;
  }

  ngOnInit() {
    this.__audio = new Audio();
    //   this.__audio.ontimeupdate = (event) => {
    //     this.__audio.currentTime = this.__audio.currentTime;
    //     this.cd.detectChanges();
    //  }

    setTimeout(() => {
      this.__audio.ontimeupdate = (event) => {
        this.__currentTime = this.__audio.currentTime;
        this.cd.detectChanges();
      }
    }, 100);
  }

  ngOnDestroy() {
    if (this.__audio) {
      this.__audio.pause();
      this.__audio = null;
    }
  }



  volumeControl(event) {
    console.log(event);
  }


}
