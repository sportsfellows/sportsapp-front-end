// import './_user-pick-item.scss';
import React from 'react';

class UserPickItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { _id: props.userPick._id, pick: props.userPick.pick, 
      awayTeamID: props.userPick.gameID.awayTeam._id,
      awayTeamName: props.userPick.gameID.awayTeam.teamName,
      awayTeamWins: props.userPick.gameID.awayTeam.wins,
      awayTeamLosses: props.userPick.gameID.awayTeam.losses,
      homeTeamID: props.userPick.gameID.homeTeam._id,
      homeTeamName: props.userPick.gameID.homeTeam.teamName,
      homeTeamWins: props.userPick.gameID.homeTeam.wins,
      homeTeamLosses: props.userPick.gameID.homeTeam.losses,
      editing: false}
  }

  componentWillReceiveProps(props){
    console.log('props: ', props.userPick);
    if(props.userPick)
      this.setState(props.userPick)
  }

  awayTeamPickUpdate = team => {
    // this.setState({ pick: team });
    // console.log('awayTeamPick: ', this.state);
    // return this.props.onUpdate({ _id: this.state._id, pick: this.state.awayTeamID });
    console.log('hi');
  };

  homeTeamPickUpdate = team => {
    // console.log('homeTeamPick: ', this.state);
    // return this.props.onUpdate({ _id: this.state._id, pick: this.state.homeTeamID });
    console.log('hi');
  };
  
  render() {
    let { userPick } = this.props;
    console.log('propseavevdewvesvwevewv: ', userPick);
    let x = userPick.gameID.gameTime;
    return (
      <div className='userPickItem'>
        <div className='game-buttons awayTeamButton' onClick={this.awayTeamPickUpdate}>
          <p className='teamName'>{this.state.awayTeamName}</p>
          <p className='teamRecord'>{this.state.awayTeamWins} - {this.state.awayTeamLosses}</p>
        </div>
        <span className='game-dateTime'>{userPick.dateTime}</span>
        <div className='game-buttons homeTeamButton' onClick={this.homeTeamPickUpdate}>
          <p className='teamName'>{this.state.homeTeamName}</p>
          <p className='teamRecord'>{this.state.homeTeamWins} - {this.state.homeTeamLosses}</p>
        </div>
      </div>
    );
  }
}

export default UserPickItem;