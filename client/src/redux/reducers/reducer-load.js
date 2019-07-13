import { POSTS } from "../constants";
import { combineReducers } from "redux";

const reducerLoadPosts = (state = false, action) => {
  switch (action.type) {
		case POSTS.LOADING:
      return false;
			case POSTS.LOAD_SUCCESS:
				return true;
    case POSTS.ERROR:
      return false;
    default:
      return state;
  }
};
const reducersLoad = combineReducers({
  isLoadPosts: reducerLoadPosts,
});

export default reducersLoad;