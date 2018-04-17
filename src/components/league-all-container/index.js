import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';
import { leaguesFetchRequest, allPublicLeaguesFetchRequest, leagueJoinRequest } from '../../actions/league-actions.js';
import { groupsFetchRequest } from '../../actions/group-actions.js';
import * as util from '../../lib/util.js';

class LeagueAllContainer extends React.Component {
  constructor(props){
    super(props);
  };

  componentWillMount() {
    util.userValidation(this.props);
    this.props.allPublicLeaguesFetch();
  };

  handleLeagueCreate = league => {
    console.log('handle leage create hi');
    league.sportingEventID='5ad2a2bffb35c1479596fdc2';
    return this.props.leagueCreate(league)
      // .then(() => )
      .catch(util.logError);
  };

  handleComplete = league => {
    return this.props.leagueUpdate(league)
      .then(() => this.props.history.push(`/league/${this.props.league._id}`))
      .catch(util.logError);
  };

  handleLeagueJoin = leagueID => {
    return this.props.leagueJoin(leagueID)
      .then(() => this.props.history.push(`/league/${this.props.league._id}`))
      .catch(util.logError);
  };

  render(){
    return (
      <div className='leagues-container page-outer-div'>
        <div className='public-leagues'>
          {this.props.publicLeagues.map(league =>
            <div key={league._id}>
              <p>{league.leagueName} {league.ownerName} {league.size} {league.scoring}<button onClick={() => this.handleLeagueJoin(league._id)}>join</button></p>
            </div>
          )}
        </div>

      </div>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
  leagues: state.leagues,
  groups: state.groups,
  publicLeagues: state.publicLeagues,
});

let mapDispatchToProps = dispatch => ({
  tokenSignIn: token => dispatch(tokenSignInRequest(token)),
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
  leaguesFetch: leagueArr => dispatch(leaguesFetchRequest(leagueArr)),
  groupsFetch: groupArr => dispatch(groupsFetchRequest(groupArr)),
  allPublicLeaguesFetch: () => dispatch(allPublicLeaguesFetchRequest()),
  leagueJoin: leagueID => dispatch(leagueJoinRequest(leagueID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeagueAllContainer);