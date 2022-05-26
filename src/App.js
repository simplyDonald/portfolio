import './App.css';
import useListeners from 'hooks/useListeners';
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
  
  const {isOpen, toggler} = useListeners();                                 
  



  return (
    <div className="h-full relative">
      <AnimatePresence >
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
      <div className="hidden fixed bottom-0 lg:block left-4 ">
        <Socials />
      </div>
      <Mail />
      
      
    </div>
  );
}

export default App;
