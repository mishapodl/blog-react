import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./LatestPosts.scss";

const LatestPosts = ({ posts }) => {
  // console.log(posts[0])
  return (
    <div className="latest-posts-container">
      {posts.map(({ img, desc, title }, index) => (
        <article key={index}>
          <div className="bg-post-img">
            <span />
            <img src={img ? img : `noimage.jpg`} alt="img" />
          </div>
          <header>
            <h3>{title}</h3>
          </header>
          <p>{`${desc} ${desc} ${desc} ${desc}`}</p>
          <Link to={`post/${index}`}>
            <button>Read more</button>
          </Link>
        </article>
      ))}
    </div>
  );
};

LatestPosts.propTypes = {};
LatestPosts.defaultProps = {};

export default LatestPosts;
