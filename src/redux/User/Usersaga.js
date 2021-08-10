import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import { SIGNUP_SUCCESS, SIGNUP_START } from "./UserType";
import { signUpFailure, signUpSuccess } from "./UserAction";
import axios from "axios";

export function* signup({ payload: { email, password, userType } }) {
  try {
    // yield () => {
    //   axios
    //     .post("http://localhost:5000/api/user/register", {
    //       email,
    //       password,
    //       userType,
    //     })
    //     .then(function (response) {
    //       response.json();
    //     })
    //     .then((data) => put(signUpSuccess(data)))
    //     .catch((error) => put(signUpFailure(error)));

    // };
    yield put(signUpSuccess());
  } catch {
    // yield put(signUpFailure(error));
  }
}

export function* verification() {
  // we will get the user id and generate the sign up verfification process
  // get the email and will verifiy it here.
  yield put(signUpSuccess());
}

export function* onSignUpStart() {
  yield takeLatest(SIGNUP_START, signup);
}
export function* onSignupSuccess() {
  yield takeLatest(SIGNUP_SUCCESS, verification);
}
export function* userSaga() {
  yield all([call()]);
}
