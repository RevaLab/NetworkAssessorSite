import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import queryUIReducer from './queryUIReducer';

export default combineReducers({
  simpleReducer,
  queryUIReducer,
});