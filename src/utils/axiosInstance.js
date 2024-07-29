import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://pets-v2.dev-apis.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
