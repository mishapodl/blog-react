import React from "react";
import PropTypes from "prop-types";
import "./AsideBarPosts.scss";

const AsideBarPosts = ({}) => {
  return (
    <aside class="latest-posts-bar">
      <header>
        <h4>Popular last month</h4>
      </header>
      <div class="posts">
        {[null, null, null].map(i => (
          <article>
            <header>
              <h4>Lorem ipsum dolor</h4>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil
              quo modi temporibus obcaecati necessitatibus saepe perspiciatis
              ut, vero id consequuntur, repellat sapiente praesentium accusamus
              odio eum? Debitis, est eius.
            </p>
            <button>Read more</button>
          </article>
        ))}
      </div>
    </aside>
  );
};

AsideBarPosts.propTypes = {};
AsideBarPosts.defaultProps = {};

export default AsideBarPosts;
