import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import FormOne from "./sections/FormOne";
import MyListings from "./sections/MyListings";

function App() {
  return (
    <div className="font-inter">
      <div>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/my-listings" component={MyListings} />
            <Route path="/intern-details" component={FormOne} />
            <Route path="/notification" component={NotificationPage} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
