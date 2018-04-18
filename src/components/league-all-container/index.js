import React from 'react';
import { connect } from 'react-redux';

import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';
import { leaguesFetchRequest, allPublicLeaguesFetchRequest, leagueJoinRequest, privateLeagueJoinRequest, leagueFetch } from '../../actions/league-actions.js';
import { groupsFetchRequest } from '../../actions/group-actions.js';
import { messageBoardLeagueFetchRequest } from '../../actions/messageBoard-actions.js';
import { commentsFetchRequest } from '../../actions/comment-actions.js';
import LeagueAllPrivateForm from '../league-all-private-form';
import * as util from '../../lib/util.js';

class LeagueAllContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    util.userValidation(this.props);
    this.props.allPublicLeaguesFetch();
  };

  handleLeagueJoin = (league, e) => {
    return this.props.leagueJoin(league._id)
      .then(() => this.props.messageBoardLeagueFetch(league._id))
      .then(messageBoard => {
        console.log('messageBoard.body: ', messageBoard.body);
        return this.props.commentsFetch(messageBoard.comments);
      })
      .then(() => this.props.history.push(`/league/${league._id}`))
      .catch(util.logError);
  };

  handlePrivateLeagueJoin = credentials => {
    console.log('credentials: ', credentials);
    return this.props.privateLeagueJoin(credentials)
      .then(league => this.props.messageBoardLeagueFetch(league._id))
      .then(messageBoard => {
        console.log('messageBoard: ', messageBoard);
        this.props.commentsFetch(messageBoard.comments);
        return messageBoard.leagueID
      })
      .then(leagueID => {
        console.log('leagueID: ', leagueID);
        return this.props.history.push(`/league/${leagueID}`)
      })
      .catch(util.logError);
  };

  // handlePrivateLeagueJoin = credentials => {
  //   console.log('credentials: ', credentials);
  //   return this.props.privateLeagueJoin(credentials)
  //     .then(league => {
  //       console.log('league: ', league);
  //       return this.props.history.push(`/league/${league._id}`)
  //     })
  //     .catch(util.logError);
  // };

  render(){
    return (
      <div className='leagues-container page-outer-div'>
        <div className='public-leagues'>
          {this.props.publicLeagues.map(league => {
            let boundLeagueJoinClick = this.handleLeagueJoin.bind(this, league);
            return <div key={league._id}>
            <p>{league.leagueName} {league.ownerName} {league.size} {league.scoring}<button onClick={boundLeagueJoinClick}>join</button></p>
            </div>
          })}
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
  leagueFetchRequest: league => dispatch(leagueFetch(league)),
  messageBoardLeagueFetch: leagueID => dispatch(messageBoardLeagueFetchRequest(leagueID)),
  commentsFetch: commentArr => dispatch(commentsFetchRequest(commentArr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeagueAllContainer);