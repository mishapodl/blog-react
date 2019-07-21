import React from "react";
import PropTypes from "prop-types";
import "./CardPost.scss";

const CardPost = ({ posts }) =>
  [1, 2, 3].map((post, i) => (
    <article key={i}>
      <figure>
        <img src={`img${post}.jpg`} alt="img" />
      </figure>
      <div>
        <header>
          <h3>Lorem ipsum dolor sit.</h3>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime
          debitis praesentium nihil quam pariatur enim harum sunt quibusdam
          facere.
        </p>
      </div>
    </article>
  ));

CardPost.propTypes = {
	posts: PropTypes.array
};

export default CardPost;
