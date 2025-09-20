import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL ;
//axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false, //disables sending cookies

});

console.log('API_BASE_URL:', API_BASE_URL);

export default api;
