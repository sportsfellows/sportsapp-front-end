import superagent from 'superagent';

export const scoreBoardsFetch = scoreBoards => ({
  type: 'SCOREBOARDS_FETCH',
  payload: scoreBoards,
});

export const scoreBoardsFetchRequest = leagueID => (dispatch, getState) => {
  let { userAuth } = getState();
  console.log('scoreBoard fetch req hit: ', leagueID);
  return superagent.get(`${__API_URL__}/api/scoreboards/${leagueID}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      console.log('res.body: ', res.body);
      dispatch(scoreBoardsFetch(res.body));
      return res.body;
    });
};