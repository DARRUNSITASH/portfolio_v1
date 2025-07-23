import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Workshops from './components/Workshops';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <Statistics />
      <About />
      <Education />
      <Skills />
      <Certificates />
      <Workshops />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;