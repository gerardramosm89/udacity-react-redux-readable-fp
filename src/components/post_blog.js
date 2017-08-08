import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../actions/index';

// class InputField extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return(
//       <div className="form-group">
//         <label htmlFor="exampleInputEmail1">{this.props.title}</label>
//         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={`Enter ${this.props.title}`} />
//       </div>
//     );
//   }
// }

class PostBlog extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
  }

  render() {
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <h1 className="text-center">Create a new post!</h1>
              <form>             
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Title</label>
                  <input type="email" className="form-control" placeholder="Enter title for post" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleSelect1">Example select</label>
                  <select className="form-control" id="exampleSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleTextarea">Example textarea</label>
                  <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
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