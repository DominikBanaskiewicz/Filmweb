import React from 'react';
import css from './Button.module.css';

export const Button = ({ handleClick, title }) => {
  return (
    <button className={css.button} onClick={handleClick}>
      {title}
    </button>
  );
};
