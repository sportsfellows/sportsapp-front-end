import superagent from 'superagent';

export const messageBoardFetch = messageBoard => ({
  type: 'MESSAGEBOARD_FETCH',
  payload: messageBoard,
});

export const messageBoardGroupFetchRequest = groupID  => (dispatch, getState) => {
  let { userAuth } = getState();
  console.log('group messageBoard fetch');
  return superagent.get(`${__API_URL__}/api/messageboard/group/${groupID}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      console.log('messageBoard fetch res: ', res.body);
      dispatch(messageBoardFetch(res.body[0]));
      return res.body[0];
    });
};

export const messageBoardLeagueFetchRequest = leagueID  => (dispatch, getState) => {
  let { userAuth } = getState();
  console.log(' league messageBoard fetch');
  return superagent.get(`${__API_URL__}/api/messageboard/league/${leagueID}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      console.log('messageBoard fetch res: ', res.body);
      dispatch(messageBoardFetch(res.body[0]));
      return res.body[0];
    });
};