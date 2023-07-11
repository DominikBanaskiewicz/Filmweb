import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.scss';

import { scroller } from 'react-scroll';

export const Navigation = () => {
  const scrolto = element => {
    scroller.scrollTo(`${element}`, {
      smooth: true,
      offset: -70,
      duration: 500,
    });
  };
  return (
    <nav className={css.nav}>
      <NavLink
        className={css.navigation__logo}
        onClick={() => {
          scrolto('aboutMe');
        }}
      >
        DB
      </NavLink>

      <NavLink
        className={css.nav_link}
        onClick={() => {
          scrolto('technologies');
        }}
      >
        Technologies
      </NavLink>
      <NavLink
        className={css.nav_link}
        onClick={() => {
          scrolto('my-projects');
        }}
      >
        My Projects
      </NavLink>

      <NavLink
        className={css.nav_link}
        onClick={() => {
          window.open('https://www.w3schools.com');
        }}
      >
        Download CV
      </NavLink>
    </nav>
  );
};
