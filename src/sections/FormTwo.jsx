import React, { useState } from "react";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import history from "../history";

import { updateUserDetails } from "../app/actions/user.action";

const FormTwo = (props) => {
  const { updateUserDetails, setValue, internJobInfo, setInternJobInfo } = props;
  const [check, setCheck] = React.useState(false);

  const [snackbar, setSnackbar] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    warning: "success",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!internJobInfo.jobTitle) {
      setSnackbar({ ...snackbar, open: true, message: "Please Enter Job Title", warning: "info" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "info" });
      }, 2000);
    } else if (!internJobInfo.jobLocation) {
      setSnackbar({ ...snackbar, open: true, message: "Please Enter Job Location", warning: "info" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "info" });
      }, 2000);
    } else {
      setValue(2);
      // history.push("/intern-details");
    }
  };
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="xl:border py-5 px-5 rounded">
        <div className="space-y-5">
          <div>
            <label className="font-semiBold text-sm xl:text-base" htmlFor="">
              Job Title
            </label>
            <input
              value={internJobInfo.jobTitle}
              onChange={(e) => setInternJobInfo({ ...internJobInfo, jobTitle: e.target.value })}
              className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
              type="text"
              placeholder="e.g. Full stack developer"
            />
          </div>
          <div>
            <label className="font-semiBold text-sm xl:text-base" htmlFor="">
              Job Location
            </label>
            <input
              value={internJobInfo.jobLocation}
              onChange={(e) => setInternJobInfo({ ...internJobInfo, jobLocation: e.target.value })}
              className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
              type="text"
              placeholder="Enter the location"
            />
          </div>
          <div onClick={(e) => setCheck(!check)} className="mt-2 flex items-center space-x-2">
            <input required className="cursor-pointer" value={check} checked={check} onChange={(e) => setCheck(!check)} type="checkbox" />
            <p className="cursor-pointer text-gray-500">This job is remote</p>
          </div>
          <button
            onClick={handleSubmit}
            className="uppercase font-semiBold bg-blue-400 hover:bg-blue-500 text-white rounded float-right px-6 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
          >
            Next
          </button>
        </div>
      </div>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: snackbar.vertical, horizontal: snackbar.horizontal }}
        open={snackbar.open}
        key={snackbar.vertical + snackbar.horizontal}
      >
        <Alert severity={snackbar.warning}>{snackbar.message}</Alert>
      </Snackbar>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateUserDetails: (data) => dispatch(updateUserDetails(data)),
});

export default connect(null, mapDispatchToProps)(FormTwo);
