import {
  loadPosts,
  getIdPost,
  sendComment,
  sendCommentSuccess,
  deleteComment,
	setComments,
	loadPopularPosts
} from "./actions-posts";
import { loadUser, register, logout, login } from "./actions-auth";
import { clearErrors } from "./actions-errors";

export {
  loadPosts,
  getIdPost,
  sendComment,
  sendCommentSuccess,
  deleteComment,
  loadUser,
  register,
  logout,
	login,
  clearErrors,
	setComments,
	loadPopularPosts
};
