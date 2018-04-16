import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Intro from '../intro';
import LeagueForm from '../league-form';
import ProfileForm from '../profile-form';
import Modal from '../helpers/modal';
import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest, userProfileUpdateRequest } from '../../actions/userProfile-actions.js';
import { leagueCreateRequest } from '../../actions/league-actions.js';
import * as util from './../../lib/util.js';

class LandingContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { profileFormDisplay: true,}
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
    console.log('hi');
    let { params } = this.props.match;
    let handleComplete = params.userAuth === 'signin' ? this.handleSignin : this.handleSignup;
    return (
      <section className='landing-page page-outer-div'>
        
        {util.renderIf(!this.props.userAuth,
          <Intro />
        )}


        {util.renderIf(this.props.userAuth,
          <div>
            <LeagueForm 
              onComplete={this.handleLeagueCreate} 
            />

            {util.renderIf(this.state.profileFormDisplay && this.props.userProfile && this.props.userProfile.lastLogin === this.props.userProfile.createdOn,
              <Modal heading='Fill Out Your Profile'
                close={() => {
                  this.setState({ profileFormDisplay: false });
                  this.handleProfileUpdate(this.props.userProfile);
                }}>

                <ProfileForm 
                  userProfile={this.props.userProfile} 
                  onComplete={this.handleProfileUpdate}
                />

              </Modal>
            )}
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
  tokenSignIn: token => dispatch(tokenSignInRequest(token)),
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
  userProfileUpdate: profile => dispatch(userProfileUpdateRequest(profile)),
  leagueCreate: league => dispatch(leagueCreateRequest(league)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);