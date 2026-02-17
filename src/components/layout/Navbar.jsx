import { useState } from 'react';
import { Menu, X, Home, User, Briefcase, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = ({ onResetToIntro, onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isAbout = currentView === 'about';

  const navLinks = [
    { name: 'Home',      icon: Home,      section: 'home'     },
    { name: 'Sobre mí',  icon: User,      section: 'about'    },
    { name: 'Servicios', icon: Settings,  section: 'services' },
    { name: 'Proyectos', icon: Briefcase, section: 'projects' },
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
        className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
        animate={{
          backgroundColor: isAbout ? '#f297a0' : 'rgba(247,239,218,0.97)',
          boxShadow: isAbout
            ? '0 2px 20px rgba(242,151,160,0.25)'
            : '0 1px 8px rgba(0,0,0,0.07)',
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full px-[4vw]">
          {/* Fila superior: logo + hamburguesa — nunca cambian */}
          <div className="flex justify-between items-center" style={{ height: 'clamp(56px, 7vw, 88px)' }}>
            <motion.button
              onClick={handleLogoClick}
              className="font-[family-name:var(--font-display)] cursor-pointer leading-none"
              animate={{ color: isAbout ? '#f7efda' : '#3e8440' }}
              transition={{ duration: 0.4 }}
              style={{ fontSize: 'clamp(1.4rem, 2.8vw, 3rem)' }}
            >
              Portfolio
            </motion.button>

            <motion.button
              onClick={toggleMenu}
              className="rounded-lg flex items-center justify-center"
              animate={{ color: isAbout ? '#f7efda' : '#3e8440' }}
              transition={{ duration: 0.4 }}
              style={{ padding: 'clamp(6px, 1vw, 14px)' }}
              aria-label="Toggle menu"
            >
              {isOpen
                ? <X    style={{ width: 'clamp(24px, 3.5vw, 44px)', height: 'clamp(24px, 3.5vw, 44px)' }} />
                : <Menu style={{ width: 'clamp(24px, 3.5vw, 44px)', height: 'clamp(24px, 3.5vw, 44px)' }} />
              }
            </motion.button>
          </div>

          {/* Título "Sobre mí" — se despliega solo en About */}
          <motion.div
            initial={false}
            animate={{
              height: isAbout ? 'clamp(55px, 7.5vw, 100px)' : '0px',
              opacity: isAbout ? 1 : 0,
              marginBottom: isAbout ? 'clamp(8px, 1.2vw, 16px)' : '0px',
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.h1
              animate={{ y: isAbout ? 0 : 16 }}
              transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-[family-name:var(--font-display)] font-semibold italic"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 6rem)',
                color: 'var(--color-parchment)',
                lineHeight: 1,
              }}
            >
              Sobre mí
            </motion.h1>
          </motion.div>
        </div>
      </motion.nav>

      {/* OVERLAY menú */}
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
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.button
                        key={link.name}
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ delay: index * 0.08, duration: 0.35 }}
                        onClick={() => handleLinkClick(link)}
                        className="w-full group flex items-center gap-[2.5vw] text-left"
                      >
                        <div
                          className="flex-shrink-0 rounded-full bg-[var(--color-pistacho)]/20 flex items-center justify-center group-hover:bg-[var(--color-pistacho)]/40 transition-all group-hover:scale-110"
                          style={{ width: 'clamp(48px, 6vw, 88px)', height: 'clamp(48px, 6vw, 88px)' }}
                        >
                          <Icon
                            className="text-[var(--color-fern)] group-hover:text-[var(--color-pistacho)] transition-colors"
                            style={{ width: 'clamp(22px, 2.8vw, 42px)', height: 'clamp(22px, 2.8vw, 42px)' }}
                          />
                        </div>
                        <h3
                          className="font-[family-name:var(--font-display)] text-[var(--color-melon)] group-hover:text-[var(--color-fern)] transition-colors italic leading-none"
                          style={{ fontSize: 'clamp(2.2rem, 6vw, 7rem)' }}
                        >
                          {link.name}
                        </h3>
                        <motion.div
                          className="h-[3px] bg-[var(--color-pistacho)] rounded-full flex-shrink-0"
                          initial={{ width: 0 }}
                          whileHover={{ width: '4vw' }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.button>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="mt-[4vw] flex justify-center gap-[3vw]"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 4.5rem)' }}
                >
                  {['🌸', '🌺', '🌼'].map((f, i) => (
                    <motion.span
                      key={i}
                      animate={{ rotate: [0, i % 2 === 0 ? 10 : -10, 0] }}
                      transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
                    >
                      {f}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;