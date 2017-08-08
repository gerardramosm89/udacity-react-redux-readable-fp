import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { categoriesReducer, allPostsReducer, postsByCategoryReducer } from './categoriesReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  categories: categoriesReducer,
  allPosts: allPostsReducer,
  postsByCategory: postsByCategoryReducer
});

export default rootReducer;