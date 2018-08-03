export const API_REQUEST = '[api] Api request';

export const apiRequest = (method, onSuccess, onError) => ({
  type: API_REQUEST,
  payload: {
    method,
    onSuccess,
    onError
  }
});
