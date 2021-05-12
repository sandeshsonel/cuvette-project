const axios = require("axios");
const store = require("../store/index");
const { signUpUrl, signInUrl, userDetailsUrl } = require("../config");
const axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
};

export const signInUser = async (data) => {
  console.log("popo", data);
  try {
    let axiosResult = await axios.post(signInUrl, data, axiosConfig);
    return axiosResult && axiosResult.data;
  } catch (err) {
    throw err;
  }
};

export const signUpUser = async (data) => {
  console.log(data);
  try {
    let axiosResult = await axios.post(signUpUrl, data, axiosConfig);
    return axiosResult && axiosResult.data;
  } catch (err) {
    throw err;
  }
};

export const updateUserDetailsApi = async (data) => {
  console.log("bobo-data", data);
  const { token } = store.default.store.getState().auth;
  console.log("bobo", token);
  const postObj = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  };
  try {
    let axiosResult = await axios.post(userDetailsUrl, data, postObj);
    console.log("momo-axios", axiosResult);
    return axiosResult && axiosResult.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
