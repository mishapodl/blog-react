import React from "react";
import PropTypes from "prop-types";
import "./ListComments.scss";

const ListComments = ({ comments, deleteComment }) => {
	const handleDeleteComment = id => {
		deleteComment(id)
	}
  return (
    <>
      {comments.length ? (
        comments.map(({ _id, body, authName, date }, i) => (
          <article key={i}>
            <div className="comment-posted">
              <footer>
                <p>{authName}</p>
              </footer>
              <span>{date ? date.slice(0, 10) : '2019-00-00'}</span>
            </div>
            <div className="comment-content">
              <img src="/" alt="" />
              <p>{body}</p>
            </div>
						<button onClick={handleDeleteComment.bind(null, _id)}>X</button>
          </article>
        ))
      ) : (
        <article>
          <p>No Comments!</p>
        </article>
      )}
    </>
  );
};

ListComments.propTypes = {};
ListComments.defaultProps = {};

export default ListComments;
