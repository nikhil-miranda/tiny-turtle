import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/header/Header';
import LoadingSpinner from './components/common/LoadingSpinner';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import DarkMode from './components/darkmode/DarkMode';

// Lazy load components for better performance
const Home = lazy(() => import('./components/home/Home'));
const About = lazy(() => import('./components/about/About'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Achievements = lazy(() => import('./components/achievements/Achievements'));
const Qualifications = lazy(() => import('./components/qualifications/Qualification'));
const Contact = lazy(() => import('./components/contact/Contact'));

const App = () => {
  return (
    <>
      <Header />
      <DarkMode />

      <main className='main'>
        <Suspense fallback={<LoadingSpinner />}>
          <Home />
          <About />
          <Skills />
          <Achievements />
          <Qualifications />
          <Contact />
        </Suspense>
      </main>

      <ScrollToTop />
    </>
  );
};

export default App;
