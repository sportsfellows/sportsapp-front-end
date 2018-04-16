import { combineReducers } from 'redux';
import userAuth from './userAuth-reducers';
import userProfile from './userProfile-reducers';
import sportingEvent from './sportingEvent-reducers';
import leagues from './league-reducers';
import groups from './group-reducers';
import messageBoard from './messageBoard-reducers';
import comments from './comment-reducers';
import scoreBoards from './scoreBoard-reducers';
import games from './game-reducers';
import userPicks from './userPick-reducers';
import teams from './team-reducers';


export default combineReducers({
  userAuth,
  userProfile,
  sportingEvent,
  leagues,
  groups,
  messageBoard,
  comments,
  scoreBoards,
  games,
  userPicks,
  teams,
});