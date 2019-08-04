import React from "react";
import PropTypes from "prop-types";
import CardPost from "./CardPost/CardPost";
import "./PopularPosts.scss";

const PopularPosts = ({ posts }) => {
  return (
    <section className="popular-posts">
      <header>
        <h2>Popular posts</h2>
      </header>
      <div>
        <CardPost posts={posts}/>
      </div>
    </section>
  );
};

PopularPosts.propTypes = {
  posts: PropTypes.array
};

export default PopularPosts;
