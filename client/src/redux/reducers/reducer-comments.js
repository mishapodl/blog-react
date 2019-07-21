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
    case COMMENTS.SEND_SUCCESS:
      return {
        ...state,
        comments: [action.comment, ...state.comments]
      };
    case COMMENTS.DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment._id !== action.id)
      };
    default:
      return state;
  }
}
