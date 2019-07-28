import React from "react";
import PropTypes from "prop-types";
import { FormComment } from "../index";
import ListComments from "./ListComments/ListComments";

import "./Comments.scss";

const Comments = ({ comments, post, deleteComment }) => {
  return (
    <section className="comments">
      <h3>Comments</h3>
      <ListComments comments={comments} deleteComment={deleteComment} />
      <FormComment postId={post._id} />
    </section>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
  post: PropTypes.object,
  deleteComment: PropTypes.func
};

export default Comments;
