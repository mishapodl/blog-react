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
  PopularPosts
} from "../../containers/index";
import { Pagination } from "../../components/index";
import spinner from "../../hoc/spinner";
import "./Home.scss";

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

class Home extends Component {
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
        <RandomPosts
          posts={popularPosts}
          getIdPost={getIdPost}
          isLoading={isLoadPopularPosts}
          classSpinner={`latest`}
        />
        <section className="latest-posts">
          <header>
            <h2>Latest posts</h2>
          </header>
          <div className="container">
            <div>
              <NewPosts
                posts={posts}
                getIdPost={getIdPost}
                isLoading={isLoadPosts}
                classSpinner={`latest`}
              />
              <Pagination loadPosts={loadPosts} />
            </div>
            <AsidePosts
              posts={popularPosts}
              getIdPost={getIdPost}
              isLoading={isLoadPopularPosts}
              classSpinner={`aside`}
            />
          </div>
        </section>
      </main>
    );
  }
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
  isLoadPosts: PropTypes.bool.isRequired,
  getIdPost: PropTypes.func,
  loadPosts: PropTypes.func
};

const AsidePosts = spinner(AsideBarPosts);
const NewPosts = spinner(LatestPosts);
const RandomPosts = spinner(PopularPosts);

export default connect(
  mapStateToProps,
  { loadPosts, getIdPost, loadPopularPosts }
)(Home);
