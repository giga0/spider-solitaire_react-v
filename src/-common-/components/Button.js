import React from 'react';
import classes from './Button.module.scss';

function Button(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={ classes.button }
      onClick={ props.click }>
      { props.children }
    </button>
  );
}

export default Button;
