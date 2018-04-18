import { checkAndAdd } from '../lib/util.js';

let validateComment = comment => {
  if(!comment._id || !comment.userID || !comment.username || !comment.messageBoardID || !comment.content) {
    throw new Error('VALIDATION ERROR: comment requires a id, userID, username, messageboardID and CONTENT.');
  }
};

export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
    case 'COMMENT_FETCH':
      return checkAndAdd(payload, state);
    case 'COMMENTS_FETCH':
      return [payload];
    case 'COMMENT_CREATE':
      validateComment(payload);
      return [payload, ...state];
    case 'SIGN_OUT':
      return [];
    default:
      return state;
  }
};