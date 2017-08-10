import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts, fetchSinglePost, deletePost } from '../actions/index';


class ViewBlog extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    this.props.fetchSinglePost(this.props.match.params.id);
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
      </div>
     );
    }
  }
  handleDelete() {
    this.props.deletePost(this.props.singlePost.id)
      .then(() => this.props.fetchAllPosts());
  }
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            {this.renderPost()}
            <button onClick={this.handleDelete.bind(this)} className="btn btn-danger">Delete Post</button>            
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
    singlePost: state.singlePost.singlePost
  }
}
export default connect(mapStateToProps, { fetchAllPosts, fetchSinglePost, deletePost })(ViewBlog);