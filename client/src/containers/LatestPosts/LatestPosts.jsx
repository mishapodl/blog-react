import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./LatestPosts.scss";

const LatestPosts = ({ posts, getIdPost }) => {
  const handleGetComments = id => {
    getIdPost(id);
  };
  return (
    <div className="latest-posts-container">
      {posts.map(({ _id, img, desc, title }, index) => (
        <article key={index}>
          <div className="bg-post-img">
            <span />
            <img src={img ? img : `noimage.jpg`} alt="img" />
          </div>
          <header>
            <h3>{title}</h3>
          </header>
          <p>{desc.length > 70 ? `${desc}` : `${desc} ${desc} ${desc}`}</p>
          <Link to={`post/${index}`}>
            <button onClick={handleGetComments.bind(this, _id)}>
              Read more
            </button>
          </Link>
        </article>
      ))}
    </div>
  );
};

LatestPosts.propTypes = {
  posts: PropTypes.array,
  getIdPost: PropTypes.func
};

export default LatestPosts;
