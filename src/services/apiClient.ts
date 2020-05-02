import { configure, makeUseAxios } from 'axios-hooks';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http://127.0.0.1:5000/',
  timeout: 8000,
});

export const useAxios = makeUseAxios({
  axios,
});
