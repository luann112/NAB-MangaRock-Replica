import { combineReducers } from 'redux';
import topNavBarReducer from './topNavBar';

const rootReducer = combineReducers({
  topNavBar: topNavBarReducer,
});

export default rootReducer;