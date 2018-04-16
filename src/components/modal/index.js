import './_modal.scss';
import React from 'react';
// import UserAuthForm from '../userAuth-form';

class Modal extends React.Component {
  render() {
    return (
      // <section className='modal'>
      //   <button onClick={this.props.close}>X</button>
      //   <main>
      //     {this.props.children}
      //   </main>
      // </section>

      <div className='modal'>
        <div className='modal-overlay' onClick={this.props.close}></div>
        <div className='modal-wrapper'>
          <div className='modal-header'>
            <button className='modal-close' onClick={this.props.close}>X</button>
            <h2 className='modal-heading'>{this.props.heading}</h2>
          </div>
          
          <div className='modal-body'>
            <div className='modal-content'>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;