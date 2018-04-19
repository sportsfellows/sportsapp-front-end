import superagent from 'superagent';


export const gamesFetch = games => ({
  type: 'GAMES_FETCH',
  payload: games,
});

export const gameUpdate = game => ({
  type: 'GAME_UPDATE',
  payload: game,
});

export const gameUpdateRequest = game => (dispatch, getState) => {
  let { userAuth } = getState();
  console.log('game update hit');
  return superagent.put(`${__API_URL__}/api/game/${game._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .send(game)
    .then(res => {
      console.log('res.body: ', res.body);
      dispatch(gameUpdate(res.body));
      return res.body;
    });
};

export const gamesFetchRequest = sportingEventID => (dispatch, getState) => {
  let { userAuth } = getState();
  console.log('games fetch hit');
  return superagent.get(`${__API_URL__}/api/games/${sportingEventID}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      console.log('res.body: ', res.body);
      dispatch(gamesFetch(res.body));
      return res.body;
    });
};