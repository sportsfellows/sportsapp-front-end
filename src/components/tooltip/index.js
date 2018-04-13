import './_tooltip.scss';
import React from 'react';
import * as util from '../../lib/util.js';

const Tooltip = props => (
  <div className='tooltip'>
    {util.renderIf(props.message && props.show,
      <section>
        <i className='fa fa-caret-up' />
        <p> {props.message} </p>
      </section>
    )}
  </div>
);

export default Tooltip;