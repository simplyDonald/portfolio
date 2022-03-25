import './App.css';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="app-con">
        <Hero />
      <div className=' h-full text-white mx-auto flex my-6 max-w-4xl border border-red-600'>
        <About />
      </div>
    </div>
  );
}

export default App;
