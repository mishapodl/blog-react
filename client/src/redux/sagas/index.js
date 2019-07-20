import { POSTS, COMMENTS } from "../constants";
import { takeEvery } from "redux-saga/effects";
import { workGetPosts, workGetComments, workPostComment } from "./saga-posts";

export default function* watchSaga() {
  yield takeEvery(POSTS.LOADING, workGetPosts);
  yield takeEvery(COMMENTS.ID_POST, workGetComments);
  yield takeEvery(COMMENTS.SEND_SUCCESS, workPostComment);
}
