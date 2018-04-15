import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Intro from '../intro';
import LeagueForm from '../league-form';
import Profile from '../profile';
import { leagueCreateRequest } from '../../actions/league-actions.js';
import { userProfileUpdateRequest } from '../../actions/userProfile-actions.js';
import * as util from './../../lib/util.js';

class LandingPage extends React.Component {
  constructor(props){
    super(props);
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
      <section className='landing-page'>
        

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
        <Link to="/user/sdf">Hellow</Link>

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

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);


// let mapDispatchToProps = dispatch => ({
//   signOut: () => dispatch(signOut()),
//   userGalleryItemsFetch: () => dispatch(userGalleryItemsFetchRequest()),
//   userGalleryItemCreate: userGalleryItem => dispatch(userGalleryItemCreateRequest(userGalleryItem)),
// });