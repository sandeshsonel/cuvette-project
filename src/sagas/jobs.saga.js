import JobsActionTypes from "../app/types/jobs.types";
const { all, call, fork, put, takeEvery } = require("redux-saga/effects");
const { addNewJobApi, deleteJobApi, getJobListApi } = require("../utils/apiFetch");
const { addNewJobSuccess, addNewJobFailed, getJobListSuccess, getJobListFailed } = require("../app/actions");

const getJobListRequest = async () => {
  return await getJobListApi()
    .then((data) => {
      return data;
    })
    .catch((err) => err);
};

const addNewJobRequest = async (data) => {
  return await addNewJobApi(data)
    .then((res) => res)
    .catch((err) => err);
};

const deleteJobRequest = async (data) => {
  return await deleteJobApi(data)
    .then((res) => res)
    .catch((err) => err);
};

function* getJobsListFunction() {
  try {
    const jobsList = yield call(getJobListRequest);
    console.log("momo", jobsList);
    if (Number(jobsList.status) === 1) {
      yield put(getJobListSuccess(jobsList.data));
    } else if (Number(jobsList.status === 0)) {
      yield put(getJobListFailed(jobsList.message));
    }
  } catch (err) {
    console.log("zolo-err", err);
    alert("Cart Items Errror");
  }
}

function* addNewJobFuntion({ payload }) {
  console.log("popo-payload", payload);
  try {
    const jobsDetails = yield call(addNewJobRequest, payload);
    console.log("xolo", jobsDetails);
    if (Number(jobsDetails.status) === 1) {
      yield put(addNewJobSuccess(jobsDetails.data));
    } else if (Number(jobsDetails.status) === 0) {
      yield put(addNewJobFailed(jobsDetails.message));
    } else {
      // alert("error creating account");
    }
  } catch (error) {
    alert(error);
    // yield put(showAuthMessage(error));
  }
}

export function* getJobsList() {
  yield takeEvery(JobsActionTypes.GET_JOB_LIST_START, getJobsListFunction);
}

export function* addNewJob() {
  yield takeEvery(JobsActionTypes.SET_ADD_NEW_JOB_DETAILS, addNewJobFuntion);
}

export default function* rootSaga() {
  yield all([fork(getJobsList), fork(addNewJob)]);
}
