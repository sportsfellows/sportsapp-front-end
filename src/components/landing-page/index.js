import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Intro from '../intro';
import LeagueForm from '../league-form';
import { leagueCreateRequest } from '../../actions/league-actions.js';
import * as util from './../../lib/util.js';

class LandingPage extends React.Component {
  constructor(props){
    super(props);
  }
  handleLeagueCreate = league => {
    console.log('handle leage create hi');
    league.sportingEventID='5ad169b4fc236539b61c3805';
    return this.props.leagueCreate(league)
      // .then(() => )
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
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);


// let mapDispatchToProps = dispatch => ({
//   signOut: () => dispatch(signOut()),
//   userGalleryItemsFetch: () => dispatch(userGalleryItemsFetchRequest()),
//   userGalleryItemCreate: userGalleryItem => dispatch(userGalleryItemCreateRequest(userGalleryItem)),
// });