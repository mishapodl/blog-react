import React from "react";
import PropTypes from "prop-types";
import CardPost from "./CardPost/CardPost";
import "./PopularPosts.scss";

const PopularPosts = ({}) => {
  return (
    <section class="popular-posts">
      <header>
        <h2>Popular posts</h2>
      </header>
      <div>
        <CardPost />
      </div>
    </section>
  );
};

PopularPosts.propTypes = {};
PopularPosts.defaultProps = {};

export default PopularPosts;
