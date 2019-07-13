import { POSTS } from "../constants";
import { takeEvery } from "redux-saga/effects";
import { workGetPosts } from "./saga-posts";

export default function* watchSaga() {
  yield takeEvery(POSTS.LOADING, workGetPosts);
}
