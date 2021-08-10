import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_START,
} from "./UserType";

export const signUpStart = (user) => ({
  type: SIGNUP_START,
  payload: user,
});

// export const signUpSuccess = (user) => ({
//   type: SIGNUP_SUCCESS,
//   payload: user,
// });

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const signUpFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});
