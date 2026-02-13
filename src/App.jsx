// 

import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import Intro from './modules/intro/Intro';
import Home from './modules/home/Home';
import About from './modules/about/About';
import Projects from './modules/projects/Projects';
import Services from './modules/services/Services';
import './styles/index.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Verificar si ya se mostró el intro en esta sesión
  useEffect(() => {
    const introShown = sessionStorage.getItem('introShown');
    if (introShown === 'true') {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('introShown', 'true');
  };

  return (
    <>
      {showIntro ? (
        <Intro onComplete={handleIntroComplete} />
      ) : (
        <Layout>
          <Home />
          <About />
          <Projects />
          <Services />
        </Layout>
      )}
    </>
  );
}

export default App;