import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import { CREATE_POST_START } from "./PostType";

export function* createPost({ payload }) {
  //   try {
  //     if (payload.imgg) {
  //       const url = yield getUrl(payload.imgg);
  //       payload.imgg = url;
  //     }
  //     const profile = yield createProfile(payload);
  //     if (profile.status === 200) {
  //       yield put(createUserProfileSuccess());
  //     } else {
  //       yield put(createUserProfilefailed(profile.err));
  //       // yield put(setSnackbar(true, "error", profile.err));
  //       console.log(profile.err);
  //     }
  //     console.log(payload);
  //   } catch (err) {
  //     yield put(createUserProfilefailed(err));
  // yield put(setSnackbar(true, "error", err));
  //   }
}

export function* onCreatePost() {
  yield takeLatest(CREATE_POST_START, createPost);
}
export function* postSaga() {
  yield all([call(onCreatePost)]);
}
