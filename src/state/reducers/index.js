import { combineReducers } from 'redux';

import queryReducer from './query';
import resultsReducer from './results';
import configReducer from './config';

export default combineReducers({
  query: queryReducer,
  results: resultsReducer,
  apiConfig: configReducer,
});
