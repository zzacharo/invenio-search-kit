import { combineReducers } from 'redux';

import queryReducer from './query';
import configReducer from './config';

export default combineReducers({
  query: queryReducer,
  apiConfig: configReducer,
});
