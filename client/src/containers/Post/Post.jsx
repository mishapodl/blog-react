import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Comments, Article } from "../../components/index";
import "./Post.scss";

class Post extends Component {
  static propTypes = {};
  render() {
    const {
      posts,
      match: {
        params: { id_post }
      }
    } = this.props;
    return (
      <main>
        <section>
          <article className="post">
            {posts.length ? <Article post={posts[+id_post]} /> : false}
            <Comments />
          </article>
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(
  mapStateToProps,
  null
)(Post);
