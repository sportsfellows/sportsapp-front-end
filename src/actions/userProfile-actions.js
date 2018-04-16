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
    // .attach('avatar', userProfile.avatar)
    .then( res => {
      dispatch(userProfileCreate(res.body));
      return res;
    });
};

export const userProfileUpdateRequest = profile => (dispatch, getState) => {
  let { userAuth, userProfile } = getState();
  
  return superagent.put(`${__API_URL__}/api/profile/${userProfile._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    // .field({username: userProfile.username, image: userProfile.image, country: userProfile.country, state: userProfile.state, birthdate: userProfile.birthdate })
    // .attach('avatar', userProfile.avatar)
    .send(profile)
    .then( res => {
      dispatch(userProfileUpdate(res.body));
      return res;
    });
};

export const userProfileFetchRequest = ()  => (dispatch, getState) => {
  let { userAuth } = getState();
  console.log('user profile fetch');
  return superagent.get(`${__API_URL__}/api/profiles/currentuser`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      console.log('userprofile fetch res: ', res.body);
      dispatch(userProfileFetch(res.body));
      return res;
    });
};

// userID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
// username: {type: String, required: true },
// image: { type: String },
// country: { type: String, uppercase: true },
// state: { type: String, uppercase: true },
// birthdate: { type: Number }, //(mmddyyyy);
// accountBalance: { type: Number, default: 0 },
// status: { type: String, default: 'active'},
// createdOn: { type: Date, default: Date.now },
// lastLogin: { type: Date, default: Date.now },
// leagues: [{type: mongoose.Schema.Types.ObjectId, ref: 'league'}],
// groups: [{type: mongoose.Schema.Types.ObjectId, ref: 'group'}],
// tags: [{type: String }],

