import React from 'react';

const Button = (props) => {
  const { textOnly = false } = props;
  const buttonClass = textOnly ? 'text-button' : 'button'; 

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button; 
