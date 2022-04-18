import React from 'react';
import './Button.css';

const Button = ({ value, className, onClick }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {value}
  </button>
);

export default Button;