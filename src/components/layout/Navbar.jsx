import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = ({ onResetToIntro, onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isAbout = currentView === 'about';

  const navLinks = [
    { 
      name: 'Home', 
      icon: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ICONOS%20MENU/ICONOS-13.svg',
      section: 'home' 
    },
    { 
      name: 'Sobre mí', 
      icon: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ICONOS%20MENU/ICONOS-14.svg',
      section: 'about' 
    },
    { 
      name: 'Servicios', 
      icon: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ICONOS%20MENU/ICONOS-15.svg',
      section: 'services' 
    },
    { 
      name: 'Proyectos', 
      icon: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ICONOS%20MENU/ICONOS-16.svg',
      section: 'projects' 
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu  = () => setIsOpen(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (onResetToIntro) onResetToIntro();
  };

  const handleLinkClick = (link) => {
    if (onNavigate) onNavigate(link.section);
    closeMenu();
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: isAbout ? '#f297a0' : 'rgba(247,239,218,0.97)',
          boxShadow: isAbout
            ? '0 2px 20px rgba(242,151,160,0.25)'
            : '0 1px 8px rgba(0,0,0,0.07)',
        }}
      >
        <div className="w-full px-[4vw]">
          <div className="flex justify-between items-center" style={{ height: 'clamp(72px, 9vw, 110px)' }}>
            
            {/* Logo */}
            <motion.button
              onClick={handleLogoClick}
              className="cursor-pointer leading-none flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{ height: 'clamp(52px, 6.5vw, 78px)' }}
            >
              <img
                src="https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/LOGO/LOGO.svg"
                alt="Logo"
                className="h-full w-auto"
              />
            </motion.button>

            {/* Icono hamburguesa personalizado */}
            <motion.button
              onClick={toggleMenu}
              className="rounded-lg flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: 'clamp(8px, 1.2vw, 16px)' }}
              aria-label="Toggle menu"
            >
              <motion.img
                src="https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ICONO%20HAMBURGUESA/ICONOS-17.svg"
                alt="Menu"
                style={{ width: 'clamp(32px, 4.5vw, 56px)', height: 'clamp(32px, 4.5vw, 56px)' }}
                animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-lg"
            style={{
              background: 'linear-gradient(135deg, var(--color-parchment) 0%, rgba(186,221,127,0.2) 50%, rgba(242,151,160,0.2) 100%)',
            }}
          >
            <div className="h-full flex items-center justify-center px-[6vw]">
              <div className="w-full max-w-4xl">
                <nav className="space-y-[2.5vw]">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -60 }}
                      transition={{ delay: index * 0.08, duration: 0.35 }}
                      onClick={() => handleLinkClick(link)}
                      className="w-full group flex items-center justify-between text-left"
                    >
                      {/* Texto a la izquierda */}
                      <h3
                        className="font-[family-name:var(--font-display)] text-[var(--color-melon)] group-hover:text-[var(--color-fern)] transition-colors italic leading-none"
                        style={{ fontSize: 'clamp(2.2rem, 6vw, 7rem)' }}
                      >
                        {link.name}
                      </h3>

                      {/* Icono a la derecha */}
                      <div
                        className="flex-shrink-0 rounded-full bg-[var(--color-pistacho)]/20 flex items-center justify-center group-hover:bg-[var(--color-pistacho)]/40 transition-all group-hover:scale-110"
                        style={{ width: 'clamp(48px, 6vw, 88px)', height: 'clamp(48px, 6vw, 88px)' }}
                      >
                        <img
                          src={link.icon}
                          alt={link.name}
                          className="group-hover:scale-110 transition-transform"
                          style={{ width: 'clamp(24px, 3vw, 48px)', height: 'clamp(24px, 3vw, 48px)' }}
                        />
                      </div>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;