import { useQuery } from '@tanstack/react-query';
import { getResult } from '../api/result';

export const useResult = () =>
  useQuery({
    queryKey: ['result'],
    queryFn: getResult,
    staleTime: 1000 * 60,
  });
