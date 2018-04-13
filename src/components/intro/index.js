import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import * as util from './../../lib/util.js';
import Modal from '../modal';
import UserAuthForm from '../userAuth-form';
import { signUpRequest, signInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';

class Intro extends React.Component {
  constructor(props){
    super(props);
    state = {
      signup: true,
    }

  }

  handleSignin = user => {
    let { userProfileFetch, history } = this.props;
    return this.props.signIn(user)
      .then(() => userProfileFetch())
      .then(() => history.push('/'))
      .catch(util.logError);
  };

  handleSignup = user => {
    return this.props.signUp(user)
      .then(() => this.props.history.push('/'))
      .catch(util.logError);
  }

  render() {
    let background = require('./../assetts/introBackground.png');
    let lebron = require('./../assetts/introLebron.png');
    let curry = require('./../assetts/introCurry.png');

    
    let handleComplete = signup ? this.handleSignup : this.handleSignin;
    let buttonText =  signup ? 'signup' : 'signin';
    // function handleModal() {
    //   return launchModal ? launchModal=false : launchModal=true;
    // }
   

    return (
      <div className="intro">
        <section id="introView" className="view introView">
          <div className="container">
            <h1 className="headline center">BUILD YOUR OWN BRACKET!</h1>
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
              <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>
              <p className="author">
                SUB HEADER HERE
              </p>
              <button id="start-button" >
                START
              </button>
            </div>
          </div>
        </section>
          <div>
            <UserAuthForm signup={signup} onComplete={handleComplete} buttonText={buttonText}/>

            <div className='userauth-buttons'>
              {util.renderIf(!signup,
                <button onClick={() => signup=true}>signup</button>
              )}

              {util.renderIf(signup,
                <button onClick={() => signup=false}>signin</button>
              )}
            </div>
          </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userprofile: state.userprofile,
});

let mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUpRequest(user)),
    signIn: user => dispatch(signInRequest(user)),
    userProfileFetch: () => dispatch(userProfileFetchRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);