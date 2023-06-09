import {makeAutoObservable} from 'mobx';

class AudioStore {
  isPlaying: boolean;
  currentPlayed: any;

  constructor() {
    makeAutoObservable(this);
  }

  init() {
    this.isPlaying = false;
    this.currentPlayed = undefined;
  }

  updateIsPlaying(value: boolean) {
    this.isPlaying = value;
  }
  updateCurrentlyPlayed(value: any) {
    this.currentPlayed = value;
  }
}

export default AudioStore;
