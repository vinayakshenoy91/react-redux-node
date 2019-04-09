import React from 'react';
import {render}  from 'react-dom';
import App from './App/App';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers(reducers), undefined,composeEnhancers(applyMiddleware(thunk)));

render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
