// React
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  BrowserHistory,
  Route,
  Switch, 
  Link
} from 'react-router-dom';

// include everything in main.scss
import '../styles/main.scss';

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from './reducers/index';

// Middleware
import ReduxThunk from 'redux-thunk';

// React Router Redux
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
const history = createHistory();
const middlewareForReduxRouter = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(ReduxThunk, middlewareForReduxRouter, promise)
));

// Components
import Home from './components/home';
import ViewCategory from './components/view_category';
import Navbar from './components/navbar';
import PostBlog from './components/post_blog';
import ViewBlog from './components/view_blog';
import EditBlog from './components/edit_blog';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>    
        <div>
          <Navbar />
          <Switch>
            <Route path="/posts/:id" component={ViewBlog} />
            <Route path="/editpost/:id" component={EditBlog} />
            <Route path="/postblog" component={PostBlog} />
            <Route path="/:category/posts" component={ViewCategory} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);