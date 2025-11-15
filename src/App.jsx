import MainPage from './Components/MainPage/MainPage.jsx'
import {lenis} from './lenis.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className='App'>
      <>
      <MainPage/>
      </>
    </div>
  );
}

export default App;