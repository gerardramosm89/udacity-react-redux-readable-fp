import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { 
  currentPostCommentsReducer,
  singlePostReducer, 
  categoriesReducer, 
  allPostsReducer, 
  postsByCategoryReducer } from './categoriesReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  categories: categoriesReducer,
  allPosts: allPostsReducer,
  postsByCategory: postsByCategoryReducer,
  singlePost: singlePostReducer,
  currentComments: currentPostCommentsReducer
});

export default rootReducer;