import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './store';
import {BrowserRouter as Router} from 'react-router-dom';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Router>
    <Provider store={store}><App/></Provider>
  </Router>,
  document.getElementById('root')
);

