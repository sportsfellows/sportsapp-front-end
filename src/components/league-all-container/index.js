import React from 'react';
import { connect } from 'react-redux';

import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';
import { leaguesFetchRequest, leagueFetchRequest, leagueDeleteRequest, leagueUpdateRequest } from '../../actions/league-actions.js';
import { groupsFetchRequest } from '../../actions/group-actions.js';
import LeagueForm from '../league-form';
import * as util from '../../lib/util.js';

class LeagueAllContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    util.userValidation(this.props);
  }

  handleLeagueCreate = league => {
    console.log('handle leage create hi');
    league.sportingEventID='5ad2a2bffb35c1479596fdc2';
    return this.props.leagueCreate(league)
      // .then(() => )
      .catch(util.logError);
  }

  handleComplete = league => {
    return this.props.leagueUpdate(league)
      .then(() => this.props.history.push(`/league/${this.props.league._id}`))
      .catch(util.logError);
  }

  render(){
    return (
      <div className='league-container'>
        <LeagueForm onComplete={this.handleLeagueCreate} />
        {/* <LeagueForm league={this.props.league} onComplete={this.handleLeagueCreate} /> */}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
  leagues: state.leagues,
  groups: state.groups,
});

let mapDispatchToProps = dispatch => ({
  tokenSignIn: token => dispatch(tokenSignInRequest(token)),
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
  leaguesFetch: leagueArr => dispatch(leaguesFetchRequest(leagueArr)),
  groupsFetch: groupArr => dispatch(groupsFetchRequest(groupArr)),
  leagueFetch: league => dispatch(leagueFetchRequest(league)),
  leagueUpdate: league => dispatch(leagueUpdateRequest(league)),
  leagueDelete: league => dispatch(leagueDeleteRequest(league)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeagueAllContainer);