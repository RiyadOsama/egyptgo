import { api } from '@/lib/axios';

export const getAllDestinations = async () => {
  const response = await api.get('/destinations');
  return response.data;
};

export const getDestinationById = async (id) => {
  const response = await api.get(`/destinations/${id}`);
  return response.data;
};

export const createDestination = async (data) => {
  const response = await api.post('/destinations', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updateDestination = async ({ id, data }) => {
  const response = await api.patch(`/destinations/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const deleteDestination = async (id) => {
  const response = await api.delete(`/destinations/${id}`);
  return response.data;
};
