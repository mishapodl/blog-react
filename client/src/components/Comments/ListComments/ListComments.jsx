import React from "react";
import PropTypes from "prop-types";
import "./ListComments.scss";

const ListComments = ({ comments }) => {
  return (
    <>
      {comments.length ? (
        comments.map(({ desc, authName, date }, i) => (
          <article key={i}>
            <div className="comment-posted">
              <footer>
                <p>{authName}</p>
              </footer>
              <span>{date ? date.slice(0, 10) : '2019'}</span>
            </div>
            <div className="comment-content">
              <img src="/" alt="" />
              <p>{desc}</p>
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
