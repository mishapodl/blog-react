import { POSTS } from "../constants";

const postState = {
  posts: [],
  loading: false,
  success: false
};

function postsReducer(state = postState, action) {
  switch (action.type) {
    case POSTS.POSTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case POSTS.POSTS_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
        success: true,
        loading: false,
      };
    case POSTS.POSTS_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
}

export default postsReducer;
