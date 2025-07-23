// authAPIs.js
import api from './config/axiosInstance';
import { setCredentials } from '@/redux/slices/authSlice';

const authAPIs = {
  async login({ data, dispatch }) {
    try {
      const res = await api.post('/auth/login', data);

      const { accessToken, user } = res.data;

      dispatch(setCredentials({ accessToken, user }));
      return res;
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, error };
    }
  },

  async register({ data }) {
    try {
      const res = await api.post('/auth/register', data);
      return res;
    } catch (error) {
      console.error(error);
    }
  },
  async verify({ data }) {
    console.log(data);
    try {
      const res = await api.post('/auth/verify', data);

      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async getUser() {
    try {
      const res = await api.get('/auth/user');
    } catch (error) {
      console.error(error);
    }
  },
  async logout() {},
};

export const { register, login, verify, getUser, logout } = authAPIs;
