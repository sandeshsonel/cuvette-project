import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import FormOne from "./sections/FormOne";
import MyListings from "./sections/MyListings";

import history from "./history";
import SignUpPage from "./pages/SignInSignUpPage/SignUpPage";
import SignInPage from "./pages/SignInSignUpPage/SignInPage";
import InternInfo from "./pages/InternInfo/InternInfo";
import Routes from "./Routes";
class App extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps)(App);
