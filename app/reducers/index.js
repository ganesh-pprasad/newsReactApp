import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import workReducer from './workReducer';

const rootReducer = combineReducers({
  news : newsReducer,
  works : workReducer,
});

export default rootReducer;
