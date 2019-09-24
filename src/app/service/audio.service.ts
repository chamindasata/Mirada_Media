import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AudioPlayerTrack } from '../audioplayer/audioplayer-track';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  public songPlayEmitter$: EventEmitter<AudioPlayerTrack>;

  constructor() {
    this.songPlayEmitter$ = new EventEmitter();

  }

  playSong(song: AudioPlayerTrack): void {
    this.songPlayEmitter$.emit(song);
 }
}
