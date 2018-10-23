import { SET_MESSAGE } from './types';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
