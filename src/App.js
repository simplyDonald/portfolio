import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from 'components/Projects';
import TechStack from 'components/TechStack';
import Contact from 'components/Contact';
import Socials from 'components/Socials';
import Mail from 'components/Mail';
import Footer from 'components/Footer';
import SideMenu from 'components/SideMenu';
import Nav from "components/Nav";
import { AnimatePresence } from "framer-motion";



function App() {
  const [isOpen, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const [pageOffset, setPageOffset] = useState(window.pageYOffset);


  // useCallback prevents re-renders of the useEffect hook every time the function gets defined
  const toggler = useCallback(()=>{setOpen(!isOpen)},[isOpen])
  
  useEffect(() => {
    //detect & record screensize
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    // record scroll position
    // const setOffset = () => {
    //   setPageOffset(window.pageYOffset);
    // }

    // event listeners
    window.addEventListener('resize', changeWidth);
    // window.addEventListener('scroll', setOffset);


    //hide scrollbar for modal bg
    if (isOpen) {
      document.body.classList.add("scroll-hide");
    }

    //toggle modal open state using screensize
    if((screenWidth > 1023) && (isOpen === true)){
      toggler();
    }

    // hide/show navbar on scroll
    const navbar = document.querySelector("nav");
    let lastScroll = 0;
    const scrollFunc = () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll - lastScroll > 0) {
      navbar.classList.add("scroll-down");
      navbar.classList.remove("scroll-up");
    } else {
      // scrolled up -- navbar show
      navbar.classList.add("scroll-up");
      navbar.classList.remove("scroll-down");
    }
    lastScroll = currentScroll;
    }

    window.addEventListener('scroll', scrollFunc);


    // cleanup
    return () => {
        window.removeEventListener('resize', changeWidth);
        // window.removeEventListener('scroll', setOffset);
        window.removeEventListener('scroll', scrollFunc);


        document.body.classList.remove("scroll-hide");
    }

  }, [isOpen,screenWidth, toggler])

  



  return (
    <div className="h-full relative">
      <AnimatePresence>
        {(isOpen) && <SideMenu track={isOpen} toggle={toggler}/>}   

      </AnimatePresence>
      <Nav track={isOpen} toggle={toggler} />
      <Hero />
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
