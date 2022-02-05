import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Hero } from "../src/components/Hero";
import { Search } from "../src/components/Search";
import { SimpsonYDalila } from "../src/components/SimpsonYDalila";

import "../src/css/main.css";

export const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/homero-perdido">
            <SimpsonYDalila />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
