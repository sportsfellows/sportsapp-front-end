import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <p>Brian Bixby: 
          <a href="https://github.com/brianbixby" rel="noopener noreferrer" target="_blank"><span><i className="fa fa-github"></i></span> </a>
          <a href="https://www.linkedin.com/in/brianbixby1/" rel="noopener noreferrer" target="_blank"><span><i className="fa fa-linkedin"></i></span></a>
        </p>

        <p>Bessie Arino: 
          <a href="https://github.com/bishang" rel="noopener noreferrer" target="_blank"><span><i className="fa fa-github"></i></span> </a>
          <a href="https://www.linkedin.com/in/bessie-a/" rel="noopener noreferrer" target="_blank"><span><i className="fa fa-linkedin"></i></span></a>
        </p>        
        
        <p>Ken Unterseher: 
          <a href="https://github.com/kennieU" rel="noopener noreferrer" target="_blank"><span><i className="fa fa-github"></i></span> </a>
          <a href="https://www.linkedin.com/in/ken-unterseher/" rel="noopener noreferrer" target="_blank"><span><i className="fa fa-linkedin"></i></span></a>
        </p>
      </footer>
    );
  }
}

export default Footer;