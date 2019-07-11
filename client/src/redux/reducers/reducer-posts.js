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
        isLoading: true
      };
    case POSTS.POSTS_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
        success: true,
        isLoading: false,
      };
    case POSTS.POSTS_ERROR:
      return {
        ...state,
        isLoading: true,
        success: false,
      };
    default:
      return state;
  }
}

export default postsReducer;
