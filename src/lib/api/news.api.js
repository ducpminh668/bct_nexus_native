import axios from 'axios';
import { BASE_URL } from '../constants';

const http = axios.create({ baseURL: BASE_URL });

export const News = (q, category) => {
  return http
    .post(
    '/news',
      { q, category },
    ).then(res => {
      return Promise.resolve(res.data);
    }).catch(error => {
      return Promise.reject((error.response && error.response.data) || error);
    });
};

