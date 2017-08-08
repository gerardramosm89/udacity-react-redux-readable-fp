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

// Fetch Options
const options = {
  headers: { Authorization: 'justanexample' }
}
export async function fetchCategories() {
  let categories = await axios.get(`${apiUrl}/categories`, options);
  if (categories) {
    return {
      type: 'FETCH_CATEGORIES',
      payload: categories.data.categories
    }
  }
}

export async function fetchAllPosts() {
  let allPosts = await axios.get(`${apiUrl}/posts`, options);
  if (allPosts) {
    return {
      type: 'FETCH_ALL_POSTS',
      payload: allPosts.data
    }
  }
}

export async function fetchPostsByCategory(category) {
  let categoryPosts = await axios.get(`${apiUrl}/${category}/posts`, options);
  console.log(categoryPosts);
  try {
    return {
      type: 'FETCH_POSTS_BY_CATEGORY',
      payload: categoryPosts.data
    }
  } catch(e) {
    console.log('ran into an error while fetching categories per post', e);
  }
}