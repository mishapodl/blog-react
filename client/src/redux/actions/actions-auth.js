import { USER } from "../constants";

export const loadUser = () => ({
  type: USER.LOADING
});

export const userLoaded = payload => ({
  type: USER.LOADED,
  payload
});

export const authError = () => ({
  type: USER.AUTH_ERROR
});

export const register = body => ({
  type: USER.REGISTER_SUCCESS,
  body
});

export const registerError = () => ({
  type: USER.REGISTER_FAIL
});
