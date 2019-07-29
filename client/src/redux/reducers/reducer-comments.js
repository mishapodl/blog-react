import { COMMENTS } from "../constants";

const initialState = {
  comments: []
};

export function reducerComments(state = initialState, action) {
  switch (action.type) {
    case COMMENTS.LOAD_SUCCESS:
      return {
        ...state,
        comments: action.payload
      };
    case COMMENTS.DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment._id !== action.id)
      };
    case COMMENTS.DELETE_SUCCESS:
      return {
        ...state
      };
    default:
      return state;
  }
}
