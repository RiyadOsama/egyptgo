import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createDestination,
  updateDestination,
  deleteDestination,
  getAllDestinations,
  getDestinationById,
} from '@/services/destinations';
import { useQueryClient } from '@tanstack/react-query';

export function useGetAllDestinations() {
  return useQuery({
    queryFn: getAllDestinations,
    queryKey: ['destinations'],
    onSuccess: (data) => {
      console.log('Fetched all destinations successfully', data);
    },
    onError: (error) => {
      console.error('Failed to fetch destinations', error);
    },
  });
}

export function useGetDestinationById(id) {
  return useQuery({
    queryFn: () => getDestinationById(id),
    queryKey: ['destination', id],
    onSuccess: (data) => {
      console.log(`Fetched destination ${id} successfully`, data);
    },
    onError: (error) => {
      console.error(`Failed to fetch destination ${id}`, error);
    },
  });
}

export function useCreateDestination() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createDestination,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['destinations'] });
      console.log('Destination created successfully', data);
    },
    onError: (error) => {
      console.error('Failed to create destination', error);
    },
  });
}

export function useUpdateDestination() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateDestination,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['destinations'] });
      console.log('Destination updated successfully', data);
    },
    onError: (error) => {
      console.error('Failed to update destination', error);
    },
  });
}

export function useDeleteDestination() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteDestination,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['destinations'] });
      console.log('Destination deleted successfully', data);
    },
    onError: (error) => {
      console.error('Failed to delete destination', error);
    },
  });
}
