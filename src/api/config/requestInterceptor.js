import store from '@/redux/store';

export const accessTokenHandler = (config) => {
  if (typeof window !== 'undefined') {
    const accessToken = store.getState().auth.accessToken;
    console.log({ 'Access Token form request Interceptor:': accessToken });
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
  }

  return config;
};
