import { put, call } from "redux-saga/effects";
import { fetchGetPosts, fetchGetComments } from "../apis/index";
import { setErrorPosts, setPosts, setErrorComments, setComments } from "../actions/actions-posts";


export function* workGetPosts() {
  try {
		const posts = yield call(fetchGetPosts);
    yield put(setPosts(posts));
  } catch (err) {
		yield put(setErrorPosts(err));
  }
}

export function* workGetComments() {
  try {
		const comments = yield call(fetchGetComments);
    yield put(setComments(comments));
  } catch (err) {
		yield put(setErrorComments(err));
  }
}