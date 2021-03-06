import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts, fetchSinglePost, deletePost, fetchComments } from '../actions/index';
import PostComment from './post_comment';
import ViewComments from './view_comments';
import CommentModal from '../utils/comment_modal';
import { Link } from 'react-router-dom';

class ViewBlog extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    this.props.fetchSinglePost(this.props.match.params.id)
      .then(() => {
        if (Object.keys(this.props.singlePost).length === 0 && this.props.singlePost.constructor === Object) {
          this.props.history.push('/fourohfour');
        }
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
      let time = new Date(timestamp*1000);
      time = time.toDateString().toString();
      time = time.split('').splice(0, 10);

     return(
      <div>
        <h1>{this.props.singlePost.title}</h1>
        <hr />
        <p>Author: { author }</p>
        <p>Body: { body }</p>
        <p>Category: { category }</p>
        <p>Votescore: { voteScore }</p>
        <p>Time: { time }</p>
        <button onClick={this.handleDelete.bind(this)} className="btn btn-danger">Delete Post</button>
        <Link
        to={`/editpost/${this.props.singlePost.id}`}
        className="btn btn-success">Edit Post</Link>
        <hr />
        <div className="row">
          <div className="col-12">
            <CommentModal
            parentId={this.props.singlePost.id}
            primaryBtnName={`Post Comment`}
            buttonName={`Post new comment`}
            modalTitle={`Post Comment`}>
              {/* <PostComment parentId={id} /> */}
            </CommentModal>
          </div>
          <div className="row">
            <div className="col-12">
              <hr />
              <h1>Comments</h1>
              <ViewComments 
              history={this.props.history}
              parentId={id} />
            </div>
          </div>
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
    singlePost: state.singlePost.singlePost,
    comments: state.currentComments.currentComments
  }
}
export default connect(mapStateToProps, { fetchAllPosts, fetchSinglePost, deletePost, fetchComments })(ViewBlog);