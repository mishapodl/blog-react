import React, { Component } from "react";
import { connect } from "react-redux";
import { register, clearErrors } from "../../redux/actions/index";
import PropTypes from "prop-types";
import { Input } from "../UI/index";
import "./Modal.scss";

const mapStateToProps = ({ error, auth: { isAuthenticated } }) => ({
  isAuthenticated,
  error
});

class RegisterModal extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired
  };

  state = {
    modal: false,
    msg: null,
    name: "",
    email: "",
    password: ""
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "USER_REGISTER_FAIL") {
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

    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password
    };

    this.props.register(newUser);
  };

  render() {
    const { modal, msg } = this.state;
    const registerModal = (
      <div className="regisetr-modal">
        <div className="bg-overlay" />
        <div className="modal-form">
          {msg ? <p>{msg}</p> : null}
          <form onSubmit={this.onSubmit}>
            <Input
              type={`name`}
              onChange={this.onChange}
              autoComplete={`off`}
            />
            <Input
              type={`email`}
              onChange={this.onChange}
              autoComplete={`on`}
            />
            <Input
              type={`password`}
              onChange={this.onChange}
              autoComplete={`on`}
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
        <button onClick={this.isToggle}>Register</button>
        {modal && registerModal}
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(RegisterModal);
