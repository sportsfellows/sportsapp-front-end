let validateUserProfile = userProfile => {
  if(!userProfile.userID || !userProfile.username){
    throw  new Error('VALIDATION ERROR: user profile requires a photo or bio');
  }
};

export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'USERPROFILE_CREATE':
      validateUserProfile(payload);
      return payload;
    case 'USERPROFILE_UPDATE':
      if(!state) throw new Error('USAGE ERROR: can not update when user profile is null');
      validateUserProfile(payload);
      return {...state, ...payload};
    case 'USERPROFILE_FETCH':
      validateUserProfile(payload);
      return payload;
    case 'LEAGUE_JOIN':
      state.leagues.push(payload._id);
      return state;
    case 'GROUP_JOIN':
      state.groups.push(payload._id);
      return state;
    case 'SIGN_OUT':
      return null;
    default:
      return state;
  }
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