import { useQuery } from '@tanstack/react-query';
import { getQuestions } from '../../api/services';
// import { getQuestionById } from '../../api/services';

// export const useQuestions = (id) =>
//   useQuery({
//     queryKey: ['question', id],
//     queryFn: () => getQuestionById(id),
//     enabled: !!id, // id 있을 때만 호출
//     staleTime: 1000 * 60,
//   });

// 랜덤 숫자 5개 뽑기
const pick5 = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, 5);
};

export const useQuestions = () =>
  useQuery({
    queryKey: ['questions'],
    queryFn: getQuestions,
    select: (data) => pick5(data), //  여기서 랜덤 5개로 변환
  });
