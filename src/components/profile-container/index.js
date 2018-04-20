import React from 'react';
import { connect } from 'react-redux';

import ProfileForm from '../profile-form';
import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest, userProfileUpdateRequest } from '../../actions/userProfile-actions.js';
import { leaguesFetchRequest } from '../../actions/league-actions.js';
import { groupsFetchRequest } from '../../actions/group-actions.js';
import * as util from './../../lib/util.js';

class ProfileContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    util.userValidation(this.props);
  }

  handleProfileUpdate = profile => {
    return this.props.userProfileUpdate(profile)
      .catch(util.logError);
  }

  render(){
    return (
      <div className='profile-container page-outer-div'>
      <div className='grid-container'>
        <h2>tell us about yourself.</h2>
        <div className='page-form'>
          <ProfileForm 
            userProfile={this.props.userProfile} 
            onComplete={this.handleProfileUpdate}
          />
        </div>
        <div className='profile-image-div'>
          <h2>{this.props.userProfile.username}</h2>
          <img className='profile-image' src={this.props.userProfile.image} />
        </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
  leagues: state.leagues,
  groups: state.groups,
})

let mapDispatchToProps = (dispatch) => ({
  tokenSignIn: token => dispatch(tokenSignInRequest(token)),
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
  leaguesFetch: leagueArr => dispatch(leaguesFetchRequest(leagueArr)),
  groupsFetch: groupArr => dispatch(groupsFetchRequest(groupArr)),
  userProfileUpdate: profile => dispatch(userProfileUpdateRequest(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);