import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment, setComments } from "../../redux/actions/index";
import { Comments, Article } from "../../components/index";
import "./Post.scss";

class Post extends Component {
  render() {
    const {
      posts,
      comments: { comments },
      auth,
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
                    auth={auth}
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
  auth: PropTypes.object.isRequired,
  isLoad: PropTypes.object.isRequired,
  id_post: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
};

Post.defaultProps = {
  id_post: ""
};

const mapStateToProps = ({ posts, comments, isLoad, auth }) => ({
  posts,
  comments,
  isLoad,
  auth
});

export default connect(
  mapStateToProps,
  { deleteComment, setComments }
)(Post);
