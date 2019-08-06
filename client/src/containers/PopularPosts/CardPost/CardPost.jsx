import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./CardPost.scss";

const CardPost = ({ posts, getIdPost }) =>
  posts.map(({ _id, img, desc, title }, i) => (
    <article key={i} data-popular={i}>
      <figure>
        <img src={img ? img : `noimage.jpg`} alt="img" />
      </figure>
      <div>
        <header>
          <h3>{title}</h3>
        </header>
        <Link to={`post/${i}`} onClick={getIdPost.bind(this, _id)}>
          <p>{desc}</p>
        </Link>
      </div>
    </article>
  ));

CardPost.propTypes = {
  posts: PropTypes.array
};

export default CardPost;
