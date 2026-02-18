import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ProjectsSubNavbar = ({ onProjectSelect, currentProject }) => {
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    { id: 1, name: 'Alferd Enchapados', number: '01' },
    { id: 2, name: 'Gas GP', number: '02' },
    { id: 3, name: 'DG Seguros', number: '03' },
    { id: 4, name: 'Butterhug', number: '04' },
    { id: 5, name: 'Punto Cinco', number: '05' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleProjectClick = (project) => {
    if (onProjectSelect) onProjectSelect(project);
    closeMenu();
  };

  return (
    <>
      {/* ══════════════════════════════════════════
          SUB-NAVBAR — Debajo del navbar principal
      ══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="fixed left-0 right-0 z-40 bg-[var(--color-parchment)]/95 backdrop-blur-sm shadow-sm"
        style={{ top: 'clamp(56px, 7vw, 88px)' }} // Debajo del navbar principal
      >
        <div className="w-full px-[4vw]">
          <div className="flex justify-between items-center" style={{ height: 'clamp(48px, 6vw, 72px)' }}>

            {/* Título "Proyectos" */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-[family-name:var(--font-display)] italic font-semibold"
              style={{
                fontSize: 'clamp(1.2rem, 2.2vw, 2.5rem)',
                color: 'var(--color-fern)',
                lineHeight: 1,
              }}
            >
              Proyectos
            </motion.h2>

            {/* Botón hamburguesa */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={toggleMenu}
              className="text-[var(--color-fern)] hover:text-[var(--color-pistacho)] transition-colors rounded-lg hover:bg-[var(--color-pistacho)]/10 flex items-center justify-center"
              style={{ padding: 'clamp(6px, 1vw, 12px)' }}
              aria-label="Toggle projects menu"
            >
              {isOpen
                ? <X style={{ width: 'clamp(20px, 3vw, 36px)', height: 'clamp(20px, 3vw, 36px)' }} />
                : <Menu style={{ width: 'clamp(20px, 3vw, 36px)', height: 'clamp(20px, 3vw, 36px)' }} />
              }
            </motion.button>

          </div>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════
          OVERLAY — Lista de proyectos pantalla completa
      ══════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-39 backdrop-blur-lg"
            style={{
              background: 'linear-gradient(135deg, var(--color-parchment) 0%, rgba(186,221,127,0.15) 50%, rgba(242,151,160,0.15) 100%)',
            }}
          >
            <div className="h-full flex items-center justify-center px-[6vw]">
              <div className="w-full max-w-5xl">

                {/* Lista de proyectos */}
                <nav className="space-y-[2vw]">
                  {projects.map((project, index) => (
                    <motion.button
                      key={project.id}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ delay: index * 0.08, duration: 0.35 }}
                      onClick={() => handleProjectClick(project)}
                      className="w-full group flex items-center gap-[3vw] text-left relative"
                    >
                      {/* Número pequeño a la izquierda */}
                      <span
                        className="font-[family-name:var(--font-accent)] font-bold text-[var(--color-fern)]/40 group-hover:text-[var(--color-pistacho)] transition-colors flex-shrink-0"
                        style={{ fontSize: 'clamp(1rem, 1.8vw, 2rem)' }}
                      >
                        {project.number}
                      </span>

                      {/* Nombre del proyecto */}
                      <h3
                        className="font-[family-name:var(--font-display)] text-[var(--color-melon)] group-hover:text-[var(--color-fern)] transition-colors italic leading-none flex-1"
                        style={{ fontSize: 'clamp(2rem, 5.5vw, 6.5rem)' }}
                      >
                        {project.name}
                      </h3>

                      {/* Círculo decorativo a la derecha */}
                      <motion.div
                        className="w-[clamp(40px,5vw,80px)] h-[clamp(40px,5vw,80px)] rounded-full bg-[var(--color-pistacho)]/20 group-hover:bg-[var(--color-pistacho)]/40 transition-all flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Línea inferior decorativa */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-pistacho)] to-[var(--color-melon)] origin-left"
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
