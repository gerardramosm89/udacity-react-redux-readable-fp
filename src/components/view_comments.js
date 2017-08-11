import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewComments extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        
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