import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import StatePanel from "./components/panels/StatePanel";
import TopNavigation from "./components/navigation/TopNavigation";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import TodoList from "./components/TodoList";

const App = ({ location }) => (
  <div className="ui container">
    <StatePanel />
    <TopNavigation />
    <Route location={location} exact path="/" component={HomePage} />
    <GuestRoute location={location} exact path="/login" component={LoginPage} />
    <UserRoute
      location={location}
      exact
      path="/dashboard"
      component={DashboardPage}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
