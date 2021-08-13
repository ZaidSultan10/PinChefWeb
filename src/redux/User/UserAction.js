import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_START,
} from "./UserType";

export const signUpStart = (user) => ({
  type: SIGNUP_START,
  payload: user,
});

export const signInStart = (user) => ({
  type: SIGNIN_START,
  payload: user,
});

export const signUpSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signInSuccess = (user) => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

export const signUpFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const signInFailure = (error) => ({
  type: SIGNIN_FAILURE,
  payload: error,
});
