import DashboardActionTypes from "../types/dashboard.type";
import UserProfileActionTypes from "../types/user.types";

const initial_state = {
  showSnackbar: false,
  myRoute: "/",
  notification: null,
  isLoading: false,
};

const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    case DashboardActionTypes.SET_SNACBAR_VISIBLE:
      return {
        ...state,
        showSnackbar: action.payload,
      };
    case DashboardActionTypes.SET_MY_ROUTE:
      return {
        ...state,
        myRoute: action.payload,
      };
    case DashboardActionTypes.SET_NOTIFICATION_MSG:
      return {
        ...state,
        notification: action.payload,
      };
    case UserProfileActionTypes.SET_UPDATE_USER_JOB_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case UserProfileActionTypes.SET_UPDATE_USER_JOB_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case UserProfileActionTypes.SET_UPDATE_USER_JOB_DETAILS_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
