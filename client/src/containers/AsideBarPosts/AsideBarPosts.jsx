import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./AsideBarPosts.scss";

const AsideBarPosts = ({ posts, getIdPost }) => {
  const handleGetComments = id => {
    getIdPost(id);
  };
  return (
    <aside className="latest-posts-bar">
      <header>
        <h4>Popular last month</h4>
      </header>
      <div className="posts">
        {posts.map(({ _id, title, desc }, i) => (
          <article key={i}>
            <header>
              <h4>{title}</h4>
            </header>
            <p>{desc}</p>
            <Link to={`post/${i}`}>
              <button onClick={handleGetComments.bind(this, _id)}>
                Read more
              </button>
            </Link>
          </article>
        ))}
      </div>
    </aside>
  );
};

AsideBarPosts.propTypes = {
  posts: PropTypes.array
};

export default AsideBarPosts;
