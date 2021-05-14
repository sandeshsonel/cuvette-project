import { all } from "redux-saga/effects";

import authSaga from "./auth.saga";
import userSaga from "./user.saga";
import jobsSaga from "./jobs.saga";

export default function* rootSaga(getState) {
  yield all([authSaga(), userSaga(), jobsSaga()]);
}
