// axios interceptor가 필요한 경우 해당 파일에 생성하여 연결하세요.

import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const axiosInterceptors = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// 토큰이 필요없긴한데 그래도 일단 작성해봄

// 요청 인터셉터: 토큰 자동 삽입
axiosInterceptors.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// 응답 인터셉터: 401 처리 + 타임아웃 처리
axiosInterceptors.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
    }
    if (error.code === 'ECONNABORTED') {
      console.error('요청 시간 초과');
    }
    return Promise.reject(error);
  }
);
