import DashboardActionTypes from "../types/dashboard.type";

export const setSnackbarVisible = (flag) => ({
  type: DashboardActionTypes.SET_SNACBAR_VISIBLE,
  payload: flag,
});

export const setRoute = (route) => ({
  type: DashboardActionTypes.SET_MY_ROUTE,
  payload: route,
});

export const setNotification = (msg) => ({
  type: DashboardActionTypes.SET_NOTIFICATION_MSG,
  payload: msg,
});
