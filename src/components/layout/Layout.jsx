import Navbar from './Navbar';
import ProjectsSubNavbar from './ProjectsSubNavbar';
import Footer from './Footer';

const Layout = ({ children, onResetToIntro, onNavigate, currentView, onProjectSelect }) => {
  const isProjects = currentView === 'projects';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mostrar SubNavbar en Proyectos, Navbar en el resto */}
      {isProjects ? (
        <ProjectsSubNavbar onProjectSelect={onProjectSelect} onNavigate={onNavigate} />
      ) : (
        <Navbar onResetToIntro={onResetToIntro} onNavigate={onNavigate} currentView={currentView} />
      )}
      
      <main className="flex-grow" style={{ paddingTop: 'clamp(56px, 7vw, 88px)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;