import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadPosts, getIdPost } from "../../redux/actions/index";
import {
  AsideBarPosts,
  LatestPosts,
  PopularPosts
} from "../../components/index";
import "./News.scss";

const mapStateToProps = ({ posts, isLoad: { isLoadPosts } }) => ({
  posts,
  isLoadPosts
});

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
              <>{/* <Spiner /> */}</>
            )}
            {isLoadPosts ? <AsideBarPosts posts={posts} /> : "Loading"}
          </div>
        </section>
      </main>
    );
  }
}

News.propTypes = {
  posts: PropTypes.array.isRequired,
  isLoadPosts: PropTypes.bool.isRequired,
  getIdPost: PropTypes.func
};

export default connect(
  mapStateToProps,
  { loadPosts, getIdPost }
)(News);
