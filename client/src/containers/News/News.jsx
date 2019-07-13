import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../../redux/actions/index";
import {
  AsideBarPosts,
  LatestPosts,
  PopularPosts
} from "../../components/index";
import "./News.scss";

class News extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const { posts, isLoadPosts } = this.props;
    console.log(isLoadPosts && posts);

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
        <button onClick={this.props.loadPosts}>Test Button</button>
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
  { loadPosts }
)(News);
