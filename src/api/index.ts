import axios from "axios";


const instance = axios.create({
  baseURL: 'http://localhost:3001/api'
});

instance.interceptors.request.use(
  (config) => {
    if (localStorage.token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${localStorage.token}` 
      };
    }
    return config;
  }
);

export default instance