import { ERRORS } from "../constants";

const initialState = {
  msg: {},
  status: null,
  id: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ERRORS.GET_ERRORS:
      const { msg, status, id } = action.payload;
      return {
        msg,
        status,
        id
      };
    case ERRORS.CLEAR_ERRORS:
      return {
				msg: {},
        status: null,
        id: null
			};
    default:
      return state;
  }
}
