import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, onResetToIntro, onNavigate, currentView }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onResetToIntro={onResetToIntro} onNavigate={onNavigate} currentView={currentView} />
      <main className="flex-grow" style={{ paddingTop: 'clamp(56px, 7vw, 88px)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;