import { combineReducers } from "redux";

import postsReducer from "./reducer-posts";
import loadReducer from "./reducer-load";

const rootReducer = combineReducers({
  posts: postsReducer,
  isLoad: loadReducer
});

export default rootReducer;
