import { accessTokenHandler } from './requestInterceptor';
import { refreshTokenHandler } from './responseInterceptor';

const axios = require('axios');
const baseURL = require('./baseURL');
console.log({ baseURL });

const api = axios.create({
  baseURL: `${baseURL}/api/v1/en`,
  withCredentials: true,
  timeout: 1000,
});

api.interceptors.request.use(
  (config) => accessTokenHandler(config),
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => refreshTokenHandler(error)
);

export default api;
