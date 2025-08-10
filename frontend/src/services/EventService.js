import api from './api';

export const getAllEvents = (userId) => api.get(`/api/events/user/${userId}`);
export const getAllEventsFromAllUsers = () => api.get('/api/events'); // Get all events from all users
export const getEventById = (id) => api.get(`/api/events/${id}`);
export const createEvent = (eventData) => api.post('/api/events', eventData);
export const updateEvent = (id, updatedData) => api.put(`/api/events/${id}`, updatedData);
export const deleteEvent = (id) => api.delete(`/api/events/${id}`);
