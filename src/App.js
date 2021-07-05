import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/signup">
        <SignUpPage/>
      </Route>
     
    </Switch>
  );
};

export default App;