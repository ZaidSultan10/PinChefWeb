import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGNIN_START,
  SIGNUP_START,
  SIGNOUT_START,
} from "./UserType";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
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
    default:
      return state;
  }
};

export default UserReducer;
