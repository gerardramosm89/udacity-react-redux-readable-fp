import axios from 'axios';
import { push } from 'react-router-redux';

const apiUrl = 'http://localhost:5001';

// Routing action, takes in a string as route i.e. route = 'blogs/post-title';
export function routePush(route) {
  return push(route)
}

// Fetch (GET) Options
const options = {
  headers: { Authorization: 'justanexample' }
}

// Fetch (GET) Actions
export async function fetchCategories() {
  let categories = await axios.get(`${apiUrl}/categories`, options);
    return {
      type: 'FETCH_CATEGORIES',
      payload: categories.data.categories
    }
}

export async function fetchAllPosts() {
  let allPosts = await axios.get(`${apiUrl}/posts`, options);
    return {
      type: 'FETCH_ALL_POSTS',
      payload: allPosts.data
    }
}

export async function fetchPostsByCategory(category) {
  let categoryPosts = await axios.get(`${apiUrl}/${category}/posts`, options);
    return {
      type: 'FETCH_POSTS_BY_CATEGORY',
      payload: categoryPosts.data
    }
}

export async function postBlog(data) {
  console.log('data is: ', data);
  axios.defaults.headers.common['Authorization'] = 'justanexample';
  let postBlogResponse = await axios.post(`${apiUrl}/posts`, data);
  return {
    type: 'POST_BLOG',
    payload: postBlogResponse.data
  }
}