export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
    case 'ALL_PUBLIC_LEAGUES_FETCH':
      console.log('payload: ', payload);
      return payload;
    case 'SIGN_OUT':
      return [];
    default:
      return state;
  }
};