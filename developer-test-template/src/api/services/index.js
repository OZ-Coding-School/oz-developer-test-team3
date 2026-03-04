import { api } from '../instance';

// 전체 질문 목록
export const getQuestions = async () => {
  const { data } = await api.get('/api/questions');
  return data;
};
// 결과 조회
export const getResults = async (type) => {
  const { data } = await api.get(`/api/results/${type}`);
  return data;
};
