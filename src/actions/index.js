import axios from 'axios';
axios.defaults.headers.common['Authorization'] = 'justanexample';
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

export async function fetchSinglePost(id) {
  let post = await axios.get(`${apiUrl}/posts/${id}`, options);
  return {
    type: 'FETCH_SINGLE_POST',
    payload: { post }
  }
}
// Post Actions

export async function postBlog(data) {
  // axios.defaults.headers.common['Authorization'] = 'justanexample';
  let postBlogResponse = await axios.post(`${apiUrl}/posts`, data);
  return {
    type: 'POST_BLOG',
    payload: postBlogResponse.data
  }
}

export async function editBlog(data) {
  // axios.defaults.headers.common['Authorization'] = 'justanexample';
  let editBlogResponse = await axios.put(`${apiUrl}/posts/${data.id}`, { title: data.title, body: data.body });
  return {
    type: 'EDIT_BLOG',
    payload: editBlogResponse.data
  }  
}

export async function deletePost(id) {
  console.log(id);
  let deletePostResponse = await axios.delete(`${apiUrl}/posts/${id}`);
  return {
    type: 'DELETE_BLOG',
    payload: deletePostResponse
  }
}