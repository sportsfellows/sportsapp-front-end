import React from 'react';
import { connect } from 'react-redux';

import ProfileForm from '../profile-form';
import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileUpdateRequest, userProfileFetchRequest } from '../../actions/userProfile-actions.js';
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
        <h2>tell us about yourself</h2>

        <ProfileForm 
          userProfile={this.props.userProfile} 
          onComplete={this.handleProfileUpdate}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
})

let mapDispatchToProps = (dispatch) => ({
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
  userProfileUpdate: profile => dispatch(userProfileUpdateRequest(profile)),
  tokenSignIn: token => dispatch(tokenSignInRequest(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);