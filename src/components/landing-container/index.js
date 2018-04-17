import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Intro from '../intro';
import LeagueForm from '../league-form';
import GroupForm from '../group-form';
import ProfileForm from '../profile-form';
import Modal from '../helpers/modal';
import CreateSection from '../helpers/createSection';
import JoinSection from '../helpers/joinSection';
import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest, userProfileUpdateRequest } from '../../actions/userProfile-actions.js';
import { leaguesFetchRequest, leagueCreateRequest } from '../../actions/league-actions.js';
import { groupsFetchRequest, groupCreateRequest } from '../../actions/group-actions.js';
import * as util from './../../lib/util.js';

class LandingContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { profileFormDisplay: true, leagueFormDisplay: false, groupFormDisplay: false }
  }

  componentWillMount() {
    util.userValidation(this.props);
  }

  handleLeagueCreate = league => {
    console.log('handle league create');
    league.sportingEventID='5ad2a2bffb35c1479596fdc2';
    return this.props.leagueCreate(league)
      // .then(league => console.log('league created: ', league.body._id))
      .then(newLeague => this.props.history.push(`/league/${newLeague.body._id}`))
      .catch(util.logError);
  }

  handleGroupCreate = group => {
    console.log('handle group create');
    return this.props.groupCreate(group)
      // .then(group => console.log('group created: ', group))
      .then(newGroup => this.props.history.push(`/group/${newGroup.body._id}`))
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
    let formTypeLeague = 'league';
    let formTypeGroup = 'group';
    return (
      <section className='landing-page page-outer-div'>
        
        {util.renderIf(!this.props.userAuth,
          <Intro />
        )}

        {util.renderIf(this.props.userAuth,
          <div>
            <CreateSection formType={formTypeLeague} handleCreate={() => this.setState({ leagueFormDisplay: true })}/>

            <JoinSection joinType={formTypeLeague}/>
            
            {util.renderIf(this.state.leagueFormDisplay,
              <Modal heading='Create League' close={() => this.setState({ leagueFormDisplay: false })}>
                <LeagueForm 
                  onComplete={this.handleLeagueCreate} 
                />
              </Modal>
            )}

            {this.props.leagues.map(league =>
              <div key={league._id}>
                <p><Link to={`/league/${league._id}`} className='link'>{league.leagueName} {league.ownerName} {league.size} {league.scoring}</Link></p>
              </div>
            )}

            <CreateSection formType={formTypeGroup} handleCreate={() => this.setState({ groupFormDisplay: true })}/>

            <JoinSection joinType={formTypeGroup}/>

            {util.renderIf(this.state.groupFormDisplay,
              <Modal heading='Create Group' close={() => this.setState({ groupFormDisplay: false })}>
                <GroupForm 
                  onComplete={this.handleGroupCreate} 
                />
              </Modal>
            )}

            {this.props.groups.map(group =>
              <div key={group._id}>
                <p><Link to={`/group/${group._id}`} className='link'>{group.groupName} {group.ownerName} {group.privacy} {group.size} </Link></p>
              </div>
            )}

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
  leagues: state.leagues,
  groups: state.groups,
});

let mapDispatchToProps = dispatch => ({
  tokenSignIn: token => dispatch(tokenSignInRequest(token)),
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
  leaguesFetch: leagueArr => dispatch(leaguesFetchRequest(leagueArr)),
  groupsFetch: groupArr => dispatch(groupsFetchRequest(groupArr)),
  userProfileUpdate: profile => dispatch(userProfileUpdateRequest(profile)),
  leagueCreate: league => dispatch(leagueCreateRequest(league)),
  groupCreate: group => dispatch(groupCreateRequest(group)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);