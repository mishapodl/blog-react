import { POSTS, COMMENTS } from "../constants";
import { takeEvery } from "redux-saga/effects";
import { workGetPosts, workGetComments } from "./saga-posts";

export default function* watchSaga() {
  yield takeEvery(POSTS.LOADING, workGetPosts);
  yield takeEvery(COMMENTS.LOADING, workGetComments);
}
