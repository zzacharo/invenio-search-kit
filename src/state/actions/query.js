import { SET_QUERY, SET_RESULTS } from '../types/query';
import axios from 'axios';

export const setQuery = query => ({
  type: SET_QUERY,
  payload: query,
});

export const executeQuery = query => {
  return (dispatch, getState) => {
    let searchEndpoint = getState().apiConfig.url;
    axios.get(`${searchEndpoint}?q=${query}`).then(data => {
      dispatch({
        type: SET_RESULTS,
        payload: data.data.hits.hits,
      });
    });
  };
};
