import axios from 'axios';
import { push } from 'react-router-redux';

const apiUrl = 'http://localhost:5001';

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

export async function fetchCategories() {
  let categories = await axios.get(`${apiUrl}/categories`, {headers: { Authorization: 'justanexample'}});
  if (categories) {
    console.log('categories.data.categories is: ', categories.data.categories);
    return {
      type: 'FETCH_CATEGORIES',
      payload: categories.data.categories
    }
  }
}