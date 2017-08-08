import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routePush } from '../actions/index';

class Card1 extends Component {
  constructor(props) {
    super(props);
  }
  handleGo() {
    this.props.routePush(`/${this.props.category.name}/posts`);
  }
  render() {
    return(
    <div className="card">
      <div className="card-header">
        {this.props.header ? this.props.header : ''}
      </div>
      <div className="card-block">
        <h4 className="card-title">{this.props.title ? this.props.title : ''}</h4>
        <p className="card-text">{this.props.content ? this.props.content : ''}</p>
        <button onClick={this.handleGo.bind(this)} href="#" className="btn btn-primary">Go!</button>
      </div>
    </div>
    );
  }
}

export const Card = connect(null, { routePush })(Card1);