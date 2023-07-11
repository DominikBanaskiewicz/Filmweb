import { AboutMe } from './AboutMe/AboutMe';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import css from './App.module.css';

import { Technologies } from './Technologies/Technologies';
import { Element } from 'react-scroll';

export const App = () => {
  return (
    <Suspense>
      <div id="react-portal-modal-container" className={[css.app]}>
        <div className={css.AppElement__Container}>
          <Header></Header>
        </div>
        <Element className={css.AppElement__Container}></Element>

        <Element className={css.AppElement__Container} name="technologies">
          <Technologies></Technologies>
        </Element>
        <Element className={css.AppElement__Container} name="my-projects">
          <AboutMe></AboutMe>
        </Element>
      </div>
    </Suspense>
  );
};
