import React from 'react';
import { connect } from 'react-redux';
import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';
import { leaguesFetchRequest, leagueFetchRequest, leagueDeleteRequest, leagueUpdateRequest } from '../../actions/league-actions.js';
import { groupsFetchRequest } from '../../actions/group-actions.js';
import { scoreBoardsFetchRequest } from '../../actions/scoreboard-actions.js';
import UserPickContainer from '../user-pick-container';
import MessageBoardContainer from '../message-board-container';
import LeagueItemScoreBoard from '../league-item-scoreboard';
import * as util from '../../lib/util.js';

class LeagueContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    util.userValidation(this.props);
    this.props.scoreBoardsFetch(this.props.currentLeague._id);
  }

  handleComplete = league => {
    return this.props.leagueUpdate(league)
      .then(() => this.props.history.push(`/league/${this.props.league._id}`))
      .catch(util.logError);
  }

  render(){
    return (
      <div className='leagueItem-container page-outer-div'>
      <div className='grid-container'>
        <UserPickContainer sportingEventID={this.props.currentLeague.sportingEventID} leagueID={this.props.currentLeague._id} />
        <MessageBoardContainer mBoardId={this.props.currentMessageBoard._id}/>
        <div className='scoreBoardOuter'>
          <p> ScoreBoard</p>
          {this.props.scoreBoards.map(scoreBoard =>
            <div key={scoreBoard._id}>
              <LeagueItemScoreBoard  scoreBoard={scoreBoard} />
            </div>
          )}
        </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
  currentLeague: state.currentLeague,
  currentMessageBoard: state.currentMessageBoard,
  scoreBoards: state.scoreBoards,
});

let mapDispatchToProps = dispatch => ({
  tokenSignIn: token => dispatch(tokenSignInRequest(token)),
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
  leaguesFetch: leagueArr => dispatch(leaguesFetchRequest(leagueArr)),
  groupsFetch: groupArr => dispatch(groupsFetchRequest(groupArr)),
  leagueFetch: league => dispatch(leagueFetchRequest(league)),
  leagueUpdate: league => dispatch(leagueUpdateRequest(league)),
  scoreBoardsFetch: leagueID => dispatch(scoreBoardsFetchRequest(leagueID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeagueContainer);