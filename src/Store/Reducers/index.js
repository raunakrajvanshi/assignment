import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import apiData from './ApiData';

const allReducers = combineReducers({
  errors: errorReducer,
  apiData: apiData,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }

  return allReducers(state, action);
};
export default rootReducer;
