import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../../redux/actions/index";
import {
  AsideBarPosts,
  LatestPosts,
	PopularPosts,
	// Spiner
} from "../../components/index";
import "./News.scss";

class News extends Component {
  componentDidMount() {
		console.log('cmd-1')
    loadPosts();
		console.log('cmd-2')
  }

  render() {
    // const { posts, loading, success } = this.props;
		// const latestPosts = success ? <LatestPosts posts={posts} /> : <Spiner />;
		
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

const mapStateToProps = ({ posts: { loading, posts, success } }) => ({
  posts,
  loading,
  success
});

export default connect(
  mapStateToProps,
  { loadPosts }
)(News);
