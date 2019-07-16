import { POSTS, COMMENTS } from "../constants";
import { combineReducers } from "redux";

const reducerFailPosts = (state = null, action) => {
  switch (action.type) {
		case POSTS.ERROR:
      return action.error;
    case POSTS.LOADING:
    case POSTS.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

const reducerFailComments = (state = null, action) => {
  switch (action.type) {
		case COMMENTS.ERROR:
      return action.error;
    case COMMENTS.LOADING:
    case COMMENTS.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};
const faildReducer = combineReducers({
  errorPosts: reducerFailPosts,
  errorComments: reducerFailComments,
});

export default faildReducer;
