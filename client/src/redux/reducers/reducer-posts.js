import { POSTS } from "../constants";

function reducerPosts(state = [], action) {
  switch (action.type) {
    case POSTS.LOAD_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export default reducerPosts;
