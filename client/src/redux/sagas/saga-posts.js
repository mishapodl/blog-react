import { put, call } from "redux-saga/effects";
import { fetchGetPosts } from "../apis/index";
import { setErrorPosts, setPosts } from "../actions/actions-posts";


export function* workGetPosts() {
  try {
		const posts = yield call(fetchGetPosts);
    yield put(setPosts(posts));
  } catch (err) {
		yield put(setErrorPosts(err));
  }
}