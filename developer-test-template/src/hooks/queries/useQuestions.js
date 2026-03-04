import { useQuery } from '@tanstack/react-query';
import { getQuestions } from '../../api/services';
import { pick5 } from '../../utils/pick5';

export const useQuestions = () =>
  useQuery({
    queryKey: ['questions'],
    queryFn: getQuestions,
    select: (data) => pick5(data),
  });
