import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_START,
  USER_VERIFICATION_START,
  USER_VERIFICATION_SUCCESS,
  USER_VERIFICATION_FAILED,
  GET_VERIFICATION_CODE_START,
  GET_VERIFICATION_CODE_SUCCESS,
  GET_VERIFICATION_CODE_FAILED,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_START,
  CREATE_PROFILE_FAILED,
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

export const getVerificationCodeStart = (id) => ({
  type: GET_VERIFICATION_CODE_START,
  payload: id,
});
export const getVerificationCodeSuccess = () => ({
  type: GET_VERIFICATION_CODE_SUCCESS,
});
export const getVerificationCodeFailed = (err) => ({
  type: GET_VERIFICATION_CODE_FAILED,
  payload: err,
});

export const verificationStart = (id, confirmationCode) => ({
  type: USER_VERIFICATION_START,
  payload: { id, confirmationCode },
});

export const verificationSuccess = (user) => ({
  type: USER_VERIFICATION_SUCCESS,
  payload: user,
});
export const verificationFailed = (error) => ({
  type: USER_VERIFICATION_FAILED,
  payload: error,
});

export const createUserProfileStart = (profile) => ({
  type: CREATE_PROFILE_START,
  payload: profile,
});

export const createUserProfileSuccess = (profile, userType) => ({
  type: CREATE_PROFILE_SUCCESS,
  payload: { user: profile, userType: userType },
});

export const createUserProfilefailed = (err) => ({
  type: CREATE_PROFILE_FAILED,
  payload: err,
});
