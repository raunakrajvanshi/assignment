import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../Reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const middleware = [thunk];

const intialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  intialState,
  composeEnhancers(applyMiddleware(logger, ...middleware)),
);

export default store;
