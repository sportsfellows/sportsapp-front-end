import React from 'react';
import { connect } from 'react-redux';

import { tokenSignInRequest } from '../../actions/userAuth-actions.js';
import { userProfileFetchRequest } from '../../actions/userProfile-actions.js';
import { leaguesFetchRequest } from '../../actions/league-actions.js';
import { groupsFetchRequest, allPublicGroupsFetchRequest, groupJoinRequest, privateGroupJoinRequest } from '../../actions/group-actions.js';
import GroupAllPrivateForm from '../group-all-private-form';
import * as util from './../../lib/util.js';

class GroupAllContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    util.userValidation(this.props);
    this.props.allPublicGroupsFetch();
  }

  handleGroupJoin = groupID => {
    console.log('groupID: ', groupID);
    return this.props.groupJoin(groupID)
      .then(group => {
        console.log('handle group join - group: ', group);
        this.props.history.push(`/group/${group._id}`)
      })
      .catch(util.logError);
  };

  handlePrivateGroupJoin = credentials => {
    console.log('credentials: ', credentials);
    return this.props.privateGroupJoin(credentials)
      .then(group => {
        console.log('group: ', group);
        return this.props.history.push(`/group/${group._id}`)
      })
      .catch(util.logError);
  };

  render() {
    return (
      <section className='groups-container page-outer-div'>
        <div className='public-groups'>
          {this.props.publicGroups.map(group =>
            <div key={group._id}>
              <p>{group.groupName} {group.ownerName} {group.size} {group.scoring}<button onClick={() => this.handleGroupJoin(group._id)}>join</button></p>
            </div>
          )}
        </div>
        
        <GroupAllPrivateForm onComplete={this.handlePrivateGroupJoin}/>
      </section>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
  leagues: state.leagues,
  groups: state.groups,
  publicGroups: state.publicGroups,
});

let mapDispatchToProps = dispatch => {
  return {
    tokenSignIn: token => dispatch(tokenSignInRequest(token)),
    userProfileFetch: () => dispatch(userProfileFetchRequest()),
    leaguesFetch: leagueArr => dispatch(leaguesFetchRequest(leagueArr)),
    groupsFetch: groupArr => dispatch(groupsFetchRequest(groupArr)),
    allPublicGroupsFetch: () => dispatch(allPublicGroupsFetchRequest()),
    groupJoin: groupID => dispatch(groupJoinRequest(groupID)),
    privateGroupJoin: credentials => dispatch(privateGroupJoinRequest(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupAllContainer);