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
import { menuListHeader } from "../../data";
import "./Header.scss";

class Header extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  state = {
    mobile: null
  };

  isToggle = () => {
    this.setState({
      mobile: !this.state.mobile
    });
  };

  render() {
    const { isAuthenticated } = this.props;
    const { mobile } = this.state;
    return (
      <header>
        <div>
          <Logo />
          <div className="menu-panel">
            <Navigation
              toggle={this.isToggle}
              mobile={mobile}
              menu={menuListHeader}
            />
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
