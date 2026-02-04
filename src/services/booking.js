import { api } from '@/lib/axios';

export const getAllBookings = async () => {
  const response = await api.get('/bookings');
  return response.data;
};

export const getBookingById = async (id) => {
  const response = await api.get(`/bookings/${id}`);
  return response.data;
};

export const createBooking = async (data) => {
  const response = await api.post('/bookings', data);
  return response.data;
};
