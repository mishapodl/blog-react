import { POSTS, COMMENTS } from "../constants";

export const loadPosts = () => {
	return {
  	type: POSTS.LOADING
	}
};

export const setPosts = payload => ({
  type: POSTS.LOAD_SUCCESS,
  payload
});

export const setErrorPosts = error => ({
  type: POSTS.ERROR,
  error
});

export const loadComments = () => {
	return {
  	type: COMMENTS.LOADING
	}
};

export const setComments = payload => ({
  type: COMMENTS.LOAD_SUCCESS,
  payload
});

export const getComments = payload => ({
  type: COMMENTS.LOAD_SUCCESS,
  payload
});

export const setErrorComments = error => ({
  type: COMMENTS.ERROR,
  error
});
