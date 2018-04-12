let validateUserAuth = userAuth => {
  if(!userAuth.userID || !userAuth.token){
    throw  new Error('VALIDATION ERROR: user auth requires an ID and token');
  }
};

export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'SIGN_IN':
      // validateUserAuth(payload);
      return payload;
    case 'SIGN_OUT':
      return null;
    default:
      return state;
  }
};

// username: {type: String, required: true, unique: true },
// email: { type: String, required: true, unique: true },
// password: {type: String, required: true },
// findHash: { type: String, unique: true },