import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001/api'

const instance = axios.create()

instance.interceptors.request.use(
  (config) => {
    if (localStorage.token) {
      config.headers = {
        ...config.headers,
        // Authorization: Bearer <localStorage.token> 
        Authorization: `Bearer ${localStorage.token}` 
      };
    }
    return config;
  }
);

export default instance