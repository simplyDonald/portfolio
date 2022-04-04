import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from 'components/Projects';
import TechStack from 'components/TechStack';
import Contact from 'components/Contact';

function App() {
  return (
    <div className="h-full">
      <Hero />
      <div className="h-max text-white mx-auto  my-6 max-w-4xl border border-red-600">
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </div>
    </div>
  );
}

export default App;
