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

export const leagueDelete = league => ({
  type: 'LEAGUE_DELETE',
  payload: league,
});

export const leagueFetchRequest = () => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.get(`${__API_URL__}/photos/me`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(leagueFetch(res.body.data));
      return res;
    });
};

export const userGalleryItemCreateRequest = userGalleryItem => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.post(`${__API_URL__}/photos`)
    .set('Authorization', `Bearer ${userAuth}`)
    .field('description', userGalleryItem.description)
    .attach('photo', userGalleryItem.photo)
    .then(res => {
      dispatch(userGalleryItemCreate(res.body));
      return res;
    });
};

export const userGalleryItemDeleteRequest = userGalleryItem => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.delete(`${__API_URL__}/photos/${userGalleryItem._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(userGalleryItemDelete(userGalleryItem));
      return res;
    });
};

export const userGalleryItemUpdateRequest = userGalleryItem => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.put(`${__API_URL__}/photos/${userGalleryItem._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .field('description', userGalleryItem.description)
    .attach('photo', userGalleryItem.photo)
    .then(res => {
      dispatch(userGalleryItemUpdate(res.body));
      return res;
    });
};