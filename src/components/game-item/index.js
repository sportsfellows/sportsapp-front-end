// import './_game-item.scss';
import React from 'react';

class GameItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {gameID: props.game._id, gameTime: props.game.dateTime, pick: '', awayTeam: props.game.awayTeam._id, homeTeam: props.game.homeTeam._id};
  }

  awayTeamPick = team => {
    this.setState({ pick: team });
    console.log('awayTeamPick: ', this.state);
    return this.props.onComplete({gameID: this.state.gameID, gameTime: this.state.gameTime, pick: this.state.awayTeam});
  };

  homeTeamPick = team => {
    console.log('homeTeamPick: ', this.state);
    return this.props.onComplete({gameID: this.state.gameID, gameTime: this.state.gameTime, pick: this.state.homeTeam});
  };
  
  render() {
    let { game } = this.props;
    console.log('game: ', game);
    return (
      <div className='gameItem'>
        <button className='game-buttons awayTeamButton' onClick={this.awayTeamPick}>
          <p className='teamName'>{game.awayTeam.teamName}</p>
          <p className='teamRecord'>{game.awayTeam.wins} - {game.awayTeam.losses}</p>
        </button>
        <span className='game-dateTime'>{game.dateTime}</span>
        <button className='game-buttons homeTeamButton' onClick={this.homeTeamPick}>
          <p className='teamName'>{game.homeTeam.teamName}</p>
          <p className='teamRecord'>{game.homeTeam.wins} - {game.homeTeam.losses}</p>
        </button>
      </div>
    );
  }
}

export default GameItem;