import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendComment } from "../../redux/actions/index";
import LeaveComment from "./LeaveComment/LeaveComment";
import "./FormComment.scss";

const mapStateToProps = ({ }) => ({});

class FormComment extends Component {
  static propTypes = {};
  state = {
    desc: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  onSubmit = e => {
    e.preventDefault();
    const textComment = {
      postId: this.props.postId,
      authId: "",
      desc: console.log(this.state.desc[0])
    };
    console.log(textComment);
    this.props.sendComment(textComment);

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

export default connect(
  mapStateToProps,
  { sendComment }
)(FormComment);
