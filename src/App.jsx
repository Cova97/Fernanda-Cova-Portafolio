import { useState, lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';
import Intro from './modules/intro/Intro';
import Home from './modules/home/Home';
import './styles/index.css';

// Carga lazy — solo se importan cuando se navega a ellas
const About    = lazy(() => import('./modules/about/About'));
const Projects = lazy(() => import('./modules/projects/Projects'));
const Services = lazy(() => import('./modules/services/Services'));

// Mapa de secciones disponibles
const SECTIONS = { home: 'home', about: 'about', projects: 'projects', services: 'services' };

function App() {
  const [showIntro, setShowIntro]     = useState(true);
  const [currentView, setCurrentView] = useState(SECTIONS.home);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setCurrentView(SECTIONS.home);
    window.scrollTo({ top: 0 });
  };

  const handleResetToIntro = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0 });
  };

  // Navega a una sección (cambia la vista activa)
  const handleNavigate = (section) => {
    setCurrentView(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showIntro) {
    return <Intro onComplete={handleIntroComplete} />;
  }

  return (
    <Layout onResetToIntro={handleResetToIntro} onNavigate={handleNavigate} currentView={currentView}>
      {/* Cada vista se monta/desmonta de forma independiente */}
      {currentView === SECTIONS.home && <Home onNavigate={handleNavigate} />}

      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-parchment)]">
          <span className="text-6xl animate-spin">🌸</span>
        </div>
      }>
        {currentView === SECTIONS.about    && <About />}
        {currentView === SECTIONS.projects && <Projects />}
        {currentView === SECTIONS.services && <Services />}
      </Suspense>
    </Layout>
  );
}

export default App;