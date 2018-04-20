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
          
          <p className='text create-text'>Create a {this.props.formType} of your own, and invite your friends!</p>
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

// @import "../../../style/lib/vars";

// .component-containerleague, .component-containergroup {
//   padding: 1vw;
//   background: #fff;
//   border: 1px solid $color-lightgray;
//   margin: 20px 0;
//   position: relative;
// }
// .inner-wrapper {
//   padding: 1vw;
// }
// .create-header {
//   border: 1px solid $color-lightgray;
//   border-width: 0 0 1px;
//   padding: 0 0 8px;
//   color: $color-secondary;
//   font-size: 16px;
//   font-weight: 600;
//   line-height: 1.5rem;
//   text-transform: uppercase;
// }
// .create-text {
//   margin-top: 16px;
// }
// .create-button {
//   color: #fff;
//   margin-top: 1rem;
//   width:100%;
//   background: $color-primary;
// }

// @media only screen and (min-width: 768px) {
//   .create-button {
//     bottom: 2vw;
//     position: absolute;
//     right: 1rem;
//     width: auto;
//   }
// }


