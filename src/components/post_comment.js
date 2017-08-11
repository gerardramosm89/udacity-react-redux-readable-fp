import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postComment } from '../actions/index';
import uuidv1 from 'uuid/v1';

class PostComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv1(),
      timestamp: Date.now(),
      body: '',
      author: '',
      parentId: this.props.parentId
    }
  }

  handlePostComment(data) {
    this.props.postComment(data);
  }
  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    console.log('state of post comments is: ', this.state);
    return(
      <div className="col-12">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input onChange={this.handleInputChange.bind(this)} name="title" type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter title" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { postComment })(PostComment);