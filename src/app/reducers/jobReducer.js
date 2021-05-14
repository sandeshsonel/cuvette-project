import JobActionTypes from "../types/jobs.types";

const initialState = {
  myJobs: [],
  isLoading: false,
  errorMsg: null,
  apiResponse: 0,
};

const myListingReducer = (state = initialState, action) => {
  switch (action.type) {
    //get
    case JobActionTypes.GET_JOB_LIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case JobActionTypes.GET_JOB_LIST_SUCCESS:
      return {
        ...state,
        myJobs: action.payload,
        isLoading: false,
      };
    case JobActionTypes.GET_JOB_LIST_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    //add
    case JobActionTypes.SET_ADD_NEW_JOB_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case JobActionTypes.ADD_NEW_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        apiResponse: 1,
        myJobs: action.payload,
      };
    case JobActionTypes.ADD_NEW_JOB_FAILED:
      return {
        ...state,
        isLoading: false,
        apiResponse: 2,
        errorMsg: action.payload,
      };
    case JobActionTypes.UPDATE_API_RESPONSE:
      return {
        ...state,
        apiResponse: action.payload,
      };

    default:
      return state;
  }
};

export default myListingReducer;
