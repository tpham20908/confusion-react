import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducers';

export const ConfigureStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk, logger));

  return store;
}