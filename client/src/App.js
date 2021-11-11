import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Dashpage from "./pages/dashboard";
import Admin from "./pages/admin";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/dashboard" component={Dashpage} exact />
          <Route path="/admin" component={Admin} exact />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
