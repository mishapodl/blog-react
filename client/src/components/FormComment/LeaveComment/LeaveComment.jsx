import React from "react";
import PropTypes from "prop-types";
import "./LeaveComment.scss";

const LeaveComment = ({ onSubmit, onChange, isAuthenticated, body }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="body" />
    <textarea
      name="body"
      id="body"
      cols="30"
      rows="10"
      placeholder="Leave your comment..."
      onChange={onChange}
      value={body}
    />
    <div>
      <button type="submit">Submit</button>
      <span className={!isAuthenticated ? `active` : ""}>
        PLEASE, LOGIN FOR LEAVE COMMENT!
      </span>
    </div>
  </form>
);

LeaveComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default LeaveComment;
