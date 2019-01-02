import { createStore } from 'redux';
import { reducer } from './reducers';

export const ConfigureStore = () => {
  const store = createStore(reducer);

  return store;
}