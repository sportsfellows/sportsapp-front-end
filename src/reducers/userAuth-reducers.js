export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'SIGN_IN':
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