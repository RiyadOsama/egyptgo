import { useMutation, useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { createBooking, getAllBookings, getBookingById } from '@/services/booking';

export function useGetAllBookings() {
  return useQuery({
    queryFn: getAllBookings,
    queryKey: ['bookings'],
    onSuccess: (data) => {
      console.log('Fetched all bookings successfully', data);
    },
    onError: (error) => {
      console.error('Failed to fetch bookings', error);
    },
  });
}

export function useGetBookingById(id) {
  return useQuery({
    queryFn: () => getBookingById(id),
    queryKey: ['booking', id],
    onSuccess: (data) => {
      console.log(`Fetched booking ${id} successfully`, data);
    },
    onError: (error) => {
      console.error(`Failed to fetch booking ${id}`, error);
    },
  });
}

export function useCreateBooking() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBooking,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      console.log('Booking created successfully', data);
    },
    onError: (error) => {
      console.error('Failed to create booking', error);
    },
  });
}
