import superagent from 'superagent';

export const messageBoardFetch = messageBoard => ({
  type: 'MESSAGEBOARD_FETCH',
  payload: messageBoard,
});

export const messageBoardFetchRequest = messageBoardID  => (dispatch, getState) => {
  let { userAuth } = getState();
  console.log('messageBoard fetch');
  return superagent.get(`${__API_URL__}/api/messageboard/${messageBoardID}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      console.log('messageBoard fetch res: ', res.body);
      dispatch(messageBoardFetch(res.body));
      return res;
    });
};