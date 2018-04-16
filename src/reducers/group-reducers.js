let validateGroup = group => {
  if(!group._id || !group.groupName || !group.sportingEventID || !group.owner || !group.scoring || !group.poolSize || !group.privacy) {
    throw new Error('VALIDATION ERROR: group requires a id, name, sportingeventid, owner, scoring, poolsize and privacy.');
  }
};

export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
    case 'GROUP_FETCH':
      return payload;
    case 'GROUPS_FETCH':
      return [...payload, ...state];
    case 'GROUP_CREATE':
      validateGroup(payload);
      return [payload, ...state];
    case 'GROUP_UPDATE':
      if(state === []) throw new Error('USAGE ERROR: can not update group not in state');
      validateGroup(payload);
      return state.map(group => group._id === payload._id ? payload : group);
    case 'GROUP_DELETE':
      if(state === []) throw new Error('USAGE ERROR: can not delete group not in state');
      validateGroup(payload);
      return state.filter(group => group._id !== payload._id);
    case 'SIGN_OUT':
      return [];
    default:
      return state;
  }
};