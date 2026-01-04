import { api } from '@/lib/axios';

export const getFullPackages = async () => {
  const response = await api.get('/packages/all');
  return response.data;
};

export const getAllPackages = async (destination_id) => {
  const response = await api.get('/packages?destinationId=' + destination_id);
  return response.data;
};

export const getPackageById = async (id) => {
  const response = await api.get(`/packages/${id}`);
  return response.data;
};

export const createPackage = async (data) => {
  const response = await api.post('/packages', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updatePackage = async ({ id, data }) => {
  const response = await api.patch(`/packages/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const deletePackage = async (id) => {
  const response = await api.delete(`/packages/${id}`);
  return response.data;
};
