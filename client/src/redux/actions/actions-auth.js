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
  type: USER.REGISTER,
  body
});

export const registerSuccess = payload => ({
  type: USER.REGISTER_SUCCESS,
  payload
});

export const registerError = () => ({
  type: USER.REGISTER_FAIL
});

export const logout = () => ({
  type: USER.LOGOUT_SUCCESS
});

export const login = body => ({
  type: USER.LOGIN,
  body
});

export const loginSuccess = payload => ({
  type: USER.LOGIN_SUCCESS,
  payload
});

export const loginFail = () => ({
  type: USER.LOGIN_FAIL
});
