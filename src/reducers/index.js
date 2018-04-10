import { combineReducers } from 'redux';
import userAuth from './user-auth';
import userprofile from './user-profile';

export default combineReducers({
  userAuth,
  userprofile,
});