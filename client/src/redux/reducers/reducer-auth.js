import { USER } from "../constants";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  auth: null
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
        auth: action.payload
      };
    case USER.LOGIN_SUCCESS:
    case USER.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        user: action.payload
      };
    case USER.LOGIN_FAIL:
    case USER.AUTH_ERROR:
    case USER.LOGOUT_SUCCESS:
    case USER.REGISTER_FAIL:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}
