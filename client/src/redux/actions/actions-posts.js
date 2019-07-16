import { POSTS, COMMENTS } from "../constants";

// ACTIONS FOR POSTS
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

// ACTIONS FOR COMMENTS
export const loadComments = () => ({
  type: COMMENTS.LOADING
});

export const getIdPost = id => ({
  type: COMMENTS.ID_POST,
  id
});

export const setComments = payload => ({
  type: COMMENTS.LOAD_SUCCESS,
  payload
});

export const setErrorComments = error => ({
  type: COMMENTS.ERROR,
  error
});
