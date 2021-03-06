import { takeLatest, put, all, call } from "@redux-saga/core/effects";

import {
  SIGNUP_START,
  SIGNIN_START,
  GET_VERIFICATION_CODE_START,
  USER_VERIFICATION_START,
  CREATE_PROFILE_START,
} from "./UserType";
import {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  getVerificationCodeFailed,
  getVerificationCodeSuccess,
  verificationFailed,
  verificationSuccess,
  createUserProfileSuccess,
  createUserProfilefailed,
} from "./UserAction";
import { setSnackbar } from "../Sneakbar/SneakbarAction";
import AuthSignUp from "../../BackEndRoutes/signup";
import AuthSignIN from "../../BackEndRoutes/signin";
import {
  getVerificationCode,
  verifyUser,
} from "../../BackEndRoutes/verification";
import { createProfile } from "../../BackEndRoutes/createProfile";
import getUrl from "../../BackEndRoutes/s3url";

export function* signup({ payload: { email, password, userType } }) {
  try {
    const user = yield AuthSignUp({ email, password, userType });
    if (user.status === 200) {
      yield put(signUpSuccess(user.data));
    } else {
      yield put(signUpFailure(user.err));
      yield put(setSnackbar(true, "error", user.err));
    }
  } catch (err) {
    yield put(signUpFailure({ err }));
    yield put(setSnackbar(true, "error", err));
  }
}

export function* signin({ payload: { email, password, userType } }) {
  try {
    const user = yield AuthSignIN({ email, password, userType });

    if (user.status === 200) {
      yield put(signInSuccess(user.data));
    } else {
      yield put(signInFailure(user.err));
      yield put(setSnackbar(true, "error", user.err));
    }
  } catch (err) {
    yield put(signInFailure({ err }));
    yield put(setSnackbar(true, "error", err));
  }
}

export function* getVerificationCodeSaga({ payload }) {
  try {
    const message = yield getVerificationCode(payload);
    if (message.status === 200) {
      yield put(getVerificationCodeSuccess());
      yield put(setSnackbar(true, "success", message.data));
    } else {
      yield put(getVerificationCodeFailed(message.err));
      yield put(setSnackbar(true, "error", message.err));
    }
  } catch (err) {
    yield put(getVerificationCodeFailed(err));
    yield put(setSnackbar(true, "error", err));
  }
}

export function* userVerification({ payload: { id, confirmationCode } }) {
  try {
    const message = yield verifyUser(id, confirmationCode);
    // let message = { status: 200, data: {} };
    console.log(confirmationCode);
    if (message.status === 200) {
      yield put(verificationSuccess(message.data));
      yield put(setSnackbar(true, "success", "Account Confrimed Successfully"));
    } else {
      yield put(verificationFailed(message.err));
      yield put(setSnackbar(true, "error", message.err));
      console.log(message.err);
    }
  } catch (err) {
    yield put(verificationFailed(err));
    yield put(setSnackbar(true, "error", err));
  }
}

export function* createUserProfile({ payload }) {
  try {
    if (payload.imgg) {
      const url = yield getUrl(payload.imgg);
      payload.imgg = url;
    }

    const profile = yield createProfile(payload);
    if (profile.status === 200) {
      yield put(createUserProfileSuccess());
    } else {
      yield put(createUserProfilefailed(profile.err));
      // yield put(setSnackbar(true, "error", profile.err));
      console.log(profile.err);
    }
    console.log(payload);
  } catch (err) {
    yield put(createUserProfilefailed(err));
    // yield put(setSnackbar(true, "error", err));
  }
}

export function* onSignUpStart() {
  yield takeLatest(SIGNUP_START, signup);
}

export function* onSignInStart() {
  yield takeLatest(SIGNIN_START, signin);
}
export function* onGetVerificationCode() {
  yield takeLatest(GET_VERIFICATION_CODE_START, getVerificationCodeSaga);
}
export function* onUserVerification() {
  yield takeLatest(USER_VERIFICATION_START, userVerification);
}

export function* onCreateProfile() {
  yield takeLatest(CREATE_PROFILE_START, createUserProfile);
}
export function* userSaga() {
  yield all([
    call(onSignUpStart),
    call(onSignInStart),
    call(onGetVerificationCode),
    call(onUserVerification),
    call(onCreateProfile),
  ]);
}
