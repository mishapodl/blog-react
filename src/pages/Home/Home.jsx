import React, { Component } from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Home extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <main>
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

        <section class="latest-posts">
          <header>
            <h2>Latest posts</h2>
          </header>
          <div class="container">
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  earum totam tenetur veniam architecto nam pariatur, numquam
                  natus reprehenderit animi sapiente atque modi molestias rem,
                  eius quis magnam, perspiciatis iste.
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  earum totam tenetur veniam architecto nam pariatur, numquam
                  natus reprehenderit animi sapiente atque modi molestias rem,
                  eius quis magnam, perspiciatis iste.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio quisquam sint, quidem voluptatum ad placeat.
                </p>
                <button>Read more</button>
              </article>
            </div>
            <aside class="latest-posts-bar">
              <header>
                <h4>Popular last month</h4>
              </header>
              <div class="posts">
                <article>
                  <header>
                    <h4>Lorem ipsum dolor</h4>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    nihil quo modi temporibus obcaecati necessitatibus saepe
                    perspiciatis ut, vero id consequuntur, repellat sapiente
                    praesentium accusamus odio eum? Debitis, est eius. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                    et.
                  </p>
                  <button>Read more</button>
                </article>
                <article>
                  <header>
                    <h4>Lorem ipsum dolor</h4>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet, et.
                  </p>
                  <button>Read more</button>
                </article>
                <article>
                  <header>
                    <h4>Lorem ipsum dolor</h4>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet, et.
                  </p>
                  <button>Read more</button>
                </article>
              </div>
            </aside>
          </div>
        </section>
      </main>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home;
