import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../actions/index';


class PostBlog extends Component {
  constructor(props){
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
    categories: state.categories.categories,
    allPosts: state.allPosts.allPosts
  }
}
export default connect(mapStateToProps, null)(PostBlog);