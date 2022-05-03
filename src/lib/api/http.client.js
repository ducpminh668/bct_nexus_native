import axios from 'axios';
import { BASE_URL } from '../constants';

const http = axios.create({ baseURL: BASE_URL });

const get = (endpoint, headers) => {
  return http
    .get(endpoint)
    .then(res => {
      return Promise.resolve(res.data);
    })
    .catch(error => {
      return Promise.reject((error.response && error.response.data) || error);
    });
};

const post = (endpoint, body, headers) => {
  return http
    .post(endpoint, body)
    .then(res => {
      return Promise.resolve(res.data);
    })
    .catch(error => {
      return Promise.reject((error.response && error.response.data) || error);
    });
};

export default {
  get,
  post,
};
