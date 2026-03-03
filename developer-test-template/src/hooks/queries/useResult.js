import { useQuery } from '@tanstack/react-query';
import { getResults } from '../../api/services';

export const useResults = (type) =>
  useQuery({
    queryKey: ['result', type],
    queryFn: () => getResults(type),
    staleTime: 1000 * 60,
    enabled: !!type,
    select: (data) => data?.result ?? data,
  });
