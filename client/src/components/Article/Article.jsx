import React from "react";
import PropTypes from "prop-types";
import "./Article.scss";

const Article = ({ post: { img, bodyPost, title, desc } }) => {
  return (
    <>
      <header>
        <h2>{title}</h2>
      </header>
      <div className="post-img">
        <img src={img ? img : `../noimage.jpg`} alt="img" />
      </div>
      <div className="post-desc">
        <h3>{desc}</h3>
        <p>{bodyPost}</p>
				<h3>{title}</h3>
        <p>{bodyPost}</p>
      </div>
      <button>Leave comment</button>
    </>
  );
};
Article.propTypes = {};
Article.defaultProps = {};

export default Article;
