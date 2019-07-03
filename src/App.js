import React from "react";
import { Header } from "./components/index";

import "./App.scss";

const App = () => (
  <>
    <Header />

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
            consequuntur velit architecto hic unde? Labore repellendus pariatur
            cum ab autem est adipisci at perspiciatis. Esse corrupti quod id
            amet eius autem vitae tempora doloribus nesciunt ut excepturi iste
            labore suscipit sed commodi sequi vero incidunt tenetur tempore,
            maxime voluptates nam. Totam vero explicabo, officia alias
            voluptatum quasi, quas eaque, eum culpa ab doloribus. Blanditiis
            reprehenderit sunt tempora quia ab in ipsa facere, vitae rerum
            possimus, ullam nihil quidem? Est, sequi recusandae dolorem omnis
            deserunt molestias possimus. Hic mollitia neque quae commodi,
            ratione sint?
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
              consequuntur ad amet nulla. Quia nemo iure sed totam eaque eveniet
              ipsa cumque quod quos beatae temporibus asperiores sunt itaque
              voluptas, architecto, at molestias aliquid quibusdam esse
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ea
              perferendis blanditiis asperiores porro sapiente dolorum rem, quod
              laborum laboriosam.
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
    {/* 
		
		    <main style="width: 100%;">
      <section class="popular-posts">
        <header>
          <h2>Popular posts</h2>
        </header>
        <div>
          <article>
            <figure>
              <img src="img/img1.jpg" alt="img" />
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
              <img src="img/img2.jpg" alt="img" />
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
              <img src="img/img3.jpg" alt="img" />
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
                <span></span>
                <img src="img/img1.jpg" alt="img" />
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
                <span></span>
                <img
                  src="img/img2.jpg"
                  alt="img"
                />
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
                <span></span>
                <img
                  src="img/img3.jpg"
                  alt="img"
                />
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
                  praesentium accusamus odio eum? Debitis, est eius. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Eveniet, et.
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
		
		
		*/}

    <footer>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Contacts</a>
            </li>
          </ul>
        </nav>

        <section className="contact-information">
          <header>
            <h3>Contact information</h3>
          </header>
          <ul>
            <div>
              <li>
                <a href="mailto: mishapod@gmail.com">
                  <i className="icon far fa-envelope" />
                </a>
              </li>
              <li>
                <a href="https://github.com/mishapodl">
                  <i className="icon fab fa-github" />
                </a>
              </li>
              <li>
                <a href="https://ru.stackoverflow.com/users/252282/michael-podlevskykh">
                  <i className="icon fab fa-stack-overflow" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/michael-podlevskykh-574b98119/">
                  <i className="icon fab fa-linkedin" />
                </a>
              </li>
            </div>
          </ul>
        </section>
      </div>
      <div className="footer-copy">
        <div className="footer-conteiner">
          <div className="footer-copyright">
            &copy; zazaend
            <span /> 2019
          </div>
          <div className="footer-developed-by">
            <p>
              Developed by<strong>: Michael Podlevskykh</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default App;
