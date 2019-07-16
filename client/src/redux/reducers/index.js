import { combineReducers } from "redux";

import { reducerPosts, reducerComments, reducerIdPostForComments } from "./reducer-posts";
import reducersLoad from "./reducer-load";
import faildReducer from "./reducer-fail";

const rootReducer = combineReducers({
	posts: reducerPosts,
	idPost: reducerIdPostForComments,
  comments: reducerComments,
  isLoad: reducersLoad,
  error: faildReducer
});

export default rootReducer;
