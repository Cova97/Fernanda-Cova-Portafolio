import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, onResetToIntro }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onResetToIntro={onResetToIntro} />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;