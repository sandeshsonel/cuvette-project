import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import FormOne from "./sections/FormOne";
import MyListings from "./sections/MyListings";

import history from "./history";

function App() {
  return (
    <div className="font-inter">
      <div>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/my-listings" component={MyListings} />
            <Route path="/intern-details" component={FormOne} />
            <Route path="/notification" component={NotificationPage} />
            <Route path="/profile" component={ProfilePage} />

            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
