let validateSportingEvent = sportingEvent => {
  if(!sportingEvent._id || !sportingEvent.sportingEventName || !sportingEvent.sportingEventID || !sportingEvent.owner || !sportingEvent.scoring || !sportingEvent.poolSize || !sportingEvent.privacy) {
    throw new Error('VALIDATION ERROR: sportingEvent requires a id, name, sportingeventid, owner, scoring, poolsize and privacy.');
  }
};

export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'SPORTINGEVENT_FETCH':
      return payload;
    case 'SPORTINGEVENT_CREATE':
      validateSportingEvent(payload);
      return payload;
    case 'SIGN_OUT':
      return null;
    default:
      return state;
  }
};

// sportingEventName: { type: String, required: true },
// desc: { type: String, required: true },
// createdOn: { type: Date, default: Date.now },
// tags: [{type: String }],