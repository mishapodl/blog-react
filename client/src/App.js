import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import { News, Post, Header, Footer } from "./containers/index";
import { ScrollToTop, NotFound } from "./containers/index";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={News} />
            <Route path="/post/:id_post" component={Post} />
            <Route path="/about" component={Post} />
            <Route path="/contacts:id_post" component={Post} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </>
    );
  }
}
const AppRoot = withRouter(connect(null)(App));

export default AppRoot;
