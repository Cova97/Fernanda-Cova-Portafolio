import { useState } from 'react';
import Layout from './components/layout/Layout';
import Intro from './modules/intro/Intro';
import Home from './modules/home/Home';
import About from './modules/about/About';
import Projects from './modules/projects/Projects';
import Services from './modules/services/Services';
import './styles/index.css';

function App() {
  // Siempre empieza mostrando el intro
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Función para resetear y volver al intro
  const handleResetToIntro = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showIntro ? (
        <Intro onComplete={handleIntroComplete} />
      ) : (
        <Layout onResetToIntro={handleResetToIntro}>
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