import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  deleteComment,
  setComments,
  getIdPost,
  loadPosts
} from "../../redux/actions/index";
import { Comments, Article } from "../../components/index";
import spinner from "../../hoc/spinner";
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
            <MainArticle isLoading={isLoadPosts} post={currentPost} />
            <CommentsArticle
              isLoading={isLoadComments}
              comments={comments}
              post={currentPost}
              auth={auth}
              deleteComment={deleteComment}
            />
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

const MainArticle = spinner(Article);
const CommentsArticle = spinner(Comments);

export default connect(
  mapStateToProps,
  { deleteComment, setComments, getIdPost, loadPosts }
)(Post);
