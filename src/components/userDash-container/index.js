import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import * as util from './../../lib/util.js';

class UserDashContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <section className='user-dash-container'>
        <div className='dash-league'>
          <h2>Leagues</h2>
        </div>

        <div className='dash-group'>
          <h2>Groups</h2>
        </div>
      </section>
    );
  }
}

export default UserDashContainer;