import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
     
    </Switch>
  );
};

export default App;