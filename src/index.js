import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducers = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const logger = store => {
  return next => {
    return action => {
      return next(action);
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
