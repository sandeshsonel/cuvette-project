import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { setSignInUserDetails } from "../../app/actions";

const SignInPage = (props) => {
  const { setSignInUserDetails } = props;
  const [signInDetails, setSignInDetails] = React.useState({
    email: "",
    password: "",
  });
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    warning: "success",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signInDetails.email) {
      setSnackbar({ ...snackbar, open: true, message: "Enter your username", warning: "error" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "info" });
      }, 2000);
    } else if (!signInDetails.password) {
      setSnackbar({ ...snackbar, open: true, message: "Enter your password", warning: "error" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "info" });
      }, 2000);
    } else {
      setSignInUserDetails(signInDetails);
    }
  };

  console.log("popo", signInDetails);
  return (
    <div className="px-4 py-8 max-w-3xl m-auto xl:absolute xl:inset-0 xl:flex xl:items-center xl:justify-center">
      <form onSubmit={handleSubmit} action="">
        <span className="text-2xl font-semiBold">Login to Cuvette</span>
        <div className="space-y-4 mt-6">
          <div className="w-full">
            <label className="font-medium" htmlFor="">
              Email
            </label>
            <input
              value={signInDetails.email}
              onChange={(e) => setSignInDetails({ ...signInDetails, email: e.target.value })}
              className="mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
              placeholder=""
              type="email"
              required
            />
          </div>
          <div className="w-full">
            <label className="font-medium" htmlFor="">
              Password
            </label>
            <input
              value={signInDetails.password}
              onChange={(e) => setSignInDetails({ ...signInDetails, password: e.target.value })}
              className="mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
              placeholder=""
              type="password"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 outline-none w-full font-medium uppercase bg-blue-500 hover:bg-blue-600 px-16 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign In
        </button>

        <div>
          <Link to="/join">
            <p className="mt-5 font-medium cursor-pointer text-center">
              Don't have an account yet? <span className="text-blue-600 underline">Join Cuvette</span>
            </p>
          </Link>
        </div>
      </form>
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
  setSignInUserDetails: (signInDetails) => dispatch(setSignInUserDetails(signInDetails)),
});

export default connect(null, mapDispatchToProps)(SignInPage);
