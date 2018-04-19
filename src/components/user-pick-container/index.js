import './_user-pick-container.scss';
import React from 'react';
import { connect } from 'react-redux';
import UserPickItem from '../user-pick-item';
import { userPicksFetchRequest, userPickUpdateRequest } from '../../actions/userPick-actions.js';
import * as util from '../../lib/util.js';

{/* <UserPickContainer leagueID={} /> */}

class UserPickContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.userPicksFetch(this.props.leagueID)
      .catch(util.logError);
  }

  handleComplete = userPick => {
    console.log('userPick: ', userPick);
    return this.props.userPickUpdate(userPick)
      .catch(console.error);
  };

  render(){
    return (
      <div className='userPick-container'>

        {this.props.userPicks.map(userPick =>
          <div key={userPick._id}>
            <UserPickItem  userPick={userPick} onComplete={this.handleComplete}/>
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
  userPicks: state.userPicks,
});

let mapDispatchToProps = (dispatch) => ({
  userPickUpdate: userPick => dispatch(userPickUpdateRequest(userPick)),
  userPicksFetch: leagueID => dispatch(userPicksFetchRequest(leagueID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPickContainer);