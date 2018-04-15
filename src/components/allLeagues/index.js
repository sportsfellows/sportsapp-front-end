import React from 'react';
import { connect } from 'react-redux';

import { leagueCreateRequest } from '../../actions/league-actions.js';
import { userProfileUpdateRequest } from '../../actions/userProfile-actions.js';
import * as util from './../../lib/util.js';

class AllLeagues extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    util.secondaryUserValidation(this.props);
  }

  render() {
    return (
      <section className='page-outer-div'>
        <p> all leagues page</p>
      </section>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
});

let mapDispatchToProps = dispatch => ({
  leagueCreate: league => dispatch(leagueCreateRequest(league)),
  userProfileUpdate: profile => dispatch(userProfileUpdateRequest(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllLeagues);