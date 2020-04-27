import { configure, makeUseAxios } from 'axios-hooks';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
});

console.log('ax', axios);

export const useAxios = makeUseAxios({
  axios,
});
