import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { categoriesReducer, allPostsReducer } from './categoriesReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  categories: categoriesReducer,
  allPosts: allPostsReducer
});

export default rootReducer;
