import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from 'components/Projects';

function App() {
  return (
    <div className="h-full">
      <Hero />
      <div className="h-full text-white mx-auto flex my-6 max-w-4xl border border-red-600">
        <About />
      </div>
      <Projects />
    </div>
  );
}

export default App;
