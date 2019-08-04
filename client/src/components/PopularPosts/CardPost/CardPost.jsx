import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./CardPost.scss";

const CardPost = ({ posts }) =>
  posts.map(({ _id, img, desc, title }, i) => (
    <article key={i} onClick={() => {}}>
      <figure>
        <img src={img ? img : `noimage.jpg`} alt="img" />
      </figure>
      <div>
        <header>
          <h3>{title}</h3>
        </header>
        <Link to={`post/${i}`}>
          <p>{desc.length > 70 ? `${desc}` : `${desc} ${desc} ${desc}`}</p>
        </Link>
      </div>
    </article>
  ));

CardPost.propTypes = {
  posts: PropTypes.array
};

export default CardPost;
