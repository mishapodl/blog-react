import { put, call, select } from "redux-saga/effects";
import axios from "axios";
import { returnErrors } from "../actions/actions-errors";
import { loadUser, authError, userLoaded } from "../actions/actions-auth";
// import { setErrorPosts } from "../actions/actions-posts";

export function* workLoadUser() {
  try {
    yield call(loadUser);
		const result = yield axios.get("/api/auth/user", tokenConfig());
    yield put(userLoaded(result));
  } catch (result) {
    yield put(authError());
  }
}

export const tokenConfig = () => {
	const token = state => state.auth.token;
	
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
