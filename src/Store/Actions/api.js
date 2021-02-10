import {GET_API_DATA, SET_ERRORS} from '../Reducers/types';
import axios from 'axios';

import {Alert} from 'react-native';

export const getApiData = (callback, count) => async (dispatch) => {
  let headers = {
    'Content-Type': 'application/json',
  };
  try {
    let response = await axios({
      url: `https://api.giphy.com/v1/gifs/trending?api_key=YcpsUbjUxGDoTqLbxkxQtXdmPVyTNFJ4&limit=${count}&rating=g`,
      method: 'GET',
      headers: headers,
      timeout: 15000,
    });

    if (response.data) {
      console.log('Api Data', response.data);
      dispatch({
        type: GET_API_DATA,
        payload: response.data.data,
      });
      callback();
    }
  } catch (e) {
    console.log('Api Error', e);
  }
};
