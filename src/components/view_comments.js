import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchComments } from '../actions/index';
import EditCommentModal from '../utils/edit_comment_modal';
import sortBy from 'sort-by';

class ViewComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'voteScore',
      order: ''
    }
  }
  renderComments() {
    if (this.props.comments !== undefined) {
      let comments = this.props.comments;
      comments = comments.sort(sortBy(`${this.state.order}${this.state.sortBy}`));
      return comments.map(comment => {
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

  handleSortBy(e) {
    this.setState({
      sortBy: e.target.value
    });
  }
  handleOrder(e) {
    this.setState({
      order: e.target.value
    });
  }
  render() {
    return(
      <div>
        <span>Sort By:</span>
          <div className="form-group col-4 offset-4"> 
          <select className="form-control" value={this.state.sortPostsBy} onChange={this.handleSortBy.bind(this)}>
            <option value="voteScore">Vote Score</option>
            <option value="timestamp">Timestamp</option>
          </select>
          <select className="form-control" value={this.state.order} onChange={this.handleOrder.bind(this)}>
            <option value="-">Ascending</option>
            <option value="">Descending</option>
          </select>
          </div>
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