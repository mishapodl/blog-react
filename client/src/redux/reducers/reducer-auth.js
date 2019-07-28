import { USER } from "../constants";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER.LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER.LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case USER.LOGIN_SUCCESS:
    case USER.REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case USER.LOGIN_FAIL:
    case USER.AUTH_ERROR:
    case USER.LOGOUT_SUCCESS:
    case USER.REGISTER_FAIL:
      localStorage.setItem("token", action.payload);
      return {
				...state,
				token: null,
				isAuthenticated: false,
				isLoading: false,
				user: null
      };
    default:
      return state;
  }
}
