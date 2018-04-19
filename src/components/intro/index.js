import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Modal from '../helpers/modal';
import UserAuthForm from '../userAuth-form';
import { signUpRequest, signInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';
import { leaguesFetchRequest } from '../../actions/league-actions.js';
import { groupsFetchRequest } from '../../actions/group-actions.js';
import * as util from './../../lib/util.js';

class Intro extends React.Component {
  constructor(props){
    super(props);
    this.state = { authFormAction: 'Sign Up', formDisplay: false, };
  }

  handleSignin = (user, errCB) => {
    console.log('handle signin: ', user);
    return this.props.signIn(user)
      .then(() => this.props.userProfileFetch())
      .then(profile => {
        // return (profile.body.leagues.length ? this.props.leaguesFetch(profile.body.leagues) : profile);
        if(profile.body.leagues.length) this.props.leaguesFetch(profile.body.leagues);
        return profile;
      })
      .then(profile => {
        // if(this.props.userProfile.groups.length) return this.props.groupsFetch(this.props.userProfile.groups);
        console.log('profile.body.groups: ', profile.body.groups);
        return this.props.groupsFetch(profile.body.groups);
        // if(profile.body.groups.length) this.props.groupsFetch(profile.body.groups);
      })
      .catch(err => {
        util.logError(err);
        errCB(err);
      });
  };

  handleSignup = (user, errCB) => {
    console.log('handle signup: ', user);
    return this.props.signUp(user)
      .then(() => this.props.userProfileFetch())
      .catch(err => {
        util.logError(err);
        errCB(err);
    });
  };

  render() {
    let background = require('./../helpers/assets/introBackground.png');
    let lebron = require('./../helpers/assets/introLebron.png');
    let curry = require('./../helpers/assets/introCurry.png');
    let handleComplete = this.state.authFormAction === 'Sign Up' ? this.handleSignup : this.handleSignin;
    
    return (
      <div className="intro">
        <section id="introView" className="view introView">
          <div className="container">
            <h1 className="headline center">LET'S PLAY!</h1>
          </div>
          <div className="banner-image">
            <div className="background">
              <img className="intro-background intro-images" src={background} />
              <img className="intro-curry intro-images" src={curry} />
              <img className="intro-lebron intro-images" src={lebron} />
            </div>
          </div>
          <div className="container">
            <div className="narrow-container center">
              <div className="description">
              <div align='left'>
                Bracket Busters users compete against their friends by choosing winners for real world sports games.
              </div>
              <div align='left'>
                You are able to create and manage your own leagues and will have a personal scoreboard for each participant. Each league will also have its own message board that will allow you to communicate with those in your league. Each league also has the option to be private or public.
              </div>
              <div align='left'>
                If you are not participating in a league or would like to communicate with those outside of your league, you can also create a group. Like a league, each group has its own message board so users can communicate with each other.
              </div>
              </div>
              <p className="author">
                
              </p>
              <button onClick={() => this.setState({formDisplay: true})}id="start-button" >
                START
              </button>
            </div>
          </div>
        </section>
          <div>
            {util.renderIf(this.state.formDisplay,
              <div>
                <Modal heading='Bracket Busters' close={() => this.setState({ formDisplay: false })}>
                  <UserAuthForm authFormAction={this.state.authFormAction} onComplete={handleComplete} />

                  <div className='userauth-buttons'>
                    {util.renderIf(this.state.authFormAction==='Sign In',
                      <button onClick={() => this.setState({authFormAction: 'Sign Up'})}>Sign Up</button>
                    )}

                    {util.renderIf(this.state.authFormAction==='Sign Up',
                      <button onClick={() => this.setState({authFormAction: 'Sign In'})}>Sign In</button>
                    )}
                  </div>
                </Modal>
              </div>
            )}
          </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
  leagues: state.leagues,
  groups: state.groups,
});

let mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUpRequest(user)),
    signIn: user => dispatch(signInRequest(user)),
    userProfileFetch: () => dispatch(userProfileFetchRequest()),
    leaguesFetch: leagueArr => dispatch(leaguesFetchRequest(leagueArr)),
    groupsFetch: groupArr => dispatch(groupsFetchRequest(groupArr)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);