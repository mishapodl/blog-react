import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/index";
import PropTypes from "prop-types";
import "./Modal.scss";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

class loginModal extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired
  };

  state = {
    modal: false,
    msg: {},
    email: "",
    password: ""
  };

  isToggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const User = {
      email,
      password
    };

    this.props.login(User);
    this.isToggle();
  };

  render() {
    const { modal } = this.state;
    const loginModal = (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="email" />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={this.onChange}
        />
        <label htmlFor="password" />
        <input
          type="password"
          id="password"
          name="password"
					placeholder="Password"
					autoComplete="new-password"
          onChange={this.onChange}
        />
        <br />
        <button>Login</button>
        <br />
        <button onClick={this.isToggle}>Cancle</button>
      </form>
    );

    return (
      <div className="regisetr-modal">
        <button onClick={this.isToggle}>Login</button>
        {modal && loginModal}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { login }
)(loginModal);
