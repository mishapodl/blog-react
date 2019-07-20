import { combineReducers } from "redux";

import { reducerPosts, reducerIdPostForComments } from "./reducer-posts";
import { reducerComments } from "./reducer-comments";
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
