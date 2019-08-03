import { POSTS, COMMENTS } from "../constants";

export function reducerPosts(state = [], action) {
  switch (action.type) {
    case POSTS.LOAD_SUCCESS:
      return [...action.payload];
      // return [...state, ...action.payload];
    default:
      return state;
  }
}

export function reducerIdPostForComments(state = null, action) {
  switch (action.type) {
    case COMMENTS.ID_POST:
      return action.id;
    default:
      return state;
  }
}
