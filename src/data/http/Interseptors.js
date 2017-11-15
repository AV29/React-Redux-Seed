import axios from 'axios';

const axiosInstance = axios.create();

const defaultConfigSet = {
  responseType: 'json'
};

axiosInstance.interceptors.request.use(config => {
  if (config.method !== 'OPTIONS') {
    return {
      ...config,
      ...defaultConfigSet,
      headers: {
        'Cache-Control': 'no-cache, no-store',
        'Pragma': 'no-cache'
      }
    };
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
