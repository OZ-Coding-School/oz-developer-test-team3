import { api } from '../instance';

// 전체 질문 목록
export const getQuestions = async () => {
  const { data } = await api.get('/api/questions');
  return data;
};

// 특정 질문 조회
export const getQuestionById = async (id) => {
  const { data } = await api.get(`/api/questions/${id}`);
  return data;
};
