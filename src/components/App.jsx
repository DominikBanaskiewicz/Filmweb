import { Navigation } from './Navigation/Navigation';
import { AboutMe } from './AboutMe/AboutMe';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import css from './App.module.css';
import { ContactMe } from './ContactMe/ContactMe';
import { Technologies } from './Technologies/Technologies';
import { Element } from 'react-scroll';

export const App = () => {
  return (
    <Suspense>
      <div id="react-portal-modal-container" className={[css.app]}>
        <Navigation></Navigation>
        <Header></Header>
        <Element className={css.AppElement__Container}>
          <ContactMe></ContactMe>
        </Element>

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
