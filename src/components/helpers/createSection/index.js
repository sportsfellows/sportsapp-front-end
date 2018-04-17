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