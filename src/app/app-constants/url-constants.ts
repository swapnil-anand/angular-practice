const BASE_URL = 'http://localhost:8080/';

export const URL = {
  DELETE_USER: BASE_URL + `user/delete?email=$email`,
  ADD_USER: BASE_URL + `user/save`,
  GET_USER: BASE_URL + `user?email=$email&password=$password`,
};
