import React, { Component } from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";

class Article extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <main>
        <article className="post">
          <header>
            <h2>Totam vero explicabo</h2>
          </header>

          <div className="post-img">
            <img src="bg.jpg" alt="img" />
          </div>

          <div className="post-desc">
            <h3>Esse corrupti!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              libero praesentium! Ratione cupiditate debitis repellat amet
              consequuntur velit architecto hic unde? Labore repellendus
              pariatur cum ab autem est adipisci at perspiciatis. Esse corrupti
              quod id amet eius autem vitae tempora doloribus nesciunt ut
              excepturi iste labore suscipit sed commodi sequi vero incidunt
              tenetur tempore, maxime voluptates nam. Totam vero explicabo,
              officia alias voluptatum quasi, quas eaque, eum culpa ab
              doloribus. Blanditiis reprehenderit sunt tempora quia ab in ipsa
              facere, vitae rerum possimus, ullam nihil quidem? Est, sequi
              recusandae dolorem omnis deserunt molestias possimus. Hic mollitia
              neque quae commodi, ratione sint?
            </p>
          </div>
          <button>Leave comment</button>
        </article>

        <section className="comments">
          <h3>Comments</h3>
          <article>
            <div className="comment-posted">
              <footer>
                <p>Michael Podlevskykh</p>
              </footer>
              <span>May 6</span>
            </div>
            <div className="comment-content">
              <img src="/" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis blanditiis dolorem molestias assumenda fuga
                consequuntur ad amet nulla. Quia nemo iure sed totam eaque
                eveniet ipsa cumque quod quos beatae temporibus asperiores sunt
                itaque voluptas, architecto, at molestias aliquid quibusdam esse
                sapiente, possimus cupiditate tempore. Minima excepturi aliquam
                tempora perspiciatis.
              </p>
            </div>
          </article>
          <article>
            <div className="comment-posted">
              <footer>
                <p>Eugen Podlevskykh</p>
              </footer>
              <span>June 16</span>
            </div>
            <div className="comment-content">
              <img src="/" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                ea perferendis blanditiis asperiores porro sapiente dolorum rem,
                quod laborum laboriosam.
              </p>
            </div>
          </article>
          <article>
            <div className="comment-posted">
              <footer>
                <p>Alex Podlevskykh</p>
              </footer>
              <span>March 23</span>
            </div>
            <div className="comment-content">
              <img src="/" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium consectetur eaque, ab repellat voluptates facere
                doloremque dolorum a, nostrum dolore eveniet doloribus voluptas
                illo laboriosam assumenda fugit ducimus consequatur quod?
              </p>
            </div>
          </article>
        </section>
      </main>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

// export default connect(
// mapStateToProps,
// mapDispatchToProps
// )(Article);

export default Article;
