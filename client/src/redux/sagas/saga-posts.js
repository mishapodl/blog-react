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
  sendCommentSuccess,
  setComments,
  deleteSuccess
} from "../actions/actions-posts";

const getIdPost = state => state.idPost;
const getToken = state => state.auth.token;

const tokenConfig = token => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};

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
    const idPost = yield select(getIdPost);
    const token = yield select(getToken);

    yield call(fetchSendComment, comment, tokenConfig(token));
    yield put(sendCommentSuccess());
    
    const comments = yield call(fetchGetComments, idPost);
    yield put(setComments(comments));
  } catch (err) {
    yield put(setErrorComments(err));
  }
}

export function* workDeleteComment(idComment) {
  try {
    const token = yield select(getToken);
    yield call(fetchDeleteComment, idComment.id, tokenConfig(token));
    yield put(deleteSuccess());
  } catch (err) {
    yield put(setErrorComments(err));
  }
}
