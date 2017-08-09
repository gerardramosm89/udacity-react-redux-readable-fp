import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../actions/index';
import uuidv1 from 'uuid/v1';

class PostBlog extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      author: '',
      category: '',
      body: '',
      id: uuidv1()
    }
  }

  onFormSubmit(e) {
    e.preventDefault();
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <h1 className="text-center">Create a new post!</h1>
              <form onSubmit={this.onFormSubmit.bind(this)}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Title</label>
                  <input name="title" onChange={this.handleInputChange.bind(this)} className="form-control" placeholder="Enter title for post" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Author</label>
                  <input onChange={this.handleInputChange.bind(this)} name="author" className="form-control" placeholder="Enter Author" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleSelect1">Select category</label>
                  <select onChange={this.handleInputChange.bind(this)} name="category" className="form-control" id="exampleSelect1">
                    <option>Select one</option>                    
                    <option value="udacity">Udacity</option>
                    <option value="react">React</option>
                    <option value="redux">Redux</option>                    
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleTextarea">Example textarea</label>
                  <textarea onChange={this.handleInputChange.bind(this)} name="body" className="form-control" rows="5"></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
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