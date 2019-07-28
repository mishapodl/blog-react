import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Logo,
  Navigation,
  BarContacts,
  RegisterModal,
  Logout,
  Login
} from "../../components/index";
import "./Header.scss";

class Header extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  render() {
    const { isAuthenticated } = this.props;
    return (
      <header>
        <div>
          <Logo />
          <Navigation />
          <div className="auth-panel">
            {!isAuthenticated ? (
              <>
                <RegisterModal />
                <Login />
              </>
            ) : (
              <Logout />
            )}
          </div>
        </div>
        <h1>Top blog in the world!</h1>
        <BarContacts />
      </header>
    );
  }
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
});

export default connect(mapStateToProps)(Header);
