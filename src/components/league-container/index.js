import React from 'react';
import { connect } from 'react-redux';
import * as util from '../../lib/util.js';
import { leagueFetchRequest, leagueDeleteRequest, leagueUpdateRequest } from '../../actions/league-actions.js';
import LeagueForm from '../league-form';

class LeagueContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    util.secondaryUserValidation(this.props);
    // this.props.leagueFetch(this.props.league)
    //   .catch(util.logError);
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
  league: state.league,
});

let mapDispatchToProps = dispatch => ({
  leagueFetch: league => dispatch(leagueFetchRequest(league)),
  leagueUpdate: league => dispatch(leagueUpdateRequest(league)),
  leagueDelete: league => dispatch(leagueDeleteRequest(league)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeagueContainer);