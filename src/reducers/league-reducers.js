import { checkAndAdd } from '../lib/util.js';

let validateLeague = league => {
  if(!league._id || !league.leagueName || !league.sportingEventID || !league.owner || !league.scoring || !league.poolSize || !league.privacy) {
    throw new Error('VALIDATION ERROR: league requires a id, name, sportingeventid, owner, scoring, poolsize and privacy.');
  }
};

export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
    case 'LEAGUE_FETCH':
      console.log('league fetch payload: ', payload);
      return checkAndAdd(payload, state);
    case 'LEAGUES_FETCH':
      return [...payload, ...state];
    case 'LEAGUE_CREATE':
      validateLeague(payload);
      return [payload, ...state];
    case 'LEAGUE_UPDATE':
      if(state === []) throw new Error('USAGE ERROR: can not update league not in state');
      validateLeague(payload);
      return state.map(league => league._id === payload._id ? payload : league);
    case 'LEAGUE_DELETE':
      if(state === []) throw new Error('USAGE ERROR: can not delete league not in state');
      validateLeague(payload);
      return state.filter(league => league._id !== payload._id);
    case 'LEAGUE_JOIN':
      return [payload, ...state];
    case 'SIGN_OUT':
      return [];
    default:
      return state;
  }
};