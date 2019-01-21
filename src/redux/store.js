import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = (initialState = {}) => {
  return createStore(
    createReducer(),
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
};

export default configureStore;
