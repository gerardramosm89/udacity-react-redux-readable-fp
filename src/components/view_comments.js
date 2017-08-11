import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <p>{comment.body}</p>
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
export default connect(mapStateToProps, null)(ViewComments);