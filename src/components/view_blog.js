import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../actions/index';


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
        <p>Author: { author }</p>
        <p>Body: { body }</p>
        <p>Category: { category }</p>
        <p>Votescore: { voteScore }</p>
      </div>
     );
    }
  }
  render() {
    return(
      <div>
        test
        {this.renderPost()}
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
export default connect(mapStateToProps, { fetchSinglePost })(ViewBlog);