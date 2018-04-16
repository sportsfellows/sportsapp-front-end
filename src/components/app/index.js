import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import * as util from '../../lib/util.js';
import Navbar from '../navbar';
import LandingPage from '../landing-page';
import LeagueContainer from '../league-container';
import AllGroups from '../allGroups';
import AllLeagues from '../allLeagues';
import ProfileContainer from '../profile-container';
import Footer from '../footer';
import { signIn, tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Route path='*' component={Navbar} />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/league/:leagueID' component={LeagueContainer} />
          {/* <Route path='/group/:groupID' component={Group} /> */}
          <Route exact path='/user/:profileID' component={ProfileContainer} /> 
          <Route exact path='/leagues' component={AllLeagues} />
          <Route exact path='/groups' component={AllGroups} />
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
  tokenSignIn: token => dispatch(tokenSignInRequest(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);