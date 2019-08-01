import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import { loadPosts, loadUser } from "./redux/actions/index";
import { News, Post, Header, Footer } from "./containers/index";
import ScrollToTop from "./containers/ScrollToTop/ScrollToTop";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }
  render() {
    return (
      <>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={News} />
            <Route path="/post/:id_post" component={Post} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </>
    );
  }
}
const AppRoot = withRouter(
  connect(
    null,
    { loadPosts, loadUser }
  )(App)
);

export default AppRoot;
