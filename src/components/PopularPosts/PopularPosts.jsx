import React from "react";
import PropTypes from "prop-types";
import "./PopularPosts.scss";

const PopularPosts = ({}) => {
  return (
    <section class="popular-posts">
      <header>
        <h2>Popular posts</h2>
      </header>
      <div>
        <article>
          <figure>
            <img src="img1.jpg" alt="img" />
          </figure>
          <div>
            <header>
              <h3>Lorem ipsum dolor sit.</h3>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              maxime debitis praesentium nihil quam pariatur enim harum sunt
              quibusdam facere.
            </p>
          </div>
        </article>
        <article>
          <figure>
            <img src="img2.jpg" alt="img" />
          </figure>
          <div>
            <header>
              <h3>Lorem ipsum dolor sit.</h3>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              maxime debitis praesentium nihil quam pariatur enim harum sunt
              quibusdam facere.
            </p>
          </div>
        </article>
        <article>
          <figure>
            <img src="img3.jpg" alt="img" />
          </figure>
          <div>
            <header>
              <h3>Lorem ipsum dolor sit.</h3>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              maxime debitis praesentium nihil quam pariatur enim harum sunt
              quibusdam facere.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

PopularPosts.propTypes = {};
PopularPosts.defaultProps = {};

export default PopularPosts;
