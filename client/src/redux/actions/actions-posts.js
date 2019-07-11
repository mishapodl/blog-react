import { POSTS } from "../constants";
export const getPosts = () => {
  return {
    type: POSTS.POSTS_LOADING
  };
};
