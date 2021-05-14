import JobActionTypes from "../types/jobs.types";

// add new job

export const getJobList = () => ({
  type: JobActionTypes.GET_JOB_LIST_START,
});
export const getJobListSuccess = (data) => ({
  type: JobActionTypes.GET_JOB_LIST_SUCCESS,
  payload: data,
});
export const getJobListFailed = (errorMsg) => ({
  type: JobActionTypes.GET_JOB_LIST_FAILED,
  payload: errorMsg,
});

// add
export const setAddNewJobDetails = (jobDetails) => ({
  type: JobActionTypes.SET_ADD_NEW_JOB_DETAILS,
  payload: jobDetails,
});

export const addNewJobSuccess = (job) => ({
  type: JobActionTypes.ADD_NEW_JOB_SUCCESS,
  payload: job,
});

export const addNewJobFailed = (errorMsg) => ({
  type: JobActionTypes.ADD_NEW_JOB_FAILED,
  payload: errorMsg,
});

// delete job
export const deleteJob = (jobDetails) => ({
  type: JobActionTypes.DELETE_JOB,
  payload: jobDetails,
});
export const deleteJobSuccess = (jobId) => ({
  type: JobActionTypes.DELETE_JOB_SUCCESS,
  payload: jobId,
});
export const deleteJobFailed = (errorMsg) => ({
  type: JobActionTypes.DELETE_JOB_FAILED,
  payload: errorMsg,
});

// update job
export const updateJob = (updateJobDetails) => ({
  type: JobActionTypes.UPDATE_JOB_DETAILS,
  payload: updateJobDetails,
});
export const updateJobSuccess = (updateJob) => ({
  type: JobActionTypes.UPDATE_JOB_DETAILS_SUCCESS,
  payload: updateJob,
});
export const updateJobFailed = (errorMsg) => ({
  type: JobActionTypes.UPDATE_JOB_DETAILS_FAILED,
  payload: errorMsg,
});
