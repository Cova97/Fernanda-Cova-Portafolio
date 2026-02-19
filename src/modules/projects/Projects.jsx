import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const Projects = ({ selectedProject }) => {
  const [currentProject, setCurrentProject] = useState(selectedProject);

  useEffect(() => {
    if (selectedProject) {
      setCurrentProject(selectedProject);
    }
  }, [selectedProject]);

  if (!currentProject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-parchment)]">
        <p className="text-[var(--color-fern)] text-2xl font-[family-name:var(--font-sans)]">
          Selecciona un proyecto
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-parchment)] px-[6vw] py-[8vw]">
      <motion.div
        key={currentProject.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Número del proyecto */}
        <motion.span
          className="font-[family-name:var(--font-accent)] font-bold text-[var(--color-fern)]/40 block mb-4"
          style={{ fontSize: 'clamp(1.2rem, 2vw, 2.5rem)' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {currentProject.number}
        </motion.span>

        {/* Título del proyecto */}
        <motion.h1
          className="font-[family-name:var(--font-display)] font-semibold italic text-[var(--color-melon)] mb-12"
          style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', lineHeight: 1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {currentProject.name}
        </motion.h1>

        {/* Contenido del proyecto - placeholder por ahora */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="aspect-square bg-[#d4d0c8]/30 rounded-xl" />
          <div className="aspect-square bg-[#d4d0c8]/30 rounded-xl" />
          <div className="aspect-video md:col-span-2 bg-[#d4d0c8]/30 rounded-xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;