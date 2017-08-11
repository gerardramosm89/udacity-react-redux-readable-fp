import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts, fetchSinglePost, deletePost, fetchComments } from '../actions/index';
import PostComment from './post_comment';
import ViewComments from './view_comments';
import CommentModal from '../utils/comment_modal';

class ViewBlog extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    this.props.fetchSinglePost(this.props.match.params.id)
      .then(() => {
        this.props.fetchComments(this.props.singlePost.id);
      });
  }
  renderPost() {
    if (this.props.singlePost !== undefined) {
      let {
      author,
      body,
      category,
      id,
      timestamp,
      title,
      voteScore } = this.props.singlePost;
     return(
      <div>
        <h1>{this.props.singlePost.title}</h1>
        <hr />
        <p>Author: { author }</p>
        <p>Body: { body }</p>
        <p>Category: { category }</p>
        <p>Votescore: { voteScore }</p>
        <button onClick={this.handleDelete.bind(this)} className="btn btn-danger">Delete Post</button>
        <hr />
        <div className="row">
          {/* <PostComment parentId={id} /> */}
          <CommentModal
          primaryBtnName={`Post Comment`}
          buttonName={`Post new comment`}
          modalTitle={`Post Comment`}>
            <PostComment parentId={id} />
          </CommentModal>
          <ViewComments parentId={id} />
        </div>
      </div>
     );
    }
  }
  handleDelete() {
    this.props.deletePost(this.props.singlePost.id)
      .then(() => {
        this.props.fetchAllPosts()
          .then(() => this.props.history.push('/'));
      });
  }
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            {this.renderPost()}
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    allPosts: state.allPosts.allPosts,
    singlePost: state.singlePost.singlePost,
    currentComments: state.currentComments.currentComments
  }
}
export default connect(mapStateToProps, { fetchAllPosts, fetchSinglePost, deletePost, fetchComments })(ViewBlog);