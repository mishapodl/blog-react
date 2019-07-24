import { combineReducers } from "redux";

import { reducerPosts, reducerIdPostForComments } from "./reducer-posts";
import { reducerComments } from "./reducer-comments";
import reducersLoad from "./reducer-load";
import faildReducer from "./reducer-fail";
import errorReducer from "./reducer-error";
import authReducer from "./reducer-auth";

const rootReducer = combineReducers({
  posts: reducerPosts,
  idPost: reducerIdPostForComments,
  comments: reducerComments,
  isLoad: reducersLoad,
	faild: faildReducer,
	auth: authReducer,
	error: errorReducer

});

export default rootReducer;
