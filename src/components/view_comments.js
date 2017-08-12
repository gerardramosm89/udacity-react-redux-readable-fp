import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchComments } from '../actions/index';
import EditCommentModal from '../utils/edit_comment_modal';

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
            <p style={{ width: '100%'}}>body: {comment.body}</p><br />
            <p style={{ width: '100%'}}>author: {comment.author}</p><br />
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
            <EditCommentModal 
            modalTitle={`Edit Comment`}
            id={comment.id} buttonName={`Edit Comment`}
            body={comment.body}
            parentId={this.props.parentId} />
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