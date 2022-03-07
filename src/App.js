import './App.css';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="app-con">
        <Hero />
      <div className='appsub-con container mx-auto'>
        <About />
      </div>
    </div>
  );
}

export default App;
