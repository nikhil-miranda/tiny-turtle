import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Achievements from './components/achievements/Achievements';
import Qualifications from './components/qualifications/Qualification';
import Recommendations from './components/recommendations/Recommendations';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Achievements />
        <Qualifications />
        {/* <Recommendations /> */}
        <Contact />
      </main>

    </>
  );
};

export default App;
