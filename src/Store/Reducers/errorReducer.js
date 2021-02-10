import {SET_ERRORS} from './types';

const initialState = {
  errors: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        errors: action.payload,
      };
    default:
      return state;
  }
}
