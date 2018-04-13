import { combineReducers } from 'redux';
import userAuth from './userAuth-reducers';
import userProfile from './userProfile-reducers';
import sportingEvent from './sportingEvent-reducers';
import league from './league-reducers';
import group from './group-reducers';
import messageBoard from './messageBoard-reducers';
import comment from './comment-reducers';
import scoreBoard from './scoreBoard-reducers';
import game from './game-reducers';
import userPick from './userPick-reducers';
import team from './team-reducers';


export default combineReducers({
  userAuth,
  userProfile,
  sportingEvent,
  league,
  group,
  messageBoard,
  comment,
  scoreBoard,
  game,
  userPick,
  team,
});