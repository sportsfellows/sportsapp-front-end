import superagent from 'superagent';

export const leagueCreate = league => ({
  type: 'LEAGUE_CREATE',
  payload: league,
});

export const leagueUpdate = league => ({
  type: 'LEAGUE_UPDATE',
  payload: league,
});

export const leagueFetch = league => ({
  type: 'LEAGUE_FETCH',
  payload: league,
});

export const leaguesFetch = leagues => ({
  type: 'LEAGUES_FETCH',
  payload: leagues,
});

export const leagueDelete = league => ({
  type: 'LEAGUE_DELETE',
  payload: league,
});

export const allPublicLeaguesFetch = leagues => ({
  type: 'ALL_PUBLIC_LEAGUES_FETCH',
  payload: leagues,
});

export const leagueJoin = league => ({
  type: 'LEAGUE_JOIN',
  payload: league,
});

export const leagueFetchRequest = league => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.get(`${__API_URL__}/api/league/${league._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(leagueFetch(res.body.data));
      return res;
    });
};

export const leaguesFetchRequest = leaguesArr => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.post(`${__API_URL__}/api/leagues/user`)
    .set('Authorization', `Bearer ${userAuth}`)
    .send(leaguesArr)
    .then(res => {
      dispatch(leaguesFetch(res.body));
      return res;
    });
};

export const leagueCreateRequest = league => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.post(`${__API_URL__}/api/sportingevent/${league.sportingEventID}/league`)
    .set('Authorization', `Bearer ${userAuth}`)
    .send(league)
    .then(res => {
      dispatch(leagueCreate(res.body));
      return res;
    });
};

export const leagueDeleteRequest = league => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.delete(`${__API_URL__}/api/league/${league._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(leagueDelete(league));
      return res;
    });
};

export const leagueUpdateRequest = league => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.put(`${__API_URL__}/api/league/${league._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .send(league)
    .then(res => {
      dispatch(leagueUpdate(res.body));
      return res;
    });
};

export const allPublicLeaguesFetchRequest = () => (dispatch, getState) => {
  let { userAuth } = getState();
  console.log('all public leagues hit');
  return superagent.get(`${__API_URL__}/api/leagues/allpublic`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(allPublicLeaguesFetch(res.body));
      return res;
    });
};

export const leagueJoinRequest = leagueID => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.get(`${__API_URL__}/api/league/${leagueID}/adduser`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(leagueJoin(res.body));
      return res;
    });
};