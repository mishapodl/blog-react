import { put, call } from "redux-saga/effects";
import {
  loadUser,
  authError,
  userLoaded,
  registerSuccess,
  loginSuccess
} from "../actions/actions-auth";
import {
  fetchRegister,
  fetchLoadUser,
  fetchLoginUser
} from "../apis/index";


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
    yield put(authError());
  }
}

export function* workLoginUser(body) {
  try {
    const result = yield call(fetchLoginUser, body.body, config);
    yield put(loginSuccess(result));
  } catch (result) {
    yield put(authError());
  }
}
