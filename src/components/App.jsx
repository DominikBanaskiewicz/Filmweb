import { Navigation } from './Navigation/Navigation';
import { AboutMe } from './AboutMe/AboutMe';
import { Suspense } from 'react';
import { Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import css from './Header/Header.module.css';
import { ContactMe } from './ContactMe/ContactMe';
import { Technologies } from './Technologies/Technologies';

export const App = () => {
  return (
    <Suspense>
      <div id="react-portal-modal-container" className={css.app}>
        <Navigation></Navigation>
        <Header></Header>
        <ContactMe></ContactMe>
        <Technologies></Technologies>
        <AboutMe></AboutMe>

        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/aboutMe" element={<AboutMe />} /> */}
        </Routes>
      </div>
    </Suspense>
  );
};
