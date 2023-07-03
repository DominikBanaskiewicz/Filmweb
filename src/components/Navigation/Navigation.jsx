import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';
import { Button } from 'components/Button/Button';
export const Navigation = () => {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <nav className={css.nav}>
      <NavLink className={css.navigation__logo} to="/">
        DB
      </NavLink>

      <Button handleClick={handleClick} title="Download CV" />
    </nav>
  );
};
