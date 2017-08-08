import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories, fetchAllPosts } from '../actions/index';
import Jumbotron from '../utils/jumbotron';
import { Card } from '../utils/bootstrap4';
import sortBy from 'sort-by';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortPostsBy: 'voteScore',
      order: '-'
    }
  }
  componentWillMount() {
    this.props.fetchCategories();
    this.props.fetchAllPosts();
  }
  renderCategories() {
    if (this.props.categories) {
      return this.props.categories.map(category => {
        return (
          <div className="col-4" key={category.name}>
            <Card category={category} title={category.name}/>
          </div>
        );
      })
    } else {
      return ''
    }
  }
  handleSortBy(e) {
    this.setState({
      sortPostsBy: e.target.value
    });
  }
  handleOrder(e) {
    this.setState({
      order: e.target.value
    });
  }

  renderAllPosts() {
    if (this.props.allPosts) {
      let posts = this.props.allPosts;
      return posts.map(post => (
        <a key={post.id} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{post.title}</h5>
            <small>Category: {post.category}</small>
          </div>
          <p className="mb-1">{post.body}</p>
          <small>Author: {post.author}</small>
          <small>Votescore: {post.voteScore}</small>
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
              <h2 className="text-center">Categories</h2>
            <div className="row text-center">
              {this.renderCategories()}
            </div>
            <div className="text-center">
              <h2>All Current Posts:</h2>
              <span>Sort By:</span>
               <div className="form-group col-2 offset-5"> 
                <select className="form-control" value={this.state.sortPostsBy} onChange={this.handleSortBy.bind(this)}>
                  <option value="voteScore">Vote Score</option>
                  <option value="title">Title</option>
                  <option value="timestamp">Timestamp</option>
                </select>
                <select className="form-control" value={this.state.order} onChange={this.handleOrder.bind(this)}>
                  <option value="-">Ascending</option>
                  <option value="">Descending</option>
                </select>
               </div> 
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