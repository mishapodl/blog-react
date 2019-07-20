import React from "react";
import PropTypes from "prop-types";
import { FormComment } from "../index";
import ListComments from "./ListComments/ListComments";

import "./Comments.scss";

const Comments = ({ comments, post }) => {
  return (
    <section className="comments">
      <h3>Comments</h3>
      <ListComments comments={comments} />
      <FormComment postId={post._id} />
    </section>
  );
};

Comments.propTypes = {};
Comments.defaultProps = {};

export default Comments;
