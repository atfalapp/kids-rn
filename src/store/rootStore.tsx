import React from 'react';
import AudioStore from './audioStore';
import AuthStore from './authStore';

export default class RootStore {
  authStore: any;
  audioStore: any;
  constructor() {
    this.authStore = new AuthStore();
    this.audioStore = new AudioStore();
  }
}

const RootStoreContext = React.createContext(new RootStore());

// custom hooks available for the app to connect to the stores
export const useStores = () => React.useContext(RootStoreContext);
