import './Components/LandingPage'
import './App.css';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import Experience from './Components/Experience'
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />

      <div className='flex flex-col px-8 xl:px-52 pb-8 gap-24 bg-slate-900 text-white '>
        <LandingPage />

        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl'>/ about me</h2>
          <About />
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl'>/ experience</h2>
          <Experience />
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl'>/ projects</h2>
          <Projects />
        </div>

        <p className='text-center'>Created and designed by Ashton Franklin</p>
      </div>

    </div>
  );
}

export default App;
