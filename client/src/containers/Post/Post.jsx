import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  deleteComment,
  setComments,
  getIdPost,
  loadPosts
} from "../../redux/actions/index";
import { Comments, Article, Spinner } from "../../components/index";
import "./Post.scss";

class Post extends Component {
  componentDidMount() {
    const { posts, loadPosts } = this.props;
    !posts.length && loadPosts(1);
  }
  render() {
    const {
      idPost,
      posts,
      comments: { comments },
      auth,
      isLoad: { isLoadPosts, isLoadComments },
      deleteComment,
      getIdPost,
      match: {
        params: { id_post }
      }
    } = this.props;
    const currentPost = posts[+id_post];
    !idPost && isLoadPosts && getIdPost(currentPost._id);

    return (
      <main>
        <section>
          <article className="post">
            {isLoadPosts ? (
              <>
                <Article post={currentPost} />
                {isLoadComments ? (
                  <Comments
                    comments={comments}
                    post={currentPost}
                    auth={auth}
                    deleteComment={deleteComment}
                  />
                ) : (
                  <Spinner className={`general`} />
                )}
              </>
            ) : (
              <Spinner className={`general`} />
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
  deleteComment: PropTypes.func.isRequired,
  getIdPost: PropTypes.func.isRequired,
  loadPosts: PropTypes.func.isRequired
};

Post.defaultProps = {
  id_post: ""
};

const mapStateToProps = ({ posts, comments, isLoad, auth, idPost }) => ({
  posts,
  comments,
  isLoad,
  auth,
  idPost
});

export default connect(
  mapStateToProps,
  { deleteComment, setComments, getIdPost, loadPosts }
)(Post);
