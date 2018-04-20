import React from 'react';
import { Link } from 'react-router-dom';
import * as util from './../../../lib/util.js';

class JoinSection extends React.Component {
  render() {
    let russ = require('./../assets/russ.png');
    let kd = require('./../assets/kd.png');

    return (
      <div className={`container inline-container${this.props.joinType}`}>
        <div className='inner-wrapper'>
          {util.renderIf(!this.props.alreadyJoined && !this.props.joinedAlready,
            <p className='text center join-text marginBottom20'>Join a {this.props.joinType}, and invite your friends!</p>
          )}
          {util.renderIf(this.props.alreadyJoined || this.props.joinedAlready,
            <div>
              <p className='text center join-text marginBottom20'>Be cool and join another {this.props.joinType}, and invite your friends!</p>
              <div className='usersLeagueAndGroups'>
                {util.renderIf(this.props.alreadyJoined,
                  <img className='russ' src={russ} />
                )}
                {util.renderIf(this.props.joinedAlready,
                  <img className='kd' src={kd} />
                )}
              </div>
            </div>
          )}
          <button className='create-button'><Link to={`/${this.props.joinType}s`}>Join {this.props.joinType}</Link> </button>
        </div>
      </div>
    );
  }
}

export default JoinSection;
