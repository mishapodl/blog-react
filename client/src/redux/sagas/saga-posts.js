import { put, call, select } from "redux-saga/effects";
import {
  fetchGetPosts,
  fetchGetComments,
  fetchSendComment,
  fetchDeleteComment
} from "../apis/index";
import {
  setErrorPosts,
  setPosts,
  setErrorComments,
  setComments,
  deleteComment
} from "../actions/actions-posts";

const getIdPost = state => state.idPost;
const getIdComment = state => state.idComment;

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
    const idPost = yield select(getIdPost);
    const comments = yield call(fetchGetComments, idPost);
    yield put(setComments(comments));
  } catch (err) {
    yield put(setErrorComments(err));
  }
}

export function* workPostComment(comment) {
  try {
    yield call(fetchSendComment, comment);
    // yield put(sendComment(comments));
  } catch (err) {
    yield put(setErrorComments(err));
  }
}

export function* workDeleteComment(idComment) {
  try {
		console.log('delte', idComment)
    yield call(fetchDeleteComment, idComment);
    // const comments = yield call(fetchDeleteComment, idComment);
    // yield put(deleteComment(comments));
  } catch (err) {
    yield put(setErrorComments(err));
  }
}
