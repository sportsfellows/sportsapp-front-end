import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Icon from '../helpers/icons';
import Avatar from '../helpers/avatar';
import * as util from '../../lib/util.js';
import {  signOut  } from '../../actions/userAuth-actions.js';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state={hidden: true};
  }

  // componentWillMount() {
  //   util.userValidation(this.props);
  // }

  handleSignOut = () => {
    this.props.signOut();
    this.props.history.push('/');
  };

  render() {
    let profileImage = this.props.userProfile && this.props.userProfile.image ? <Avatar url={this.props.userProfile.image} /> : <span><i className='fa fa-user colorChangeHover'></i> </span>;
    let profileName = this.props.userProfile && this.props.userProfile.username ? <span className='colorChangeHover nav-userName'> {this.props.userProfile.username} </span>: <span></span>;
    let profileLink = this.props.userProfile && this.props.userProfile._id ? `/user/${this.props.userProfile._id}` : '';
    return (
      <header>
        <nav>
          <div className='logo'>
              <Link to='/' className='link logo-text'><span className='bold pr3'>BRACKET</span><span className='light'>BUSTERS</span></Link>
          </div>
          <ul className='socials'>
            

            <li className='social dropdown'>
              {util.renderIf(this.props.userAuth,
                <div>
                  <div className='avatarDiv' onClick={() => this.setState({ hidden: !this.state.hidden })} >
                    <i className={this.props.userProfile && this.props.userProfile.image ? 'fa fa-caret-down colorChangeHover noTop' : 'fa fa-caret-down colorChangeHover' }></i>
                    {profileImage}
                    {profileName}
                  </div>
                  <div className={ this.state.hidden ? 'hidden dropdownDiv' : 'dropdownDiv' }>
                    <Link to={profileLink} className='link' onClick={() => this.setState({ hidden: !this.state.hidden })}>profile</Link>
                    <Link to='/leagues' className='link' onClick={() => this.setState({ hidden: !this.state.hidden })}>leagues</Link>
                    <Link to='/groups' className='link' onClick={() => this.setState({ hidden: !this.state.hidden })}>groups</Link>
                    <p className='logout link' onClick={this.handleSignOut}>logout</p>
                  </div>
                </div>
              )}
            </li>

            <li className='social facebook'>
                <a id='facebook' href='https://www.facebook.com' rel='noopener noreferrer' target='_blank'>
                <svg className='social-icons' xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' version='1.1'><path d='M297.77 197.22L386.15 197.22 386.15 283.32 297.77 283.32 297.77 484.24 209.38 484.24 209.38 283.32 121 283.32 121 197.22 209.38 197.22 209.38 159.9C209.38 125.46 221.17 82.41 241.79 59.44 265.36 36.48 291.88 25 324.29 25L386.15 25 386.15 111.11 324.29 111.11C309.55 111.11 297.77 122.59 297.77 136.94L297.77 197.22Z'></path></svg>
                </a>
            </li>
            <li className='social twitter'> 
              <a id='twitter' href='https://www.twitter.com' rel='noopener noreferrer' target='_blank'>
              <svg className='social-icons' xmlns='http://www.w3.org/2000/svg' width='512px' height='512px' viewBox='0 0 512 512' version='1.1'><path d='M443.152659 163.439478C443.152659 296.150277 346.165187 449.140808 168.813855 449.140808 114.333931 449.140808 63.6761742 432.519036 21 404.001578 28.5600203 404.938016 36.2184052 405.420867 43.9892068 405.420867 89.208808 405.420867 130.760816 389.355105 163.727001 362.461781 121.556702 361.642398 85.9346728 332.642089 73.6672048 292.75569 79.5409753 293.896974 85.5974228 294.511511 91.7943911 294.511511 100.619099 294.511511 109.148713 293.3117 117.22866 291.029133 73.1051215 281.767177 39.8719467 241.207714 39.8719467 192.527578L39.8719467 191.283872C52.8701229 198.804638 67.7653302 203.325877 83.5458188 203.867255 57.6759351 185.826195 40.6448112 155.128592 40.6448112 120.260915 40.6448112 101.883322 45.380363 84.6177499 53.7132478 69.781063 101.251443 130.561731 172.340927 170.506657 252.465901 174.705996 250.83586 167.34618 249.992735 159.708359 249.992735 151.807164 249.992735 96.3817502 293.14668 51.461998 346.39002 51.461998 374.142883 51.461998 399.197746 63.6064261 416.790953 83.139934 438.740306 78.6186951 459.368763 70.2639138 478.029928 58.7779185 470.82121 82.2034962 455.518492 101.883322 435.620743 114.305756 455.139086 111.862238 473.687834 106.506984 491 98.5033672 478.072084 118.666044 461.729512 136.326676 442.871618 150.446403 443.082399 154.762796 443.152659 159.123085 443.152659 163.439478Z'></path></svg>
              </a>
            </li>
          </ul>
        </nav>
    </header>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
});

let mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);