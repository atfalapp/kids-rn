import {makeAutoObservable} from 'mobx';

class AudioStore {
  isPlaying: boolean;
  currentPlayed: any;
  item: any;

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

  updateItem(value: any) {
    this.item = value;
  }
}

export default AudioStore;
