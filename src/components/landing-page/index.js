import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Intro from '../intro';
import * as util from './../../lib/util.js';

class LandingPage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let { params } = this.props.match;
    let handleComplete = params.userAuth === 'signin' ? this.handleSignin : this.handleSignup;
    return (
      <section className='landing-page'>
        <Intro />
      </section>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userprofile: state.userprofile,
});

let mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);