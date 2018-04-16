import React from 'react';

let Icon = props => {
  let data = require(`./../assets/icons/${props.name}.icon.svg`);
  let innerHtml = {__html: data};
  return (
    <div 
      className={props.className || ''}
      dangerouslySetInnerHTML={innerHtml}></div>
  );
};

export default Icon;