import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Intro from '../intro';
import LeagueForm from '../league-form';
import Profile from '../profile';
import { signInRequest } from '../../actions/userAuth-actions.js';
import { userProfileUpdateRequest, userProfileFetchRequest } from '../../actions/userProfile-actions.js';
import { leagueCreateRequest } from '../../actions/league-actions.js';
import * as util from './../../lib/util.js';

class LandingPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    console.log('location: ', this.props.location.pathname);
    util.userValidation(this.props);
  }

  handleLeagueCreate = league => {
    console.log('handle leage create hi');
    league.sportingEventID='5ad2a2bffb35c1479596fdc2';
    return this.props.leagueCreate(league)
      // .then(() => )
      .catch(util.logError);
  }

  handleProfileUpdate = profile => {
    return this.props.userProfileUpdate(profile)
      .catch(util.logError);
  }

  render() {
    let q= console.log('hi');
    let { params } = this.props.match;
    let handleComplete = params.userAuth === 'signin' ? this.handleSignin : this.handleSignup;
    return (
      <section className='landing-page page-outer-div'>
        

        {util.renderIf(!this.props.userAuth,
          <Intro />
        )}


        {util.renderIf(this.props.userAuth,
          <div>
            <LeagueForm onComplete={this.handleLeagueCreate} />

            {util.renderIf(this.props.userProfile && this.props.userProfile.lastLogin === this.props.userProfile.createdOn,
              <Profile userProfile={this.props.userProfile} onComplete={this.handleProfileUpdate}/>
            )}
          </div>
        )}

        {util.renderIf(this.props.userProfile,
          <div>
            {/* <Link to={`/user/${this.props.userProfile._id}`}>Profile</Link> */}
          </div>
        )}

        
        <Link to="/user/jb">user</Link>
        <Link to="/league/jb">league</Link>

      </section>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
});

let mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(signInRequest(user)),
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
  userProfileUpdate: profile => dispatch(userProfileUpdateRequest(profile)),
  leagueCreate: league => dispatch(leagueCreateRequest(league)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);