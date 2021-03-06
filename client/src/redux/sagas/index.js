import { 
	POSTS, 
	COMMENTS, 
	USER 
} from "../constants";
import { 
	takeEvery 
} from "redux-saga/effects";
import {
  workGetPosts,
  workGetComments,
  workPostComment,
	workDeleteComment,
	workGetPopularPosts
} from "./saga-posts";
import { 
	workLoadUser, 
	workRegisterUser, 
	workLoginUser 
} from "./saga-auth";

export default function* watchSaga() {
  yield takeEvery(POSTS.LOADING, workGetPosts);
  yield takeEvery(POSTS.LOADING_POPULAR, workGetPopularPosts);
  yield takeEvery(COMMENTS.ID_POST, workGetComments);
  yield takeEvery(COMMENTS.SEND, workPostComment);
  yield takeEvery(COMMENTS.DELETE_COMMENT, workDeleteComment);
  yield takeEvery(USER.LOADING, workLoadUser);
  yield takeEvery(USER.LOGIN, workLoginUser);
  yield takeEvery(USER.REGISTER, workRegisterUser);
}
