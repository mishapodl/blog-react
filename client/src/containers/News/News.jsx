import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  loadPosts,
  getIdPost,
  loadPopularPosts
} from "../../redux/actions/index";
import {
  AsideBarPosts,
  LatestPosts,
  PopularPosts,
  Spinner,
  Pagination
} from "../../components/index";
import "./News.scss";

const mapStateToProps = ({
  posts,
  popularPosts,
  isLoad: { isLoadPosts, isLoadPopularPosts }
}) => ({
  posts,
  popularPosts,
  isLoadPosts,
  isLoadPopularPosts
});

class News extends Component {
  componentDidMount() {
    const { posts, loadPosts, loadPopularPosts, popularPosts } = this.props;
    !posts.length && loadPosts(1);
    !popularPosts.length && loadPopularPosts("2019-07-01", "2019-08-01");
  }

  render() {
    const {
      posts,
      isLoadPosts,
      getIdPost,
      loadPosts,
      popularPosts,
      isLoadPopularPosts
    } = this.props;
    return (
      <main>
        {isLoadPopularPosts ? (
          <PopularPosts posts={popularPosts} getIdPost={getIdPost} />
        ) : (
          <Spinner className={`general`} header={`Popular last month`} />
        )}
        <section className="latest-posts">
          <header>
            <h2>Latest posts</h2>
          </header>

          <div className="container">
            {isLoadPosts ? (
              <div>
                <LatestPosts posts={posts} getIdPost={getIdPost} />
                <Pagination loadPosts={loadPosts} />
              </div>
            ) : (
              <Spinner className={`latest-posts`} />
            )}
            {isLoadPopularPosts ? (
              <AsideBarPosts posts={popularPosts} getIdPost={getIdPost} />
            ) : (
              <Spinner
                className={`aside-posts`}
                header={`Popular last month`}
              />
            )}
          </div>
        </section>
      </main>
    );
  }
}

News.propTypes = {
  posts: PropTypes.array.isRequired,
  isLoadPosts: PropTypes.bool.isRequired,
  getIdPost: PropTypes.func,
  loadPosts: PropTypes.func
};

export default connect(
  mapStateToProps,
  { loadPosts, getIdPost, loadPopularPosts }
)(News);
