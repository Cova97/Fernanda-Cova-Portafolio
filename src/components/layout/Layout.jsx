import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, onResetToIntro, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onResetToIntro={onResetToIntro} onNavigate={onNavigate} />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;