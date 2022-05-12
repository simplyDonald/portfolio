import './App.css';
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from 'components/Projects';
import TechStack from 'components/TechStack';
import Contact from 'components/Contact';
import Socials from 'components/Socials';
import Mail from 'components/Mail';
import Footer from 'components/Footer';


function App() {
  const [isOpen, setOpen] = useState(false)

  const toggler = () => setOpen(!isOpen);

  return (
    <div className="h-full relative">
      {isOpen && (<div className="fixed text-black font-extrabold mt-0 h-full w-full bg-white z-10">
        hello
      </div>)}                                        
      <Hero toggle={toggler} />
      <div className="h-max text-white mx-auto  my-6 max-w-4xl">
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </div>
      <Socials />
      <Mail />
      
    </div>
  );
}

export default App;
