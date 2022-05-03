import axios from 'axios';
import { BASE_URL } from '../constants';

const http = axios.create({ baseURL: BASE_URL });

export const CCTXTrade = () => {
  return http
    .get(
    '/ccxt/trades').then(res => {
      return Promise.resolve(res.data);
    }).catch(error => {
      return Promise.reject((error.response && error.response.data) || error);
    });
};

export const PriceTickets = () => {
  return http
    .get(
    '/ccxt/price-tickets').then(res => {
      return Promise.resolve(res.data);
    }).catch(error => {
      return Promise.reject((error.response && error.response.data) || error);
    });
};

