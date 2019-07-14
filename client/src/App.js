import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import { loadPosts } from "./redux/actions/index";
import { News, Post, Header, Footer } from "./containers/index";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={News} />
          <Route path="/post/:id_post" params={`name`} component={Post} />
        </Switch>
        <Footer />
      </>
    );
  }
}

const AppRoot = withRouter(
  connect(
    null,
    { loadPosts }
  )(App)
);

export default AppRoot;
