// import React from 'react';
// import { connect } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';

// import * as util from './../../lib/util.js';
// import LeagueForm from '../league-form';

// class UserDashboard extends React.Component {
//   constructor(props){
//     super(props);

//   }

//   handleLeagueCreate = league => {
//     return this.props.leagueCreate(league)
//       .then(league => this.props.history.push(`/league/${league._id}`))
//       .catch(util.logError);
//   }

//   render() {

//     return (
//       <div className="user-dashboard">
//         <LeagueForm step={} onComplete={this.handleLeagueCreate}/>
//       </div>
//     );
//   }
// }

// let mapStateToProps = state => ({
//   userAuth: state.userAuth,
//   userprofile: state.userprofile,
// });

// let mapDispatchToProps = dispatch => {
//   return {

//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);