import { POSTS } from "../constants";
import { takeEvery } from "redux-saga/effects";
import { workGetPosts } from "./saga-posts";

export default function* watchSaga() {
	console.log('saga-load')
  yield takeEvery(POSTS.LOADING, workGetPosts);
	console.log('saga-load-after')
}
