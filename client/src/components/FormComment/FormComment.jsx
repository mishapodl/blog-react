import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendComment } from "../../redux/actions/index";
import LeaveComment from "./LeaveComment/LeaveComment";
import "./FormComment.scss";

class FormComment extends Component {
  state = {
    body: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  onSubmit = e => {
    e.preventDefault();
    const { postId } = this.props;
    const { body } = this.state;

    const newComment = {
      authId: postId.slice(3, 12),
      postId,
      authName: "Michael Podlevskykh",
      body: body[0]
    };
    this.props.sendComment(newComment);
  };

  render() {
    return (
      <div>
        <h3>Leave comment</h3>
        <LeaveComment onSubmit={this.onSubmit} onChange={this.onChange} />
      </div>
    );
  }
}

FormComment.propTypes = {
  postId: PropTypes.string.isRequired,
  sendComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { sendComment }
)(FormComment);
