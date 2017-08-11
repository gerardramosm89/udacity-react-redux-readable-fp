import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchComments } from '../actions/index';
class ViewComments extends Component {
  constructor(props) {
    super(props);
  }
  renderComments() {
    if (this.props.comments !== undefined) {
      console.log(this.props.comments);
      return this.props.comments.map(comment => {
        return (
          <li key={comment.id} className="list-group-item">
            <p>body: {comment.body}</p><br />
            <p>author: {comment.author}</p><br />
            <p>id: {comment.id}</p><br />
            <p style={{ width: '100%'}}>votescore: {comment.voteScore}</p><br />
            <button 
            className="btn btn-primary"
            onClick={(props) => {
              axios.post(`http://localhost:5001/comments/${comment.id}`, { option: 'upVote'})
                .then(() => this.props.fetchComments(this.props.parentId));
              }}>Up Vote</button>
            <button 
            className="btn btn-warning"            
            onClick={() => {
              axios.post(`http://localhost:5001/comments/${comment.id}`, { option: 'downVote'})
                .then(() => this.props.fetchComments(this.props.parentId));
              }}>Down Vote</button>
            <button 
            className="btn btn-danger"            
            onClick={() => {
              axios.delete(`http://localhost:5001/comments/${comment.id}`, { option: 'downVote'})
                .then(() => this.props.fetchComments(this.props.parentId));
              }}>Delete</button>

          </li>
        );
      })
    }
  }
  render() {
    return(
      <div>
        <ul className="list-group">
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.currentComments.currentComments
  }
}
export default connect(mapStateToProps, { fetchComments })(ViewComments);