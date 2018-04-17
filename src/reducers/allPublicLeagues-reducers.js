export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
    case 'ALL_PUBLIC_LEAGUES_FETCH':
      return payload;
    case 'SIGN_OUT':
      return [];
    default:
      return state;
  }
};