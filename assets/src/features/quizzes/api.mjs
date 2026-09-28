import apiFetch from '@wordpress/api-fetch';
export const loadQuiz = (id) => apiFetch({ path: `/ohmylms/v1/quiz/${id}` });
export const saveQuiz = (id, data) =>
  apiFetch({ path: `/ohmylms/v1/quiz/${id}`, method: 'POST', data });
