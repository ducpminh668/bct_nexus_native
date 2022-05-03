import axios from 'axios';
import { BASE_URL } from '../constants';

const http = axios.create({ baseURL: BASE_URL });

export const Login = (username, password) => {
  return http
    .post(
    '/users/login',
      { username, password },
    ).then(res => {
      return Promise.resolve(res.data);
    }).catch(error => {
      return Promise.reject((error.response && error.response.data) || error);
    });
};

export const Signup = (payload) => {
  return http
    .post(
      '/users',
      payload,
    ).then(res => {
      return Promise.resolve(res.data);
    }).catch(error => {
      return Promise.reject((error.response && error.response.data) || error);
    });
};
