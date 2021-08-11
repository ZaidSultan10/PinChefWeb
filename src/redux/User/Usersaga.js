import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import { SIGNUP_SUCCESS, SIGNUP_START } from "./UserType";
import { signUpFailure, signUpSuccess } from "./UserAction";
import AuthSignUp from "../../Auth/signup";

export function* signup({ payload: { email, password, userType } }) {
  try {
    const user = yield AuthSignUp({ email, password, userType });
    if (user.status === 200) {
      yield put(signUpSuccess(user.data));
    } else {
      yield put(signUpFailure(user.err));
    }
  } catch {
    yield put(signUpFailure({ err: "Something went wrong" }));
  }
}

export function* verification() {
  yield put(signUpSuccess());
}

export function* onSignUpStart() {
  yield takeLatest(SIGNUP_START, signup);
}
export function* onSignupSuccess() {
  yield takeLatest(SIGNUP_SUCCESS, verification);
}
export function* userSaga() {
  yield all([call(onSignUpStart)]);
}
