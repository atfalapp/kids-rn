import {makeAutoObservable} from 'mobx';

class AudioStore {
  isPlayed: boolean;
  soundState: any;
  item: any;
  minimized: boolean;
  currentPosition: number;
  duration: number;

  constructor() {
    makeAutoObservable(this);
    this.init();
  }

  init() {
    this.isPlayed = false;
    this.soundState = undefined;
    this.item = undefined;
    this.minimized = false;
    this.currentPosition = 0;
  }

  updateIsPlaying(value: boolean) {
    this.isPlayed = value;
  }
  updateCurrentlyPlayed(value: any) {
    this.soundState = value;
  }
  updateItem(value: any) {
    this.item = value;
  }

  updateMinimized(value: boolean) {
    this.minimized = value;
  }

  updateCurrentPosition(value: number) {
    this.currentPosition = value;
  }
  updateDuration(value: number) {
    this.duration = value;
  }
}

export default AudioStore;
