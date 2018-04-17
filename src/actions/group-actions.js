import superagent from 'superagent';

export const groupCreate = group => ({
  type: 'GROUP_CREATE',
  payload: group,
});

export const groupUpdate = group => ({
  type: 'GROUP_UPDATE',
  payload: group,
});

export const groupFetch = group => ({
  type: 'GROUP_FETCH',
  payload: group,
});

export const groupsFetch = groups => ({
  type: 'GROUPS_FETCH',
  payload: groups,
});

export const allPublicGroupsFetch = groups => ({
  type: 'ALL_PUBLIC_GROUPS_FETCH',
  payload: groups,
});

export const groupDelete = group => ({
  type: 'GROUP_DELETE',
  payload: group,
});

export const groupCreateRequest = group => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.post(`${__API_URL__}/api/group`)
    .set('Authorization', `Bearer ${userAuth}`)
    .send(group)
    .then(res => {
      dispatch(groupCreate(res.body));
      return res;
    });
};

export const groupFetchRequest = group => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.get(`${__API_URL__}/api/group/${group._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(groupFetch(res.body.data));
      return res;
    });
};

export const groupsFetchRequest = groupsArr => (dispatch, getState) => {
  let { userAuth } = getState();
  console.log('groups fetch req hit: ', groupsArr);
  return superagent.post(`${__API_URL__}/api/groups/user`)
    .set('Authorization', `Bearer ${userAuth}`)
    .send(groupsArr)
    .then(res => {
      console.log('res.body: ', res.body);
      dispatch(groupsFetch(res.body));
      return res;
    });
};

export const allPublicGroupsFetchRequest = () => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.get(`${__API_URL__}/api/groups/allpublic`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(groupFetch(res.body));
      return res;
    });
};


export const groupDeleteRequest = group => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.delete(`${__API_URL__}/api/group/${group._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(groupDelete(group));
      return res;
    });
};

export const groupUpdateRequest = group => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.put(`${__API_URL__}/api/group/${group._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .send(group)
    .then(res => {
      dispatch(groupUpdate(res.body));
      return res;
    });
};