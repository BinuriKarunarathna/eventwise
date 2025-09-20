import api from './api';

export const getAllEvents = (user_id) => api.get(`/api/events/user/${user_id}`);
export const getAllEventsFromAllUsers = () => api.get('/api/events'); 
export const getEventById = (id) => api.get(`/api/events/${id}`);
export const createEvent = (eventData) => api.post('/api/events', eventData);
export const updateEvent = (id, updatedData) => api.put(`/api/events/${id}`, updatedData);
export const deleteEvent = (id) => api.delete(`/api/events/${id}`);
