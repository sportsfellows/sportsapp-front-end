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
    this.props.leagueFetch(this.props.league)
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
        <LeagueForm league={this.props.league} onComplete={handleComplete}/>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  userProfile: state.userProfile,
  league: state.league,
});

let mapDispatchToProps = dispatch => ({
  leagueFetch: league => dispatch(leagueFetchRequest(league)),
  leagueUpdate: league => dispatch(leagueUpdateRequest(league)),
  leagueDelete: league => dispatch(leagueDeleteRequest(league)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeagueContainer);