import React from 'react';

class GameItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {gameID: props.game._id, gameTime: props.game.dateTime, pick: '', awayTeam: props.game.awayTeam._id, homeTeam: props.game.homeTeam._id};
  }

  awayTeamPick = team => {
    this.setState({ pick: team });
    return this.props.onComplete({gameID: this.state.gameID, gameTime: this.state.gameTime, pick: this.state.awayTeam});
  };

  homeTeamPick = team => {
    return this.props.onComplete({gameID: this.state.gameID, gameTime: this.state.gameTime, pick: this.state.homeTeam});
  };
  
  render() {
    let { game } = this.props;
    return (
      <div className='gameItem'>
        <div className='awayTeamDiv'>
          <button className='teamName teamNameButton' onClick={this.awayTeamPick}>{game.awayTeam.teamName}</button>
          <p className='teamRecord'>{game.awayTeam.wins} - {game.awayTeam.losses}</p>
        </div>
        <span className='game-dateTime'>{new Date(game.dateTime).toDateString()}</span> 
        <div className='homeTeamDiv' >
          <button className='teamName teamNameButton' onClick={this.homeTeamPick}>{game.homeTeam.teamName}</button>
          <p className='teamRecord'>{game.homeTeam.wins} - {game.homeTeam.losses}</p>
        </div>
      </div>
    );
  }
}

export default GameItem;