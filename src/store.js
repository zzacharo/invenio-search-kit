import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { messageReducer } from './components/Base/reducer';

const rootReducer = combineReducers({
  currentMessage: messageReducer,
});

export const storeKey = 'invenio-search-kit';

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

function connectExtended(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  options = {}
) {
  options.storeKey = storeKey;
  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options
  );
}

export { connectExtended as connect };
