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
      this.props.postsByCategory.map(post => {
        if (post.deleted != true) {
          let time = new Date(post.timestamp*1000);
          time = time.toString().split('').splice(0,10);
          return (
          <div key={post.id} style={{position: 'relative'}}>
            <Link style={{paddingBottom: '4rem'}} to={`/posts/${post.id}`} className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{post.title}</h5>
                <small>Category: {post.category}</small>
              </div>
              <p className="mb-1">{post.body}</p>
              <small>Author: {post.author}</small>
              <small>Votescore: {post.voteScore}</small>
              <small>Timestamp: {time}</small>
            </Link>
            <button onClick={this.handleUpVote.bind(this, post.id)} style={{position: 'absolute', left: '1rem', bottom: '1rem'}} className="btn btn-info">upvote</button>
            <button onClick={this.handleDownVote.bind(this, post.id)} style={{position: 'absolute', left: '7rem', bottom: '1rem'}} className="btn btn-warning">downvote</button>
            <Link
            to={`/editpost/${post.id}`} 
            style={{position: 'absolute', left: '14.35rem', bottom: '1rem'}}
            className="btn btn-success">Edit Post</Link>
          </div>
          )
        }
        else {
          return
        }
    })
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