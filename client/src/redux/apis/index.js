import axios from "axios";
// REQUESTS
const fetchError = ({ status, data, error }) =>
  status >= 400 ? new Error(error) : data;

export const fetchGetPosts = async page => {
  let posts = await axios.get(`/api/posts?page=${page}`);
  return fetchError(posts);
};

export const fetchGetPopularPosts = async (from, to) => {
  let posts = await axios.get(`/api/posts/sort?date1=${from}&date2=${to}`);
  return fetchError(posts);
};

export const fetchGetComments = async idPost => {
  let comments = await axios.get(`/api/comments/${idPost}`);
  return fetchError(comments);
};

export const fetchSendComment = async (comment, token) => {
  let result = await axios.post(`/api/comments/`, comment, token);
  return fetchError(result);
};

export const fetchDeleteComment = async (idComment, token) => {
  let result = await axios.delete(`/api/comments/${idComment}`, token);
  return fetchError(result);
};

// AUTHENTFICATED

export const fetchLoadUser = () => {
  const result = axios.get("/api/auth/user");
  return fetchError(result);
};

export const fetchRegister = async ({ name, email, password }, config) => {
  const newUser = JSON.stringify({
    name,
    email,
    password
  });
  let user = await axios.post("/api/users", newUser, config);
  return fetchError(user);
};

export const fetchLoginUser = async ({ email, password }, config) => {
  const user = JSON.stringify({
    email,
    password
  });
  let result = await axios.post("/api/auth", user, config);
  return fetchError(result);
};
