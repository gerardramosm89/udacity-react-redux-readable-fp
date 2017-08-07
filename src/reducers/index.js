import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categoriesReducer from './categoriesReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  categories: categoriesReducer
});

export default rootReducer;
