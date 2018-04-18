import superagent from 'superagent';

export const commentCreate = comment => ({
  type: 'COMMENT_CREATE',
  payload: comment,
});

export const commentFetch = comment => ({
  type: 'COMMENT_FETCH',
  payload: comment,
});

export const commentsFetch = comments => ({
  type: 'COMMENTS_FETCH',
  payload: comments,
});

export const commentCreateRequest = comment => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.post(`${__API_URL__}/api/messageboard/${comment.messageBoardID}/comment`)
    .set('Authorization', `Bearer ${userAuth}`)
    .send(comment)
    .then(res => {
      dispatch(commentCreate(res.body));
      return res;
    });
};

export const commentFetchRequest = commentID => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.get(`${__API_URL__}/api/comment/${commentID}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(commentFetch(res.body.data));
      return res;
    });
};

export const commentsFetchRequest = commentsArr => (dispatch, getState) => {
  let { userAuth } = getState();
  console.log('commetnsArr: ', commentsArr);
  return superagent.post(`${__API_URL__}/api/comments/messageboard`)
    .set('Authorization', `Bearer ${userAuth}`)
    .send(commentsArr)
    .then(res => {
      console.log('res: ', res);
      console.log('res.body: ', res.body);
      dispatch(commentsFetch(res.body));
      return res.body;
    });
};