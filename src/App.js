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
import SideMenu from 'components/SideMenu';


function App() {
  const [isOpen, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggler = () => setOpen(!isOpen);
  
  useEffect(() => {
    //detect & record screensize
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    //hide scrollbar for modal bg
    if (isOpen) {
      document.body.classList.add("scroll-hide");
    }

    //toggle modal open state using screensize
    if((screenWidth > 1023) && (isOpen === true)){
      toggler();
    }
    return () => {
        window.removeEventListener('resize', changeWidth);
        document.body.classList.remove("scroll-hide");
    }

  }, [isOpen,screenWidth])

  



  return (
    <div className={isOpen ? "h-full overflow-hidden relative" : "h-full"}>
      
      {(isOpen) && <SideMenu toggle={toggler} />}   

        <Hero track={isOpen} toggle={toggler} />
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
