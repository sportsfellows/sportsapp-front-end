import React from 'react';
import { connect } from 'react-redux';
import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';
import { leaguesFetchRequest, leagueFetchRequest, leagueDeleteRequest, leagueUpdateRequest } from '../../actions/league-actions.js';
import { groupsFetchRequest } from '../../actions/group-actions.js';
import UserPickContainer from '../user-pick-container';
import MessageBoardContainer from '../message-board-container';
import * as util from '../../lib/util.js';

class LeagueContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    return util.userValidation(this.props);
  }

  handleComplete = league => {
    return this.props.leagueUpdate(league)
      .then(() => this.props.history.push(`/league/${this.props.league._id}`))
      .catch(util.logError);
  }

  render(){
    console.log('this.props.currentMessageBoard: ', this.props.currentMessageBoard);
    return (
      <div className='leagueItem-container page-outer-div'>
        <UserPickContainer sportingEventID={this.props.currentLeague.sportingEventID} leagueID={this.props.currentLeague._id} />
        <MessageBoardContainer mBoardId={this.props.currentMessageBoard._id}/>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
  currentLeague: state.currentLeague,
  currentMessageBoard: state.currentMessageBoard,
});

let mapDispatchToProps = dispatch => ({
  tokenSignIn: token => dispatch(tokenSignInRequest(token)),
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
  leaguesFetch: leagueArr => dispatch(leaguesFetchRequest(leagueArr)),
  groupsFetch: groupArr => dispatch(groupsFetchRequest(groupArr)),
  leagueFetch: league => dispatch(leagueFetchRequest(league)),
  leagueUpdate: league => dispatch(leagueUpdateRequest(league)),
  // messageBoardLeagueFetch: leagueID => dispatch(messageBoardLeagueFetchRequest(leagueID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeagueContainer);