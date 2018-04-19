import React from 'react';
import { Link } from 'react-router-dom';

class JoinSection extends React.Component {
  render() {
    return (
      <div className={`inline-container${this.props.joinType}`}>
        <div className='inner-wrapper'>
          <p className='join-text'>Join a {this.props.joinType}, and invite your friends!           <button className='button join-button'><Link to={`/${this.props.joinType}s`}>Join {this.props.joinType}</Link> </button></p>

        </div>
      </div>
    );
  }
}

export default JoinSection;