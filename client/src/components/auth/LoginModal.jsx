import React, { Component } from "react";
import { connect } from "react-redux";
import { login, clearErrors } from "../../redux/actions/index";
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
    msg: null,
    email: "",
    password: ""
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "USER_LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  isToggle = () => {
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const User = {
      email,
      password
    };

    this.props.login(User);
  };

  render() {
    const { modal, msg } = this.state;
    const loginModal = (
      <div className="regisetr-modal">
        <div className="bg-overlay" />
        <div className="modal-form">
          {msg ? <p>{msg}</p> : null}
          <form onSubmit={this.onSubmit}>
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
      </div>
    );

    return (
      <>
        <button onClick={this.isToggle}>Login</button>
        {modal && loginModal}
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(loginModal);
