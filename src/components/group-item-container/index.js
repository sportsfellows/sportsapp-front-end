import React from 'react';
import { connect } from 'react-redux';

// import { leagueFetchRequest, leagueDeleteRequest, leagueUpdateRequest } from '../../actions/group-actions.js';
import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';
import { leaguesFetchRequest } from '../../actions/league-actions.js';
import { groupsFetchRequest } from '../../actions/group-actions.js';
import GroupForm from '../group-form';
import * as util from '../../lib/util.js';

class GroupItemContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    util.userValidation(this.props);
  }

  // handleLeagueCreate = league => {
  //   console.log('handle leage create hi');
  //   league.sportingEventID='5ad2a2bffb35c1479596fdc2';
  //   return this.props.leagueCreate(league)
  //     // .then(() => )
  //     .catch(util.logError);
  // }

  // handleComplete = league => {
  //   return this.props.leagueUpdate(league)
  //     .then(() => this.props.history.push(`/league/${this.props.league._id}`))
  //     .catch(util.logError);
  // }

  render(){
    return (
      <div className='group-item-container'>
        <h1> group item container</h1>
        {/* <GroupForm onComplete={this.handleGroupCreate} /> */}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupItemContainer);