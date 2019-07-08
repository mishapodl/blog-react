import React from "react";
import { Switch, Route } from "react-router-dom";
import { News, Post, Header, Footer } from "./containers/index";
import "./App.scss";

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={News} />
      <Route path="/post" component={Post} />
    </Switch>
    <Footer />
  </>
);

export default App;
