import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import { SIGNUP_START, SIGNIN_START } from "./UserType";
import {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
} from "./UserAction";
import { setSnackbar } from "../Sneakbar/SneakbarAction";
import AuthSignUp from "../../Auth/signup";
import AuthSignIN from "../../Auth/signin";

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

export function* onSignUpStart() {
  yield takeLatest(SIGNUP_START, signup);
}

export function* onSignInStart() {
  yield takeLatest(SIGNIN_START, signin);
}

export function* userSaga() {
  yield all([call(onSignUpStart), call(onSignInStart)]);
}
