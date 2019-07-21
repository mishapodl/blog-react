import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../redux/actions/index";
import { Comments, Article } from "../../components/index";
import "./Post.scss";

const mapStateToProps = ({ posts, comments, isLoad }) => ({
  posts,
  comments,
  isLoad
});

class Post extends Component {
  static propTypes = {};
  render() {
    const {
      posts,
      comments: { comments },
      isLoad: { isLoadPosts, isLoadComments },
      match: {
        params: { id_post }
      }
    } = this.props;
    const currentPost = posts[+id_post];
		console.log(comments)
    return (
      <main>
        <section>
          <article className="post">
            {isLoadPosts ? (
              <>
                <Article post={currentPost} />
                {isLoadComments && (
                  <Comments comments={comments} post={currentPost} deleteComment={deleteComment}/>
                )}
              </>
            ) : (
              false
            )}
          </article>
        </section>
      </main>
    );
  }
}

export default connect(
  mapStateToProps,
  { deleteComment }
)(Post);
