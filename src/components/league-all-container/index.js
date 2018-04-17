import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';
import { leaguesFetchRequest, allPublicLeaguesFetchRequest, leagueJoinRequest, privateLeagueJoinRequest } from '../../actions/league-actions.js';
import { groupsFetchRequest } from '../../actions/group-actions.js';
import LeagueAllPrivateForm from '../league-all-private-form';
import * as util from '../../lib/util.js';

class LeagueAllContainer extends React.Component {
  constructor(props){
    super(props);
    
  };

  componentWillMount() {
    util.userValidation(this.props);
    this.props.allPublicLeaguesFetch();
  };

  handleLeagueJoin = leagueID => {
    console.log('leagueID: ', leagueID);
    return this.props.leagueJoin(leagueID)
      .then(league => {
        console.log('league: ', league);
        this.props.history.push(`/league/${league._id}`)
      })
      .catch(util.logError);
  };

  handlePrivateLeagueJoin = credentials => {
    console.log('credentials: ', credentials);
    return this.props.privateLeagueJoin(credentials)
      .then(league => {
        console.log('league: ', league);
        return this.props.history.push(`/league/${league._id}`)
      })
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
        
        <LeagueAllPrivateForm onComplete={this.handlePrivateLeagueJoin}/>

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
  privateLeagueJoin: credentials => dispatch(privateLeagueJoinRequest(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeagueAllContainer);