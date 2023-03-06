import axios from './config';
// import deviceStorage from './deviceStorage';
import {Platform} from 'react-native';
// import {url} from './config';
export const login = (email, password, fcm_token) => {
  return axios.post('login', {
    email,
    password,
    remember: true,
    fcm_token,
    device_type: Platform.OS,
  });
};
export const signup = (data: any) => {
  return axios.post('signup', data);
};
export const updateUser = (data: any) => {
  return axios.post('update-user', data);
};
export const logout = () => {
  return axios.get('logout');
};

export const getTherapistPlans = (therapist_id: any) => {
  return axios.get('get-therapist-plans', {
    params: {
      therapist_id,
    },
  });
};

export const paymentIntents = (amount: any) => {
  return axios.post('paymentIntents', {
    amount,
    currency: 'usd',
    payment_method_types: 'card',
  });
};
export const capturePaymentStripe = (
  user_id: any,
  appointment_id: any,
  amount: any,
  plan_id: any,
  providerID: any,
  client_secret: any,
  payment_id: any,
) => {
  return axios.post('capturePaymentStripe', {
    payment_status: 'COMPLETED',
    currency_code: 'usd',
    user_id,
    appointment_id,
    amount,
    plan_id,
    providerID,
    client_secret,
    payment_id,
  });
};

export const getAlbums = () => {
  return axios
    .get(`https://atfal-backend.herokuapp.com/album`)
    .then((res: any) => {
      console.log('Response: ', res);
    });
};
export function getUserData() {
  return axios
    .get(`https://atfal-backend.herokuapp.com/user`)
    .then((res: any) => {
      console.log('Response: ', res);
    });
}
