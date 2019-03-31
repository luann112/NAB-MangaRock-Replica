import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'src/reducers';

const initialState = {};
const logger = createLogger();

const initializeStore = initialState => {
  let store;
  if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = composeWithDevTools({});
    const devToolMiddleware = composeEnhancers(applyMiddleware(logger));
    
    store = createStore(
      rootReducer,
      initialState,
      devToolMiddleware,
    );
  } else {
    store = createStore(
      rootReducer,
      initialState,
    )
  }
  return store;
}

export default initializeStore;