import { useState } from 'react';
import { motion } from 'motion/react';
import ProjectsSubNavbar from '../../components/layout/ProjectsSubNavbar';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const projectsData = {
    1: { name: 'Alferd Enchapados', description: 'Proyecto de enchapados y revestimientos de alta calidad.' },
    2: { name: 'Gas GP', description: 'Soluciones integrales en distribución de gas.' },
    3: { name: 'DG Seguros', description: 'Servicios de seguros personalizados.' },
    4: { name: 'Butterhug', description: 'Marca de repostería artesanal.' },
    5: { name: 'Punto Cinco', description: 'Estudio creativo multidisciplinario.' },
  };

  const handleProjectSelect = (project) => {
    setCurrentProject(project.id);
  };

  return (
    <div id="projects" className="relative min-h-screen bg-[var(--color-parchment)]">
      
      <ProjectsSubNavbar 
        onProjectSelect={handleProjectSelect} 
        currentProject={currentProject}
      />

      <div 
        className="px-[6vw] py-[6vw] flex items-center justify-center"
        style={{ 
          minHeight: '100vh',
          paddingTop: 'calc(clamp(56px, 7vw, 88px) + clamp(48px, 6vw, 72px) + 3vw)'
        }}
      >
        
        {currentProject ? (
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl w-full"
          >
            <h2
              className="font-[family-name:var(--font-display)] font-semibold italic mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', color: 'var(--color-fern)', lineHeight: 1 }}
            >
              {projectsData[currentProject].name}
            </h2>
            
            <p
              className="font-[family-name:var(--font-sans)] mb-12"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.8rem)', color: 'var(--color-fern)', lineHeight: 1.6 }}
            >
              {projectsData[currentProject].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="aspect-video bg-[#d4d0c8] rounded-xl flex items-center justify-center"
                >
                  <span className="text-[#a09a90] text-sm font-[family-name:var(--font-sans)]">
                    Imagen {i}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center max-w-3xl"
          >
            <h2
              className="font-[family-name:var(--font-display)] font-semibold italic mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 9rem)', color: 'var(--color-fern)', lineHeight: 1 }}
            >
              Proyectos
            </h2>
            
            <p
              className="font-[family-name:var(--font-sans)] mb-8"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.8rem)', color: 'var(--color-fern)', lineHeight: 1.6 }}
            >
              Selecciona un proyecto del menú para ver los detalles.
            </p>

            <div className="text-6xl">🌼</div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default Projects;