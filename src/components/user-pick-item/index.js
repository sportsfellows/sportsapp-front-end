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
        <button className='userPick-buttons'>button </button>
        <span className='userPick-gameTime'>{userPick.gameTime}</span>
        <span className='winner'>winner </span>
        <button className='userPick-buttons'>button </button>
      </div>
    );
  }
}

export default UserPickItem;