import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsByCategory, routePush } from '../actions/index';




class ViewCategory extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchPostsByCategory(this.props.match.params.category);
  }
  renderPostsByCategory() {
    return this.props.postsByCategory ? (
      this.props.postsByCategory.map(post => (
        <div key={post.id}>
          <h1>Title: {post.title}</h1>
          <h5>Author: {post.author}</h5>
          <p>Body: {post.body}</p>
        </div>
      ))
    ) : '';
  }
  render() {
    return(
      <div>
        <button 
        className="btn btn-warning"
        onClick={() => this.props.routePush('/')}>Go Home</button>
        <h1>Category: {this.props.match.params.category}</h1>
        {this.renderPostsByCategory()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    allPosts: state.allPosts.allPosts,
    postsByCategory: state.postsByCategory.postsByCategory
  }
}
export default connect(mapStateToProps, { fetchPostsByCategory, routePush })(ViewCategory);