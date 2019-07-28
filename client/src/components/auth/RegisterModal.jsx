import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../redux/actions/index";
import PropTypes from "prop-types";
import "./Modal.scss";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

class RegisterModal extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired
  };

  state = {
    modal: false,
    msg: {},
    name: "",
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

    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password
    };

    this.props.register(newUser);
    this.isToggle();
  };

  render() {
    const { modal } = this.state;
    const registerModal = (
      <div className="regisetr-modal">
        <div className="bg-overlay" />
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">*Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            autoComplete="true"
            onChange={this.onChange}
          />
          <label htmlFor="email">*Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="user name"
            onChange={this.onChange}
          />
          <label htmlFor="password">*Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={this.onChange}
          />
          <div className="form-btns">
            <button>Submit</button>
            <button onClick={this.isToggle}>Cancle</button>
          </div>
        </form>
      </div>
    );

    return (
      <>
        <button onClick={this.isToggle}>Register</button>
        {modal && registerModal}
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  { register }
)(RegisterModal);
