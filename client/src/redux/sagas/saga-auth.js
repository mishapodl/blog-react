import { put, call } from "redux-saga/effects";
import {
  loadUser,
  authError,
  userLoaded,
  registerSuccess,
  loginSuccess
} from "../actions/actions-auth";
import { returnErrors } from "../actions/actions-errors";
import { fetchRegister, fetchLoadUser, fetchLoginUser } from "../apis/index";
import { USER } from "../constants";

const config = {
  headers: {
    "Content-type": "application/json"
  }
};

export function* workLoadUser() {
  try {
    yield call(loadUser);
    const result = yield call(fetchLoadUser);
    yield put(userLoaded(result));
  } catch (err) {
    yield put(authError());
  }
}

export function* workRegisterUser(body) {
  try {
    const result = yield call(fetchRegister, body.body, config);
    yield put(registerSuccess(result));
  } catch (result) {
    const { data, status } = result.response;
    yield call(authError);
		yield put(returnErrors(data, status, USER.REGISTER_FAIL));
  }
}

export function* workLoginUser(body) {
  try {
    const result = yield call(fetchLoginUser, body.body, config);
    yield put(loginSuccess(result));
  } catch (result) {
    const { data, status } = result.response;
    yield put(returnErrors(data, status, USER.LOGIN_FAIL));
    yield call(authError);
  }
}
