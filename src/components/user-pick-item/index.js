// import './_user-pick-item.scss';
import React from 'react';

class UserPickItem extends React.Component {
  constructor(props){
    super(props);
    // this.state = { _id: props.userPick._id, pick: props.userPick.pick, 
    //   awayTeamID: props.userPick.gameID.awayTeam._id,
    //   awayTeamName: props.userPick.gameID.awayTeam.teamName,
    //   homeTeamID: props.userPick.gameID.homeTeam._id,
    //   homeTeamName: props.userPick.gameID.homeTeam.teamName, 
    //   editing: false}
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
    return (
      <div className='userPickItem'>
        <div className='game-buttons awayTeamButton' onClick={this.awayTeamPickUpdate}>
          {/* <p className='teamName'>{userPick.gameID.awayTeam}</p> */}
        </div>

        {/* <div className='game-buttons awayTeamButton' onClick={this.awayTeamPickUpdate}>
          <p className='teamName'>{userPick.gameID.awayTeam.teamName}</p>
          <p className='teamRecord'>{userPick.gameID.awayTeam.wins} - {userPick.gameID.awayTeam.losses}</p>
        </div>
        <span className='game-dateTime'>{userPick.dateTime}</span>
        <div className='game-buttons homeTeamButton' onClick={this.homeTeamPickUpdate}>
          <p className='teamName'>{userPick.gameID.homeTeam.teamName}</p>
          <p className='teamRecord'>{userPick.gameID.homeTeam.wins} - {userPick.gameID.homeTeam.losses}</p>
        </div> */}
      </div>
    );
  }
}

export default UserPickItem;