import { POSTS } from "../constants";

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
