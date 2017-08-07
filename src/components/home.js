import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories, fetchAllPosts } from '../actions/index';
import Jumbotron from '../utils/jumbotron';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchCategories();
    this.props.fetchAllPosts();
    console.log
  }
  renderCategories() {
    if (this.props.categories) {
      return this.props.categories.map(category => {
        return (
          <div className="col-4" key={category.name}>
            <p>{category.name}</p>
          </div>
        );
      })
    } else {
      return ''
    }
  }
  renderAllPosts() {
    if (this.props.allPosts) {
      return this.props.allPosts.map(post => (
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{post.title}</h5>
            <small>Category: {post.category}</small>
          </div>
          <p className="mb-1">{post.body}</p>
          <small>Author: {post.author}</small>
        </a>
      ))
    }
  }
  render() {
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <Jumbotron title={`Gerry's readable app!`}/>
            <div className="row text-center">
              {this.renderCategories()}
            </div>
            <div className="text-center">
              <h2>All Current Posts:</h2>
              <div className="list-group">
                {this.renderAllPosts()}
              </div>
            </div>
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
export default connect(mapStateToProps, { fetchCategories, fetchAllPosts })(Home);