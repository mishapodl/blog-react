import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts, getIdPost } from "../../redux/actions/index";
import {
  AsideBarPosts,
  LatestPosts,
  PopularPosts
} from "../../components/index";
import "./News.scss";

class News extends Component {
  render() {
    const { posts, isLoadPosts, getIdPost } = this.props;
    return (
      <main>
        <PopularPosts />

        <section className="latest-posts">
          <header>
            <h2>Latest posts</h2>
          </header>

          <div className="container">
            {isLoadPosts ? (
              <LatestPosts posts={posts} getIdPost={getIdPost} />
            ) : (
              <div className="spinner">
                <div>o</div>
              </div>
            )}
            {isLoadPosts ? <AsideBarPosts posts={posts} /> : "Loading"}
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ posts, isLoad: { isLoadPosts } }) => ({
  posts,
  isLoadPosts
});

export default connect(
  mapStateToProps,
  { loadPosts, getIdPost }
)(News);
