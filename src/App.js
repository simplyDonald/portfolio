import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from 'components/Projects';
import TechStack from 'components/TechStack';
import Contact from 'components/Contact';
import Socials from 'components/Socials';
import Mail from 'components/Mail';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="h-full relative">
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
