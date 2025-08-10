import api from './api';

export const getAllExpenses = (eventId) => api.get(`/api/expenses/event/${eventId}`);
export const getExpenseById = (id) => api.get(`/api/expenses/${id}`);
export const createExpense = (expenseData) => api.post('/api/expenses', expenseData);
export const updateExpense = (id, updatedData) => api.put(`/api/expenses/${id}`, updatedData);
export const deleteExpense = (id) => api.delete(`/api/expenses/${id}`);
