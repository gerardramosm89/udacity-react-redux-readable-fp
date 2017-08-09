import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { singlePostReducer, categoriesReducer, allPostsReducer, postsByCategoryReducer } from './categoriesReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  categories: categoriesReducer,
  allPosts: allPostsReducer,
  postsByCategory: postsByCategoryReducer,
  singlePost: singlePostReducer
});

export default rootReducer;