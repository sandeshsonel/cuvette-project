import UsersActionTypes from "../app/types/user.types";
const { all, call, fork, put, takeEvery } = require("redux-saga/effects");
const { updateUserDetailsApi } = require("../utils/apiFetch");
const { setUserProfileData, setUpdateUserJobDetailsFailed } = require("../app/actions");

const updateUserJobDetailsRequest = async (data) => {
  console.log(data);
  return await updateUserDetailsApi(data)
    .then((res) => res)
    .catch((err) => err);
};

function* updateUserJobDetailsFun({ payload }) {
  console.log("popo-payload", payload);
  try {
    const userDetails = yield call(updateUserJobDetailsRequest, payload);
    console.log("xolo", userDetails);
    if (Number(userDetails.status) === 1) {
      yield put(setUserProfileData(userDetails.data));
    } else if (Number(userDetails.status) === 0) {
      yield put(setUpdateUserJobDetailsFailed(userDetails.message));
    } else {
      // alert("error creating account");
    }
  } catch (error) {
    alert(error);
    // yield put(showAuthMessage(error));
  }
}

export function* updateUserJobDetails() {
  yield takeEvery(UsersActionTypes.SET_UPDATE_USER_JOB_DETAILS, updateUserJobDetailsFun);
}

export default function* rootSaga() {
  yield all([fork(updateUserJobDetails)]);
}
