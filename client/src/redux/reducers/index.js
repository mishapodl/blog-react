import { combineReducers } from "redux";

import reducerPosts from "./reducer-posts";
import reducersLoad from "./reducer-load";
import faildReducer from "./reducer-fail";

const rootReducer = combineReducers({
  posts: reducerPosts,
	isLoad: reducersLoad,
	error: faildReducer
	
});

export default rootReducer;
