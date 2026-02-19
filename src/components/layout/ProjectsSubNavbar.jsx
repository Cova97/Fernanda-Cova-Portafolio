import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ProjectsSubNavbar = ({ onProjectSelect, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    { 
      id: 1, 
      name: 'Alferd Enchapados', 
      number: '01',
      logo: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/SUBMENU/ICONOS-04.svg',
      numberPosition: 'left' // Número a la izquierda
    },
    { 
      id: 2, 
      name: 'Gas GP', 
      number: '02',
      logo: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/SUBMENU/ICONOS-05.svg',
      numberPosition: 'right' // Número a la derecha
    },
    { 
      id: 3, 
      name: 'DG Seguros', 
      number: '03',
      logo: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/SUBMENU/ICONOS-06.svg',
      numberPosition: 'left' // Número a la izquierda
    },
    { 
      id: 4, 
      name: 'Butterhug', 
      number: '04',
      logo: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/SUBMENU/ICONOS-07.svg',
      numberPosition: 'right' // Número a la derecha
    },
    { 
      id: 5, 
      name: 'Punto Cinco', 
      number: '05',
      logo: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/SUBMENU/ICONOS-08.svg',
      numberPosition: 'left' // Número a la izquierda
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (onNavigate) onNavigate('home');
  };

  const handleProjectClick = (project) => {
    if (onProjectSelect) onProjectSelect(project);
    closeMenu();
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-parchment)]/97 backdrop-blur-sm"
        style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.07)' }}
      >
        <div className="w-full px-[4vw]">
          <div className="flex justify-between items-center" style={{ height: 'clamp(72px, 9vw, 110px)' }}>
            
            {/* Logo */}
            <motion.button
              onClick={handleLogoClick}
              className="cursor-pointer leading-none flex items-center"
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: 'clamp(8px, 1.2vw, 16px)' }}
              aria-label="Toggle projects menu"
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
              background: 'linear-gradient(135deg, var(--color-parchment) 0%, rgba(186,221,127,0.15) 50%, rgba(242,151,160,0.15) 100%)',
            }}
          >
            <div className="h-full flex items-center justify-center px-[6vw] pt-[12vh]">
              <div className="w-full max-w-6xl">

                <nav className="space-y-[3vw]">
                  {projects.map((project, index) => (
                    <motion.button
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ delay: index * 0.08, duration: 0.35 }}
                      onClick={() => handleProjectClick(project)}
                      className="w-full group flex items-center justify-center gap-[3vw] text-center relative"
                    >
                      {/* Número a la izquierda (solo en posiciones impares: 0, 2, 4) */}
                      {project.numberPosition === 'left' && (
                        <span
                          className="font-[family-name:var(--font-accent)] font-bold text-[var(--color-melon)]/50 group-hover:text-[var(--color-melon)] transition-colors flex-shrink-0 order-1"
                          style={{ fontSize: 'clamp(1.2rem, 2vw, 2.5rem)' }}
                        >
                          {project.number}
                        </span>
                      )}

                      {/* Nombre del proyecto - siempre centrado */}
                      <h3
                        className="font-[family-name:var(--font-display)] text-[var(--color-melon)] group-hover:text-[var(--color-fern)] transition-colors italic leading-none order-2"
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 8rem)' }}
                      >
                        {project.name}
                      </h3>

                      {/* Número a la derecha (solo en posiciones pares: 1, 3) */}
                      {project.numberPosition === 'right' && (
                        <span
                          className="font-[family-name:var(--font-accent)] font-bold text-[var(--color-melon)]/50 group-hover:text-[var(--color-melon)] transition-colors flex-shrink-0 order-3"
                          style={{ fontSize: 'clamp(1.2rem, 2vw, 2.5rem)' }}
                        >
                          {project.number}
                        </span>
                      )}

                      {/* Logo circular - más separado del texto */}
                      <motion.div
                        className="w-[clamp(50px,6vw,100px)] h-[clamp(50px,6vw,100px)] rounded-full bg-[var(--color-pistacho)]/20 group-hover:bg-[var(--color-pistacho)]/40 transition-all flex-shrink-0 flex items-center justify-center p-3 absolute"
                        style={{ 
                          [project.numberPosition === 'left' ? 'right' : 'left']: 'clamp(-30px, -2vw, -10px)'
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={project.logo} 
                          alt={project.name}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>

                      {/* Línea inferior al hacer hover */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-pistacho)] to-[var(--color-melon)] origin-center"
                        transition={{ duration: 0.4 }}
                      />
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

export default ProjectsSubNavbar;