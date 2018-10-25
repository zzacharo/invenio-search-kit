import { SET_QUERY } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, currentQuery: action.payload };
    default:
      return state;
  }
};
