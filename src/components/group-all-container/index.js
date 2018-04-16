import React from 'react';
import { connect } from 'react-redux';

import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';
import * as util from './../../lib/util.js';

class GroupAllContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    util.userValidation(this.props);
  }

  render() {
    return (
      <section className='page-outer-div'>
        <p> all groups page</p>
      </section>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
});

let mapDispatchToProps = dispatch => {
  return {
    tokenSignIn: token => dispatch(tokenSignInRequest(token)),
    userProfileFetch: () => dispatch(userProfileFetchRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupAllContainer);