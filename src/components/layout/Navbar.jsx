import { useState } from 'react';
import { Menu, X, Home, User, Briefcase, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = ({ onResetToIntro }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Sobre mí', href: '#about', icon: User },
    { name: 'Servicios', href: '#services', icon: Settings },
    { name: 'Proyectos', href: '#projects', icon: Briefcase },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (onResetToIntro) {
      onResetToIntro();
    }
  };

  const handleLinkClick = (href) => {
    closeMenu();
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  };

  return (
    <>
      {/* Navbar compacto - Siempre visible */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-parchment)]/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <button
                onClick={handleLogoClick}
                className="text-2xl font-[family-name:var(--font-display)] text-[var(--color-fern)] hover:text-[var(--color-pistacho)] transition-colors cursor-pointer"
              >
                Portfolio
              </button>
            </motion.div>

            {/* Hamburger button - Siempre visible */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={toggleMenu}
              className="text-[var(--color-fern)] hover:text-[var(--color-pistacho)] transition-colors p-2 rounded-lg hover:bg-[var(--color-pistacho)]/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Menú overlay - Pantalla completa */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-[var(--color-parchment)] via-[var(--color-pistacho)]/20 to-[var(--color-melon)]/20 backdrop-blur-lg"
          >
            {/* Contenedor centrado del menú */}
            <div className="h-full flex items-center justify-center">
              <div className="w-full max-w-2xl px-8">
                {/* Enlaces del menú */}
                <nav className="space-y-6">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.button
                        key={link.name}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        onClick={() => handleLinkClick(link.href)}
                        className="w-full group flex items-center gap-6 text-left"
                      >
                        {/* Icono */}
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[var(--color-pistacho)]/20 flex items-center justify-center group-hover:bg-[var(--color-pistacho)]/40 transition-all group-hover:scale-110">
                          <Icon 
                            size={32} 
                            className="text-[var(--color-fern)] group-hover:text-[var(--color-pistacho)]"
                          />
                        </div>

                        {/* Texto */}
                        <div className="flex-1">
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] text-[var(--color-melon)] group-hover:text-[var(--color-fern)] transition-colors italic">
                            {link.name}
                          </h3>
                        </div>

                        {/* Indicador decorativo */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileHover={{ width: "3rem" }}
                          className="h-1 bg-[var(--color-pistacho)] rounded-full"
                        />
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Decoración - Flores flotantes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-16 flex justify-center gap-8 text-5xl"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🌸
                  </motion.span>
                  <motion.span
                    animate={{ rotate: [0, -10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    🌺
                  </motion.span>
                  <motion.span
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🌼
                  </motion.span>
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