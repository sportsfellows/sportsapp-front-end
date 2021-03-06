import superagent from 'superagent';

export const userProfileCreate = userProfile => ({
  type: 'USERPROFILE_CREATE',
  payload: userProfile,
});

export const userProfileUpdate = userProfile => ({
  type: 'USERPROFILE_UPDATE',
  payload: userProfile,
});

export const userProfileFetch = userProfile => ({
  type: 'USERPROFILE_FETCH',
  payload: userProfile,
});

// ASYNC
export const userProfileCreateRequest = userProfile => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.post(`${__API_URL__}/api/profile`)
    .set('Authorization', `Bearer ${userAuth}`)
    .field({username: userProfile.username, image: userProfile.image, country: userProfile.country, state: userProfile.state, birthdate: userProfile.birthdate, tags: userProfile.tags })
    .then( res => {
      dispatch(userProfileCreate(res.body));
      return res;
    });
};

export const userProfileUpdateRequest = profile => (dispatch, getState) => {
  let { userAuth, userProfile } = getState();
  
  return superagent.put(`${__API_URL__}/api/profile/${userProfile._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .send(profile)
    .then( res => {
      dispatch(userProfileUpdate(res.body));
      return res;
    });
};

export const userProfileFetchRequest = ()  => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.get(`${__API_URL__}/api/profiles/currentuser`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(userProfileFetch(res.body));
      return res;
    });
};