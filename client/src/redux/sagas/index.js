import { takeEvery } from "redux-saga/effects";
import { POSTS } from "../constants";

function* success() {
  try {
    yield console.log("success");
  } catch (err) {
    console.log("fail");
  }
}

export default function* watchSaga() {
  yield takeEvery(POSTS.POSTS_LOADING, success);
}
