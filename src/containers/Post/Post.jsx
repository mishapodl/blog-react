import React, { Component } from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Comments, Article } from "../../components/index";
import "./Post.scss";

class Post extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <main>
        <article className="post">
          <Article />
          <Comments /> 
        </article>
      </main>
    );
  }
}

// const mapStateToProps = state => ({});
// const mapDispatchToProps = {};

// export default connect(
// mapStateToProps,
// mapDispatchToProps
// )(Post);
export default Post;
