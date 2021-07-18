import React from "react";
import { Switch,BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import UserHomePage from "./pages/user_home";
import MessengerPage from "./pages/messenger/";

const App = () => {
  return (
    <BrowserRouter>
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

      <Route path="/user">
        <UserHomePage/>
      </Route>

      <Route path="/messenger">
        <MessengerPage/>
      </Route>
     
    </Switch>

    </BrowserRouter>
  );
};

export default App;