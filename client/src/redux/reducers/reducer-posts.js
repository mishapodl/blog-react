import { POSTS } from "../constants";

const postState = {
  posts: []
};

function postsReducer(state = postState, action) {
  switch (action.type) {
    case POSTS.LOAD_SUCCESS:
      console.log("reducer-success");
      return {
        ...state,
        posts: [...action.payload]
      };
    default:
      return state;
  }
}

export default postsReducer;
