import { POSTS } from "../constants";

export const loadPosts = () => {
	console.log('action-load')
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
