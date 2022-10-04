import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001/api'

const instance = axios.create()

instance.interceptors.request.use(
  (config) => {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = localStorage.token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance