import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGNIN_START,
  SIGNUP_START,
  SIGNOUT_START,
  GET_VERIFICATION_CODE_FAILED,
  USER_VERIFICATION_FAILED,
  USER_VERIFICATION_SUCCESS,
  CREATE_PROFILE_FAILED,
  CREATE_PROFILE_SUCCESS,
} from "./UserType";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  profileExist: false,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_START:
    case SIGNUP_START:
    case SIGNOUT_START:
      return {
        ...state,
        error: null,
      };
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case SIGNIN_FAILURE:
    case SIGNOUT_FAILURE:
    case SIGNUP_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
      };
    case USER_VERIFICATION_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case GET_VERIFICATION_CODE_FAILED:
    case USER_VERIFICATION_FAILED:
    case CREATE_PROFILE_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        profileExist: true,
      };
    default:
      return state;
  }
};

export default UserReducer;
