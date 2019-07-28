import {
  loadPosts,
  getIdPost,
  sendComment,
  deleteComment
} from "./actions-posts";
import { loadUser, register, logout, login } from "./actions-auth";
import { clearErrors } from "./actions-errors";

export {
  loadPosts,
  getIdPost,
  sendComment,
  deleteComment,
  loadUser,
  register,
  logout,
	login,
	clearErrors
};
