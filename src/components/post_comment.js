import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postComment } from '../actions/index';

class PostComment extends Component {
  constructor(props) {
    super(props);
  }

  handlePostComment(data) {
    this.props.postComment(data);
  }
  render() {
    return(
      <div className="col-12">
        <h3 className="text-center">Comments</h3>
        <p>Parent id: {this.props.parentId}</p>
      </div>
    );
  }
}

export default connect(null, { postComment })(PostComment);