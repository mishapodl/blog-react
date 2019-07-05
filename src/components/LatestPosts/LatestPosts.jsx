import React from "react";
import PropTypes from "prop-types";
import "./LatestPosts.scss";

const LatestPosts = ({}) => {
  return (
    <div class="latest-posts-container">
      <article>
        <div class="bg-post-img">
          <span />
          <img src="img1.jpg" alt="img" />
        </div>
        <header>
          <h3>Lorem, ipsum dolor.</h3>
        </header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim earum
          totam tenetur veniam architecto nam pariatur, numquam natus
          reprehenderit animi sapiente atque modi molestias rem, eius quis
          magnam, perspiciatis iste.
        </p>
        <button>Read more</button>
      </article>
      <article>
        <div class="bg-post-img">
          <span />
          <img src="img2.jpg" alt="img" />
        </div>
        <header>
          <h3>Animi maxime debitis</h3>
        </header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim earum
          totam tenetur veniam architecto nam pariatur, numquam natus
          reprehenderit animi sapiente atque modi molestias rem, eius quis
          magnam, perspiciatis iste.
        </p>
        <button>Read more</button>
      </article>
      <article>
        <div class="bg-post-img">
          <span />
          <img src="img3.jpg" alt="img" />
        </div>
        <header>
          <h3>Lorem</h3>
        </header>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          quisquam sint, quidem voluptatum ad placeat.
        </p>
        <button>Read more</button>
      </article>
    </div>
  );
};

LatestPosts.propTypes = {};
LatestPosts.defaultProps = {};

export default LatestPosts;
