import { ERRORS } from "../constants";

export const returnErrors = (msg, status, id = null) => ({
  type: ERRORS.GET_ERRORS,
  payload: { msg, status, id }
});

export const clearErrors = () => ({
  type: ERRORS.CLEAR_ERRORS
});
