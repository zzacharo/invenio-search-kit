import {
  SET_QUERY,
  FETCHING_RESULTS,
  RESULTS_FETCH_SUCCESS,
  RESULTS_FETCH_ERROR,
} from '../types';
import axios from 'axios';

export const setQuery = query => ({
  type: SET_QUERY,
  payload: query,
});

export const executeQuery = query => {
  return (dispatch, getState) => {
    dispatch({ type: FETCHING_RESULTS });

    const searchEndpoint = getState().apiConfig.url;
    axios
      .get(`${searchEndpoint}?q=${query}`)
      .then(data => {
        dispatch({
          type: RESULTS_FETCH_SUCCESS,
          payload: data.data.hits.hits,
        });
      })
      .catch(reason => {
        dispatch({ type: RESULTS_FETCH_ERROR, payload: reason });
      });
  };
};
