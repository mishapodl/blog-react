import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import { Header, Footer } from "./containers/index";
import { NotFound, Post, Home, Contacts, AboutUs } from "./pages/index";
import ScrollTo from "./hoc/scrollTo";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ScrollTo>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post/:id_post" component={Post} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contacts" component={Contacts} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ScrollTo>
        <Footer />
      </>
    );
  }
}
const AppRoot = withRouter(connect(null)(App));

export default AppRoot;
