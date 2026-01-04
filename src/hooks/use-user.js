import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/services/user';

export function useGetUserById(id) {
  return useQuery({
    queryFn: () => getUserById(id),
    queryKey: ['user', id],
    onSuccess: (data) => {
      console.log(`Fetched user ${id} successfully`, data);
    },
    onError: (error) => {
      console.error(`Failed to fetch user ${id}`, error);
    },
  });
}
