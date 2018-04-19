// import './_user-pick-item.scss';
import React from 'react';

class UserPickItem extends React.Component {
  constructor(props){
    super(props);
    // this.state = { _id: props.userPick._id, pick: props.userPick.pick, 
      // awayTeamID: props.userPick.gameID.awayTeam._id,
      // awayTeamName: props.userPick.gameID.awayTeam.teamName,
      // homeTeamID: props.userPick.gameID.homeTeam._id,
      // homeTeamName: props.userPick.gameID.homeTeam.teamName, 
      // editing: false}
  }

  // componentWillReceiveProps(props){
  //   console.log('props: ', props.userPick);
  //   if(props.userPick)
  //     this.setState(props.userPick)
  // }

  awayTeamPick = team => {
    // this.setState({ pick: team });
    // console.log('awayTeamPick: ', this.state);
    // return this.props.onUpdate({ _id: this.state._id, pick: this.state.awayTeamID });
    console.log('hi');
  };

  homeTeamPick = team => {
    // console.log('homeTeamPick: ', this.state);
    // return this.props.onUpdate({ _id: this.state._id, pick: this.state.homeTeamID });
    console.log('hi');
  };
  
  render() {
    let { userPick } = this.props;
    console.log('props: ', this.props.userPick);
    return (
      <div className='userPickItem'>
        <button className='game-buttons awayTeamButton' onClick={this.awayTeamPick}>
          {/* <p className='teamName'>{this.state.awayTeamName}</p> */}
          <p className='teamRecord'>{userPick.gameID.awayTeam.wins} - {userPick.gameID.awayTeam.losses}</p>
        </button>
        <span className='game-dateTime'>{userPick.gameTime}</span>
        <button className='game-buttons homeTeamButton' onClick={this.homeTeamPick}>
          {/* <p className='teamName'>{this.state.homeTeamName}</p> */}
          <p className='teamRecord'>{userPick.gameID.homeTeam.wins} - {userPick.gameID.homeTeam.losses}</p>
        </button>
      </div>
    );
  }
}

export default UserPickItem;