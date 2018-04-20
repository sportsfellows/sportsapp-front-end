import React from 'react';
import * as util from '../../../lib/util.js';

class CreateSection extends React.Component {
  render() {
    let muscles = require('./../assets/muscles.png');
    let holla = require('./../assets/holla.png');
    return (
      <div className={`container component-container${this.props.formType}`}>
        <div className='inner-wrapper'>
          <p className='header create-header'>Create Your Own {this.props.formType}! </p>

          {util.renderIf(this.props.formType === 'league',
            <img className="muscles" src={muscles} />
          )}
          
          <p className='text create-text marginBottom20'>Create a {this.props.formType} of your own, and invite your friends!</p>
          {util.renderIf(this.props.formType === 'group',
            <img className="holla" src={holla} />
          )}  
          <button className='button create-button' onClick={this.props.handleCreate}>Create {this.props.formType} </button>
        </div>
      </div>
    );
  }
}

export default CreateSection;