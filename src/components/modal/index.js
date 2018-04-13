'use strict';

import React from 'react';
// import UserAuthForm from '../userAuth-form';

class Modal extends React.Component {
  render() {
    return (
      <section className='modal'>
        <button onClick={this.props.close}>X</button>
        <main>
          {this.props.children}
        </main>
      </section>
    );
  }
}

export default Modal;