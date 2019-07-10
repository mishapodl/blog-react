import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  AsideBarPosts,
  LatestPosts,
  PopularPosts
} from "../../components/index";
import "./News.scss";

class News extends Component {
  static propTypes = {};

  render() {
    return (
      <main>
        <PopularPosts />

        <section className="latest-posts">
          <header>
            <h2>Latest posts</h2>
          </header>

          <div className="container">
            <LatestPosts />
            <AsideBarPosts />
          </div>
        </section>
      </main>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(News)

export default News;
