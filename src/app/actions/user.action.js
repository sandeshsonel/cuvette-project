import UserProfileActionTypes from "../types/user.types";

export const setUserProfileData = (userData) => ({
  type: UserProfileActionTypes.SET_USER_PROFILE_DATA,
  payload: userData,
});

export const updateUserDetails = (updateDetail) => ({
  type: UserProfileActionTypes.UPDATE_USER_DETAILS,
  payload: updateDetail,
});

export const setUpdateUserJobDetails = (jobDetail) => ({
  type: UserProfileActionTypes.SET_UPDATE_USER_JOB_DETAILS,
  payload: jobDetail,
});

export const setUpdateUserJobDetailsSuccess = (sucessMsg) => ({
  type: UserProfileActionTypes.SET_UPDATE_USER_JOB_DETAILS_SUCCESS,
  payload: sucessMsg,
});

export const setUpdateUserJobDetailsFailed = (errorMsg) => ({
  type: UserProfileActionTypes.SET_UPDATE_USER_JOB_DETAILS_FAILED,
  payload: errorMsg,
});

export const getUserDetailsStart = () => ({
  type: UserProfileActionTypes.GET_USER_DETAILS_START,
});

export const getUserDetailsSuccess = (userDetails) => ({
  type: UserProfileActionTypes.GET_USER_DETAILS_SUCCESS,
  payload: userDetails,
});

export const getUserDetailsFailed = (errorMsg) => ({
  type: UserProfileActionTypes.GET_USER_DETAILS_FAILED,
  payload: errorMsg,
});
