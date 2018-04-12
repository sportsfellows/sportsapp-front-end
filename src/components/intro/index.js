import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import * as util from './../../lib/util.js';

class Intro extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let background = require('./../assetts/introBackground.png');
    let lebron = require('./../assetts/introLebron.png');
    let curry = require('./../assetts/introCurry.png');

    return (
      <div className="intro">
        <section id="introView" className="view introView">
          <div className="container">
            <h1 className="headline center">BUILD YOUR OWN NBA ALL-STAR TEAM!</h1>
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
                BY BRIAN BIXBY
              </p>
              <button id="start-button">
                START
              </button>
            </div>
          </div>
        </section>
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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);