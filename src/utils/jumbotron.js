import React, { Component } from 'react';

export default (props) => (
  <div className="jumbotron">
    <h1 className="display-3">{props.title}</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr className="my-4" />
  </div>
)