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
  render() {
    const {
      posts,
      comments: { comments },
      isLoad: { isLoadPosts, isLoadComments },
      deleteComment,
      match: {
        params: { id_post }
      }
    } = this.props;
    const currentPost = posts[+id_post];
    return (
      <main>
        <section>
          <article className="post">
            {isLoadPosts ? (
              <>
                <Article post={currentPost} />
                {isLoadComments && (
                  <Comments
                    comments={comments}
                    post={currentPost}
                    deleteComment={deleteComment}
                  />
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

Post.propTypes = {
  posts: PropTypes.array.isRequired,
  comments: PropTypes.object,
  isLoad: PropTypes.object.isRequired,
  id_post: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
};

Post.defaultProps = {
	id_post: ''
}
export default connect(
  mapStateToProps,
  { deleteComment }
)(Post);
