import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';
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
            This box will contain links to leagues that the user is part of.
          </div>

        </div>

        <div className='dash-group'>

          <ul className='group-links'>
            <li><Link to='/groups'>View All Groups</Link></li>
            <li><Link to='#'>Create a New Group</Link></li>
          </ul>

          <h2>My Groups</h2>

          <div className='my-groups'>
            This box will container links to groups that the user is part of.
          </div>

        </div>
      </section>
    );
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.userProfile,
});

let mapDispatchToProps = (dispatch) => ({
  userProfileFetch: (photos) => dispatch(userProfileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashContainer);