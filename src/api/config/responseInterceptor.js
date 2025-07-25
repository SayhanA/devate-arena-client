import { store } from '@/redux/store';
import api from './axiosInstance';
import { updateAccessToken } from '@/redux/slices/authSlice';

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

export const refreshTokenHandler = async (error) => {
  const originalRequest = error.config;

  if (
    error.response?.status === 401 &&
    !originalRequest._retry &&
    !originalRequest.url.includes('/auth/refresh-accesstoken')
  ) {
    originalRequest._retry = true;

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          originalRequest.headers['Authorization'] = `Bearer ${token}`;
          return api(originalRequest);
        })
        .catch((err) => Promise.reject(err));
    }

    isRefreshing = true;

    try {
      const res = await api.get('/auth/refresh-accesstoken');
      const newAccessToken = res?.data?.accessToken;

      store.dispatch(updateAccessToken(newAccessToken));
      api.defaults.headers['Authorization'] = `Bearer ${newAccessToken}`;
      processQueue(null, newAccessToken);

      originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
      return api(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, null);
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }

  return Promise.reject(error);
};
