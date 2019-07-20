import { COMMENTS } from "../constants";

export function reducerComments(state = [], action) {
  switch (action.type) {
    case COMMENTS.LOAD_SUCCESS:
      return [action.payload];
    case COMMENTS.SEND_SUCCESS:
      return [state[0].concat(action.comment)];
    default:
      return state;
  }
}
