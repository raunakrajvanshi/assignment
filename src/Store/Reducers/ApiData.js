import {GET_API_DATA} from './types';

const initialState = {
  apiData: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_API_DATA:
      return {
        apiData: action.payload,
      };
    default:
      return state;
  }
}
