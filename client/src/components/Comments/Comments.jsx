import React from "react";
import PropTypes from "prop-types";
import "./Comments.scss";

const Comments = ({ comments }) => {
  return (
    <section className="comments">
      <h3>Comments</h3>
      {comments.map(({ desc, authName }, i) => (
        <article key={i}>
          <div className="comment-posted">
            <footer>
              <p>{authName}</p>
            </footer>
            <span>May 6</span>
          </div>
          <div className="comment-content">
            <img src="/" alt="" />
            <p>{desc}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

Comments.propTypes = {};
Comments.defaultProps = {};

export default Comments;
