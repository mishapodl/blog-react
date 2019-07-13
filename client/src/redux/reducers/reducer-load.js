import { POSTS } from "../constants";
import { combineReducers } from "redux";

const loadReducerPosts = (state = false, action) => {
  switch (action.type) {
		case POSTS.LOADING:
			console.log('reducer-load-posts')
      return false;
			case POSTS.LOAD_SUCCESS:
			console.log('reducer-success-load-posts')
				return true;
    case POSTS.ERROR:
      return false;
    default:
      return state;
  }
};

const loadReducer = combineReducers({
  isLoadPost: loadReducerPosts,
});

export default loadReducer;