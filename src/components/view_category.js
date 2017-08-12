import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsByCategory, routePush } from '../actions/index';
import { Link } from 'react-router-dom';



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
        <li className="list-group-item" key={post.id}>
          <h5 style={{ width: '100%'}}>Title: {post.title}</h5>
          <h5 style={{ width: '100%'}}>Author: {post.author}</h5>
          <p style={{ width: '100%'}}>Body: {post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn btn-primary">View Post</Link>
        </li>
      ))
    ) : '';
  }
  render() {
    return(
      <div className="col-8 offset-2">
        <h1>Currently viewing: {this.props.match.params.category}</h1>
        <ul className="list-group">

        </ul>
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