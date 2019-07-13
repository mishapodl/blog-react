import { POSTS } from "../constants";

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
const faildReducer = combineReducers({
  errorPosts: reducerFailPosts,
});

export default faildReducer;
