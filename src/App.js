import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from 'components/Projects';
import TechStack from 'components/TechStack';
import Contact from 'components/Contact';
import Socials from 'components/Socials';

function App() {
  return (
    <div className="h-full relative">
      <Hero />
      <div className="h-max text-white mx-auto  my-6 max-w-4xl border border-red-600">
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </div>
      <Socials />
      <div className=' hidden hover:text-[#64FFDA] cursor-pointer stroke2 fixed font-body -bottom-10 lg:block right-4 m-8 origin-bottom-right p-2 rotate-90  text-[#8892B0] text-sm transition ease-in duration-300'>
        <a  rel="noreferrer"
        href="mailto:donaldabuah@gmail.com?subject=Hi Donald"
        target="_blank">donaldabuah@gmail.com</a> 
      </div>
    </div>
  );
}

export default App;
