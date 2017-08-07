import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/index';
import Jumbotron from '../utils/jumbotron';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchCategories();
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
export default connect(mapStateToProps, { fetchCategories })(Home);