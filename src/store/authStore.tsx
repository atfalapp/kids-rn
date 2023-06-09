import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable} from 'mobx';

type User = {
  name: string;
  auth_provider: string;
  email: string;
  role: string;
  uId: string;
  profile: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  isVerified: string;
  password: string;
  status: string;
  company: string;
  id: number;
};

class AuthStore {
  authToken!: string | null;
  user!: User | {};
  constructor() {
    makeAutoObservable(this);
  }

  async init() {
    this.authToken = await AsyncStorage.getItem('authToken');
    this.user =
      (await JSON.parse((await AsyncStorage.getItem('user')) || '{}')) || null;
  }

  async update(field: string, value: any) {
    if (field === 'authToken') {
      await AsyncStorage.setItem(field, value);
      this.authToken = value;
    } else {
      await AsyncStorage.setItem(field, JSON.stringify(value));
      this.user = value;
    }
  }

  async clear() {
    await AsyncStorage.clear();
    this.authToken = null;
    this.user = {};
  }
}

export default AuthStore;
