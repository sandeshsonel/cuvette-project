import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//actions
import { signUpUser } from "../../app/actions/auth.action";
import CircularLoader from "../../components/CircularProgressBar/CircularLoader";
const SignUpPage = (props) => {
  const { signUpUser, isLoading } = props;
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signUpDetails.password !== signUpDetails.confirmPassword) {
      return alert("Please check your confirm password");
    } else {
      signUpUser(signUpDetails);
      setSignUpDetails({ ...signUpDetails });
    }
  };
  // console.log("xoxo-props", signUpDetails);
  return (
    <div className="px-4 py-8 max-w-3xl m-auto xl:absolute xl:inset-0 xl:flex xl:items-center xl:justify-center">
      {isLoading && <CircularLoader />}
      <form onSubmit={handleSubmit} action="">
        <span className="text-2xl font-semiBold">Register to Cuvette</span>
        <div className="space-y-4 mt-6">
          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4 md:space-y-0 lg:space-y-0 xl:space-y-0 md:flex md:space-x-4 md:items-center lg:flex lg:items-center xl:flex xl:items-center xl:space-x-4">
            <div className="w-full">
              <label className="font-medium" htmlFor="">
                First Name
              </label>
              <input
                name="firstName"
                value={signUpDetails.firstName}
                onChange={handleChange}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                placeholder=""
                type="text"
                required
              />
            </div>
            <div className="w-full">
              <label className="font-medium" htmlFor="">
                Last Name
              </label>
              <input
                name="lastName"
                value={signUpDetails.lastName}
                onChange={handleChange}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                placeholder=""
                type="text"
                required
              />
            </div>
          </div>

          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4 md:space-y-0 lg:space-y-0 xl:space-y-0 md:flex md:space-x-4 md:items-center lg:flex lg:items-center xl:flex xl:items-center xl:space-x-4">
            <div className="w-full">
              <label className="font-medium" htmlFor="">
                Phone Number
              </label>
              <input
                name="phoneNumber"
                value={signUpDetails.phoneNumber}
                onChange={handleChange}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                placeholder=""
                type="phone"
                required
              />
            </div>
            <div className="w-full">
              <label className="font-medium" htmlFor="">
                Email
              </label>
              <input
                name="email"
                value={signUpDetails.email}
                onChange={handleChange}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                placeholder=""
                type="email"
                required
              />
            </div>
          </div>

          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4 md:space-y-0 lg:space-y-0 xl:space-y-0 md:flex md:space-x-4 md:items-center lg:flex lg:items-center xl:flex xl:items-center xl:space-x-4">
            <div className="w-full">
              <label className="font-medium" htmlFor="">
                Password
              </label>
              <input
                name="password"
                value={signUpDetails.password}
                onChange={handleChange}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                placeholder=""
                type="password"
                required
              />
            </div>
            <div className="w-full">
              <label className="font-medium" htmlFor="">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                value={signUpDetails.confirmPassword}
                onChange={handleChange}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                placeholder=""
                type="password"
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" className="mt-8 outline-none w-full xl:w-auto focus:outline-none bg-blue-500 hover:bg-blue-600 px-16 text-white py-2 rounded-md">
          Create Account
        </button>

        <div>
          <Link to="/login">
            <p className="mt-5 font-medium cursor-pointer text-center xl:text-left">
              Already have an account? <span className="text-blue-600 underline">Log in</span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  signUpUser: (data) => dispatch(signUpUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
