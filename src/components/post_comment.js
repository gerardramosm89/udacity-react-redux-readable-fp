import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostComment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="col-12">
        <h3 className="text-center">Comments</h3>
      </div>
    );
  }
}

export default connect(null, null)(PostComment);