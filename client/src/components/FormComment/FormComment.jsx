import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendComment } from "../../redux/actions/index";
import LeaveComment from "./LeaveComment/LeaveComment";
import "./FormComment.scss";

class FormComment extends Component {
  static propTypes = {
    idPost: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    sendComment: PropTypes.func.isRequired
  };
  state = {
    body: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  onSubmit = e => {
    e.preventDefault();
    const { idPost, isAuthenticated, user } = this.props;
    const { body } = this.state;
    if (!isAuthenticated) return;

    const newComment = {
      postId: idPost,
      authId: user.id,
      authName: user.name,
      body: body[0]
    };

    this.props.sendComment(newComment);
  };

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div className="form-leave-comment">
        <h3>Leave comment</h3>
        <LeaveComment onSubmit={this.onSubmit} onChange={this.onChange} isAuthenticated={isAuthenticated}/>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { isAuthenticated, user }, idPost }) => ({
  idPost,
  isAuthenticated,
  user
});

export default connect(
  mapStateToProps,
  { sendComment }
)(FormComment);
