import { POSTS, COMMENTS } from "../constants";
import { combineReducers } from "redux";

const reducerFailLoadPosts = (state = null, action) => {
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

const reducerFailLoadComments = (state = null, action) => {
  switch (action.type) {
    case COMMENTS.LOAD_ERROR:
      return action.error;
    case COMMENTS.LOADING:
    case COMMENTS.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

const reducerFailSendComment = (state = null, action) => {
  switch (action.type) {
    case COMMENTS.SEND_ERROR:
      return action.error;
    case COMMENTS.LOADING:
    case COMMENTS.SEND_SUCCESS:
      return null;
    default:
      return state;
  }
};
const faildReducer = combineReducers({
  errorLoadPosts: reducerFailLoadPosts,
  errorLoadComments: reducerFailLoadComments,
  errorSendComment: reducerFailSendComment
});

export default faildReducer;
