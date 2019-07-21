import React from "react";
import PropTypes from "prop-types";
import "./ListComments.scss";

const ListComments = ({ comments, deleteComment }) => {
  const handleDeleteComment = id => {
    deleteComment(id);
  };
  return (
    <>
      {comments.length ? (
        comments.map(({ _id, body, authName, date, img }, i) => (
          <article key={i}>
            <div className="comment-posted">
              <footer>
                <p>{authName}</p>
              </footer>
              <span>{date ? date.slice(0, 10) : "2019-00-00"}</span>
            </div>
            <div className="comment-content">
              <img
                src={
                  img
                    ? `user_img_${img}.jpg`
                    : `../user_ava_${i < 7 ? i : (i = 0)}.jpg`
                }
                alt=""
              />
              <p>{body}</p>
              <button onClick={handleDeleteComment.bind(null, _id)}>X</button>
            </div>
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
