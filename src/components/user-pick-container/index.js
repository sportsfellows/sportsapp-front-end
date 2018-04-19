import './_user-pick-container.scss';
import React from 'react';
import { connect } from 'react-redux';
import UserPickItem from '../user-pick-item';
import GameItem from '../game-item';
import { gamesFetchRequest, gameUpdateRequest } from '../../actions/game-actions.js';
import { userPicksFetchRequest, userPickUpdateRequest, userPickCreateRequest } from '../../actions/userPick-actions.js';
import * as util from '../../lib/util.js';

class UserPickContainer extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.props.userPicksFetch(this.props.leagueID)
  //     .then((picks) => {
  //       console.log('picks: ', picks);
  //       console.log(picks.map(a => a.gameID._id));
  //       this.props.gamesFetch(this.props.sportingEventID)
  //     })
  //     .catch(util.logError);
  // }

  componentDidMount(){
    this.props.userPicksFetch(this.props.leagueID)
      .then(picks => {
        console.log('picks: ', picks);
        return this.props.gamesFetch(this.props.sportingEventID)
          .then(games => console.log('games: ', games))
      })
      .catch(util.logError);
  }

  handleUpdate = userPick => {
    console.log('userPick update: ', userPick);
    return this.props.userPickUpdate(userPick)
      .catch(console.error);
  };

  handleComplete = userPick => {
    console.log('userPick create: ', userPick);
    userPick.leagueID= this.props.leagueID;
    return this.props.userPickCreate(userPick)
      .catch(console.error);
  };

  render(){
    return (
      <div className='userPick-container'>
        <div className='userPicksDiv'>
          <p> My Picks</p>
          {/* {this.props.userPicks.map(userPick =>
            <div key={userPick._id}>
              <UserPickItem  userPick={userPick} onComplete={this.handleUpdate}/>
            </div>
          )} */}
        </div>

        <div className='gamesDiv'>
          <p> games that need picks </p>
          {this.props.games.map(game =>
            <div key={game._id}>
              <GameItem  game={game} onComplete={this.handleComplete}/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
  userPicks: state.userPicks,
  games: state.games,
});

let mapDispatchToProps = (dispatch) => ({
  userPicksFetch: leagueID => dispatch(userPicksFetchRequest(leagueID)),
  userPickUpdate: userPick => dispatch(userPickUpdateRequest(userPick)),
  userPickCreate: userPick => dispatch(userPickCreateRequest(userPick)),
  gamesFetch: sportingEventID => dispatch(gamesFetchRequest(sportingEventID)),
  gameUpdate: game => dispatch(gameUpdateRequest(game)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPickContainer);