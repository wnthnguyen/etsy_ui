import { useQuery } from '@tanstack/react-query';

const queryKeys = {
  all: ['all'],
  get: ['all', 'get'],
};

export const useGetOrders = () =>
  useQuery({
    enabled: false,
    queryKey: queryKeys.get,
    queryFn: async () => {
      const response = await fetch('');
      return await response.json();
    },
  });
