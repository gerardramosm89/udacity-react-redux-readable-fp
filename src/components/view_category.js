import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsByCategory, routePush } from '../actions/index';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ViewCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortPostsBy: 'voteScore',
      order: '-'
    }
  }
  componentWillMount() {
    this.props.fetchPostsByCategory(this.props.match.params.category);
  }

  handleUpVote(id) {
    axios.defaults.headers.common['Authorization'] = 'justanexample';
    let options = { option: 'upVote' };
    axios.post(`http://localhost:5001/posts/${id}`, options).then(() => this.props.fetchAllPosts());
  }
  handleDownVote(id) {
    axios.defaults.headers.common['Authorization'] = 'justanexample';
    let options = { option: 'downVote' };
    axios.post(`http://localhost:5001/posts/${id}`, options)
      .then(() => this.props.fetchAllPosts());
  }
  renderPostsByCategory() {
    return this.props.postsByCategory ? (
      this.props.postsByCategory.map(post => (
        <li className="list-group-item" key={post.id}>
          <h5 style={{ width: '100%'}}>Title: {post.title}</h5>
          <h5 style={{ width: '100%'}}>Author: {post.author}</h5>
          <p style={{ width: '100%'}}>Body: {post.body}</p>
          <p style={{ width: '100%'}}>Vote Score: {post.voteScore}</p>

            <button onClick={this.handleUpVote.bind(this, post.id)} className="btn btn-info">upvote</button>
            <button onClick={this.handleDownVote.bind(this, post.id)} className="btn btn-warning">downvote</button>

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