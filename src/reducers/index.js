import { combineReducers } from 'redux'; //combine all of the reducers in this file
import postReducer frp, './postReducer';

export default combineReducers({
  posts: postReducer
});
