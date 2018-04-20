import React from 'react';
import { Link } from 'react-router-dom';

class JoinSection extends React.Component {
  render() {
    return (
      <div className={`container inline-container${this.props.joinType}`}>
        <div className='inner-wrapper'>
          <p className='text center join-text marginBottom20'>Join a {this.props.joinType}, and invite your friends!</p>
          <button className='button create-button'><Link to={`/${this.props.joinType}s`}>Join {this.props.joinType}</Link> </button>
        </div>
      </div>
    );
  }
}

export default JoinSection;