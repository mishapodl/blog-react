import React, { Component } from "react";
import PropTypes from "prop-types";
import { AsideBarPosts, LatestPosts, PopularPosts } from "../../components/index";
import "./News.scss";

class News extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <main>
        <PopularPosts />

        <section class="latest-posts">
          <header>
            <h2>Latest posts</h2>
          </header>

          <div class="container">
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
