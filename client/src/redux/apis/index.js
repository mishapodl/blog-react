import axios from "axios";

const fetchError = ({ status, data, error }) =>
  status >= 400 ? new Error(error) : data;

export const fetchGetPosts = async () => {
  let posts = await axios.get(`/api/posts`);
  return fetchError(posts);
};

export const fetchGetComments = async idPost => {
  let comments = await axios.get(`/api/comments/${idPost}`);
  return fetchError(comments);
};

export const fetchSendComment = async comment => {
  let sendedComment = await axios.post(`/api/comments/`, comment);
  return fetchError(sendedComment);
};
