import { POSTS, COMMENTS } from "../constants";

// GET POSTS
export const loadPosts = () => ({
  type: POSTS.LOADING
});

export const setPosts = payload => ({
  type: POSTS.LOAD_SUCCESS,
  payload
});

export const setErrorPosts = error => ({
  type: POSTS.ERROR,
  error
});

// GET COMMENTS
export const loadComments = () => ({
  type: COMMENTS.LOADING
});

export const setComments = payload => ({
  type: COMMENTS.LOAD_SUCCESS,
  payload
});

export const setErrorComments = error => ({
  type: COMMENTS.SEND_ERROR,
  error
});

export const getIdPost = id => ({
  type: COMMENTS.ID_POST,
  id
});

// SEEND COMMENT

export const sendComment = comment => ({
  type: COMMENTS.SEND,
  comment
});

export const sendCommentSuccess = () => ({
  type: COMMENTS.SEND_SUCCESS
});

export const setErrorSendComment = error => ({
  type: COMMENTS.SEND_ERROR,
  error
});

export const deleteComment = id => ({
  type: COMMENTS.DELETE_COMMENT,
  id
});

export const deleteSuccess = () => ({
  type: COMMENTS.DELETE_SUCCESS
});
