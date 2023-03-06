import AsyncStorage from '@react-native-async-storage/async-storage';

const deviceStorage = {
  async saveItem(key: any, value: any) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async removeItem(key: any) {
    try {
      await AsyncStorage.removeItem(key).then(() =>
        console.log('Token removed', key),
      );
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
  async getItem(key: any) {
    const item = await AsyncStorage.getItem(key);
    return item;
  },
};

export default deviceStorage;
