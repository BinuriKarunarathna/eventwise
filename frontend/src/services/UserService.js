import api from './api';

export const registerUser = (userData) => api.post('/api/users/register', userData);
export const loginUser = (loginData) => api.post('/api/users/login', loginData);
export const getUserDetails = (userId) => api.get(`/api/users/${userId}`);