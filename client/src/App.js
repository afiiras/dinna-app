import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Dashpage from "./pages/dashboard";
import PrivateRoute from "./PrivateRoute";
import PrivateScreen from "./components/PrivateScreen";
import ForgotPassword from "./components/Password/ForgotPassword";
import ResetPassword from "./components/Password/ResetPassword";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SigninPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/dashboard" component={Dashpage} />
        <PrivateRoute exact path="/admin" component={PrivateScreen} />
        <Route exact path="/Forgetpassword" component={ForgotPassword} />
        <Route
          exact
          path="/ResetPassword/:resetToken"
          component={ResetPassword}
        />
      </Switch>
    </Router>
  );
}

export default App;
