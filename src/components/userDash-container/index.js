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

      </section>
    );
  }
}

export default UserDashContainer;