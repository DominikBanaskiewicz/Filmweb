import React from 'react';

import css from '../Header/Header.module.css';

export const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.container}>
        <div className={css.header__dataContainer}>
          <div className={css.dataContainer__label}>
            <h2>Dominik Banaśkiewicz</h2>
            <h3> frontend developer</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              veritatis praesentium aliquid quia dignissimos quis expedita ex
              eum illo nostrum recusandae ad, fuga explicabo quisquam numquam
              dolorum incidunt magni sunt.
            </p>
          </div>
          <div className={css.dataContainer__img}>
            <img
              className={css.dataContainer__img}
              src={require('../../images/IMG_20220421_221813 — kopia (2).jpg')}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
