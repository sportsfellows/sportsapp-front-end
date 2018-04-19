import './_user-pick-item.scss';
import React from 'react';

class UserPickItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }
  
  render() {
    let { userPick } = this.props;
    return (
      <div className='userPick-item'>
        <button className='userPick-buttons'>{userPick.gameID.awayTeam.teamName} </button>
        <span className='userPick-gameTime'>{userPick.gameTime.toString()}</span>
        <span className='winner'>winner </span>
        <button className='userPick-buttons'>{userPick.gameID.homeTeam.teamName} </button>
      </div>
    );
  }
}

export default UserPickItem;