import React, { useEffect } from 'react';
import './App.css';
import Intro from './components/ez-Intro';
import SubHead from './components/ez-sub-head';
import Logo from './components/ez-Logo';
import Contact from './components/ez-Contact';
import Function from './components/ez-Functions';
import Icon1 from './components/Icons/Presentation/Research@4x.png';
import Icon2 from './components/Icons/Visual/Research@4x.png';
import Icon3 from './components/Icons/Translation/Research@4x.png';
import Icon4 from './components/Icons/Graphic/Research@4x.png';
import Icon5 from './components/Icons/Research/Research@4x.png';
import Icon6 from './components/Icons/Data/Research@4x.png';

function App() {
  const checkScreenWidth = () => {
    const width = window.innerWidth;
    const parentDiv = document.getElementById('parentDiv');
    const independentDiv = document.getElementById('independentDiv');

    if (parentDiv && independentDiv) {
      if (width < 1400) {
        parentDiv.appendChild(independentDiv);
      } else {
        const App = document.getElementById('App');
        App.appendChild(independentDiv);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  useEffect(() => {
    checkScreenWidth();
  }, []);

  return (
    <div className='App' id='App'>
      <div className='left'>
        <Logo />
        <SubHead />
        <Intro />
        <div id='parentDiv'></div>
        <Contact />
      </div>
      <div className='Functions' id='independentDiv'>
        <div className='row'>
          <Function logo={Icon1} heading="Presentation Design" />
          <Function logo={Icon2} heading="Audio-Visual Production" />
          <Function logo={Icon3} heading="Translation Service" />
          <Function logo={Icon4} heading="Graphic Design" />
          <Function logo={Icon5} heading="Research & Analytics" />
          <Function logo={Icon6} heading="Data Processing" />
        </div>
      </div>
    </div>
  );
}

export default App;
