import axios from 'axios';
import { push } from 'react-router-redux';

// Routing action, takes in a string as route i.e. route = 'blogs/post-title';
export function routePush(route) {
  return push(route)
}

// Modal Actions
export function exampleAction() {
  return {
    type: 'EXAMPLE_ACTION',
    payload: { example }
  }
}