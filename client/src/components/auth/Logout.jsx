import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "./../../redux/actions/index";
import PropTypes from "prop-types";
import "./Modal.scss";
class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return <button onClick={this.props.logout}>Logout</button>;
  }
}

export default connect(
  null,
  { logout }
)(Logout);
