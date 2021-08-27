import { all, call } from "redux-saga/effects";
import { userSaga } from "./User/Usersaga";
import { postSaga } from "./Post/PostSaga";
export default function* rootSaga() {
  yield all([call(userSaga), call(postSaga)]);
}
