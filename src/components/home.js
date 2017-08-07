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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.categories.categories
  }
}
export default connect(mapStateToProps, { fetchCategories, fetchAllPosts })(Home);