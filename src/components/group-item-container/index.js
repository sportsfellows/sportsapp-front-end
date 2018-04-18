import React from 'react';
import { connect } from 'react-redux';

import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';
import { leaguesFetchRequest } from '../../actions/league-actions.js';
import { groupsFetchRequest, groupFetchRequest, groupDeleteRequest, groupUpdateRequest } from '../../actions/group-actions.js';
import GroupForm from '../league-form';
import MessageBoardContainer from '../message-board-container';
import * as util from '../../lib/util.js';

class GroupItemContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    return util.userValidation(this.props);
  }

  render(){
    console.log('this.props.currentMessageBoard: ', this.props.currentMessageBoard);
    return (
      <div className='group-container'>
        <MessageBoardContainer mBoardId={this.props.currentMessageBoard._id}/>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
  leagues: state.leagues,
  messageBoards: state.messageBoards,
  currentLeague: state.currentLeague,
  currentMessageBoard: state.currentMessageBoard,
});

let mapDispatchToProps = dispatch => ({
  tokenSignIn: token => dispatch(tokenSignInRequest(token)),
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
  leaguesFetch: leagueArr => dispatch(leaguesFetchRequest(leagueArr)),
  groupsFetch: groupArr => dispatch(groupsFetchRequest(groupArr)),
  groupFetch: group => dispatch(groupFetchRequest(group)),
  groupUpdate: group => dispatch(groupUpdateRequest(group)),
  groupDelete: group => dispatch(groupDeleteRequest(group)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupItemContainer);