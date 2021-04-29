import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "../src/components/Nav";
import { Hero } from "../src/components/Hero";
import { Footer } from "../src/components/Footer";
import { Search } from "../src/components/Search";

import "../src/css/main.css";

export const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
};
