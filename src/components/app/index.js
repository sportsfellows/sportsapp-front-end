import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import * as util from '../../lib/util.js';
import Navbar from '../navbar';
import LandingPage from '../landing-page';
import Footer from '../footer';
import { signIn } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Route path='*' component={Navbar} />
          <Route exact path='/' component={LandingPage} />
          <Route path='*' component={Footer} />
        </section>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = state => ({
  userProfile: state.userProfile,
});

let mapDispatchToProps = dispatch => ({
  signIn: token => dispatch(signIn(token)),
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);