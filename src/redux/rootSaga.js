import { all, call } from "redux-saga/effects";
import { userSaga } from "./User/Usersaga";
export default function* rootSaga() {
  yield all([call(userSaga)]);
}
