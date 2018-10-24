import { SET_QUERY, SET_RESULTS } from '../types/query';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, currentQuery: action.payload };
    case SET_RESULTS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
