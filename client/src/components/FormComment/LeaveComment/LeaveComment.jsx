import React from "react";
import PropTypes from "prop-types";
import "./LeaveComment.scss";

const LeaveComment = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="userSComment" />
    <textarea
      name="textComment"
      id="userSComment"
      cols="30"
      rows="10"
      placeholder="Leave your comment..."
      onChange={onChange}
    />
    <input type="submit" value="Submit" />
  </form>
);

LeaveComment.propTypes = {};
LeaveComment.defaultProps = {};

export default LeaveComment;
