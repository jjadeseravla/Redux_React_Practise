import { combineReducers } from 'redux'; //combine all of the reducers in this file
import postReducer from './postreducer';

export default combineReducers({
  posts: postReducer
});
