import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import UserLeagues from '../userLeagues';
import UserGroups from '../userGroups';
import * as util from './../../lib/util.js';

class UserDashContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='user-dash-container'>
        <div className='dash-league'>

          <ul className='league-links'>
            <li><Link to='/leagues'>View All Leagues</Link></li>
            <li><Link to='#'>Create a New League</Link></li>
          </ul>

          <h2>My Leagues</h2>

          <div className='my-leagues'>
            <UserLeagues />
          </div>

        </div>

        <div className='dash-group'>

          <ul className='group-links'>
            <li><Link to='/groups'>View All Groups</Link></li>
            <li><Link to='#'>Create a New Group</Link></li>
          </ul>

          <h2>My Groups</h2>

          <div className='my-groups'>
            <UserGroups />
          </div>

        </div>
      </section>
    );
  }
}

export default UserDashContainer;