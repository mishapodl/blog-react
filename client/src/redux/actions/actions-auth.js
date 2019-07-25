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
