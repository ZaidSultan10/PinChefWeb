import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import {
  CREATE_FOOD_START,
  CREATE_MASTERCLASS_START,
  CREATE_POST_START,
  CREATE_RECIPE_START,
  CREATE_SERVICE_START,
} from "./PostType";
import { setSnackbar } from "../Sneakbar/SneakbarAction";
import getUrl from "../../BackEndRoutes/s3url";
import { createPost } from "../../BackEndRoutes/posts/post";
import { createRecipe } from "../../BackEndRoutes/posts/recipe";
import { createFood } from "../../BackEndRoutes/posts/food";
import { createService } from "../../BackEndRoutes/posts/service";
import { createMasterclass } from "../../BackEndRoutes/posts/masterclass";
import {
  createPostSuccess,
  createPostFailed,
  createRecipeSuccess,
  createRecipeFailed,
  createFoodSuccess,
  createFoodFailed,
  createServiceFailed,
  createMasterclassSuccess,
  createMasterclassFailed,
} from "./PostAction";

export function* createPostStart({ payload }) {
  try {
    if (payload.imageUpload) {
      const url = yield getUrl(payload.imageUpload);
      payload.imageUpload = url;
    }
    const profile = yield createPost(payload);
    if (profile.status === 200) {
      yield put(createPostSuccess(profile.data));
    } else {
      yield put(createPostFailed(profile.err));
      yield put(setSnackbar(true, "error", profile.err));
      console.log(profile.err);
    }
    console.log(payload);
  } catch (err) {
    yield put(createPostFailed(err));
    yield put(setSnackbar(true, "error", err));
  }
}

export function* createRecipeStart({ payload }) {
  try {
    if (payload.imageUpload) {
      const url = yield getUrl(payload.imageUpload);
      payload.imageUpload = url;
    }
    const profile = yield createRecipe(payload);
    if (profile.status === 200) {
      yield put(createRecipeSuccess(profile.data));
    } else {
      yield put(createRecipeFailed(profile.err));
      yield put(setSnackbar(true, "error", profile.err));
      console.log(profile.err);
    }
    console.log(payload);
  } catch (err) {
    yield put(createRecipeFailed(err));
    yield put(setSnackbar(true, "error", err));
  }
}

export function* createFoodStart({ payload }) {
  try {
    if (payload.imageUpload) {
      const url = yield getUrl(payload.imageUpload);
      payload.imageUpload = url;
    }
    const profile = yield createFood(payload);
    if (profile.status === 200) {
      yield put(createFoodSuccess(profile.data));
    } else {
      yield put(createFoodFailed(profile.err));
      yield put(setSnackbar(true, "error", profile.err));
      console.log(profile.err);
    }
    console.log(payload);
  } catch (err) {
    yield put(createFoodFailed(err));
    yield put(setSnackbar(true, "error", err));
  }
}

export function* createServiceStart({ payload }) {
  try {
    if (payload.imageUpload) {
      const url = yield getUrl(payload.imageUpload);
      payload.imageUpload = url;
    }
    const profile = yield createService(payload);
    if (profile.status === 200) {
      yield put(createServiceStart(profile.data));
    } else {
      yield put(createServiceFailed(profile.err));
      yield put(setSnackbar(true, "error", profile.err));
      console.log(profile.err);
    }
    console.log(payload);
  } catch (err) {
    yield put(createServiceFailed(err));
    yield put(setSnackbar(true, "error", err));
  }
}

export function* createMasterclassStart({ payload }) {
  try {
    if (payload.imageUpload) {
      const url = yield getUrl(payload.imageUpload);
      payload.imageUpload = url;
    }
    const profile = yield createMasterclass(payload);
    if (profile.status === 200) {
      yield put(createMasterclassSuccess(profile.data));
    } else {
      yield put(createMasterclassFailed(profile.err));
      yield put(setSnackbar(true, "error", profile.err));
      console.log(profile.err);
    }
    console.log(payload);
  } catch (err) {
    yield put(createMasterclassFailed(err));
    yield put(setSnackbar(true, "error", err));
  }
}

export function* onCreatePost() {
  yield takeLatest(CREATE_POST_START, createPostStart);
}

export function* onCreateRecipe() {
  yield takeLatest(CREATE_RECIPE_START, createRecipeStart);
}

export function* onCreateFood() {
  yield takeLatest(CREATE_FOOD_START, createFoodStart);
}

export function* onCreateService() {
  yield takeLatest(CREATE_SERVICE_START, createServiceStart);
}

export function* onCreateMasterclass() {
  yield takeLatest(CREATE_MASTERCLASS_START, createMasterclassStart);
}

export function* postSaga() {
  yield all([
    call(onCreatePost),
    call(onCreateRecipe),
    call(onCreateFood),
    call(onCreateService),
    call(onCreateMasterclass),
  ]);
}
