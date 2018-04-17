import './_createSection.scss';
import React from 'react';

class CreateSection extends React.Component {
  render() {
    return (
      <div className={`component-container${this.props.formType}`}>
        <div className='inner-wrapper'>
          <p className='create-header'>Create Your Own {this.props.formType}! </p>
          <p className='create-text'>Create a {this.props.formType} of your own and invite your friendss!</p>
          <button className='create-button' onClick={this.props.handleCreate}>Create {this.props.formType} </button>
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