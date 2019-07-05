import React from "react";
import PropTypes from "prop-types";
import "./Article.scss";

const Article = ({}) => {
  return (
    <>
      <header>
        <h2>Totam vero explicabo</h2>
      </header>
      <div className="post-img">
        <img src="bg.jpg" alt="img" />
      </div>
      <button>Leave comment</button>
      <div className="post-desc">
        <h3>Esse corrupti!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          libero praesentium! Ratione cupiditate debitis repellat amet
          consequuntur velit architecto hic unde? Labore repellendus pariatur
          cum ab autem est adipisci at perspiciatis. Esse corrupti quod id amet
          eius autem vitae tempora doloribus nesciunt ut excepturi iste labore
          suscipit sed commodi sequi vero incidunt tenetur tempore, maxime
          voluptates nam. Totam vero explicabo, officia alias voluptatum quasi,
          quas eaque, eum culpa ab doloribus. Blanditiis reprehenderit sunt
          tempora quia ab in ipsa facere, vitae rerum possimus, ullam nihil
          quidem? Est, sequi recusandae dolorem omnis deserunt molestias
          possimus. Hic mollitia neque quae commodi, ratione sint?
        </p>
      </div>
      <button>Leave comment</button>
    </>
  );
};

Article.propTypes = {};
Article.defaultProps = {};

export default Article;
