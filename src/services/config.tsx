import axios from 'axios';
import deviceStorage from './deviceStorage';
// import {Promise} from 'es6-promise';

//export const url = 'http://10.0.2.2:4000';

export const url = 'https://atfal-backend.herokuapp.com';
const axiosApiInstance = axios.create({
  baseURL: url,
});
axiosApiInstance.interceptors.request.use(
  async (config: any) => {
    const access_token = await deviceStorage.getItem('access_token');
    console.log(access_token, 'token');
    config.headers = {
      Authorization: `Bearer ${access_token}`,
      Accept: 'application/json',
    };
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
);
export default axiosApiInstance;
