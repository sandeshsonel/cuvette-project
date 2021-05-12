import React from "react";
import { connect } from "react-redux";

//actions
import { signOutUser } from "../../app/actions";

const ProfilePage = (props) => {
  const { userProfile, signOutUser } = props;
  const handleSubmit = (e) => {};

  const handleSignOut = () => {
    signOutUser();
    props.history.push("/login");
  };

  console.log("xoxo-prop", userProfile);
  return (
    <div>
      <div className="max-w-3xl m-auto">
        <div className="mt-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl">Edit your Cuvette Profile</h1>
          </div>
          <button
            onClick={handleSignOut}
            type="button"
            class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Logout
          </button>
        </div>

        <div className="mt-5">
          <div>
            <label class="block text-xl">Sandesh Sonel</label>
            <div class="mt-4 flex items-center">
              <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <button
                type="button"
                class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Change
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} action="">
          <div className="space-y-4 mt-6">
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4 md:space-y-0 lg:space-y-0 xl:space-y-0 md:flex md:space-x-4 md:items-center lg:flex lg:items-center xl:flex xl:items-center xl:space-x-4">
              <div className="w-full">
                <label className="font-medium" htmlFor="">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={userProfile.firstName}
                  // value={signUpDetails.firstName}
                  // onChange={handleChange}
                  className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                  placeholder=""
                  type="text"
                />
              </div>
              <div className="w-full">
                <label className="font-medium" htmlFor="">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={userProfile.lastName}
                  // value={signUpDetails.lastName}
                  // onChange={handleChange}
                  className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                  placeholder=""
                  type="text"
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
                  value={userProfile.phoneNumber}
                  // value={signUpDetails.phoneNumber}
                  // onChange={handleChange}
                  className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                  placeholder=""
                  type="phone"
                />
              </div>
              <div className="w-full">
                <label className="font-medium" htmlFor="">
                  Email
                </label>
                <input
                  name="email"
                  value={userProfile.firstName}
                  // value={signUpDetails.email}
                  // onChange={handleChange}
                  className="mt-1 xl:mt-2 cursor-pointer w-full outline-none rounded border py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 focus:outline-none transition-colors duration-200"
                  placeholder=""
                  type="text"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 outline-none w-full xl:w-auto focus:outline-none bg-blue-500 hover:bg-blue-600 px-16 text-white py-2 rounded-md"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
});

const mapDispatchToProps = (dispatch) => ({
  signOutUser: () => dispatch(signOutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
