// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import counterReducer from './reduxSlicer/exampleSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other reducers here if you have more
});

export default rootReducer;
