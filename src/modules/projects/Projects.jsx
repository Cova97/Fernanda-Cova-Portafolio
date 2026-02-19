import { useEffect, useState, lazy, Suspense } from 'react';

// Lazy load de cada proyecto
const AlferdEnchapados = lazy(() => import('./pages/AlferdEnchapados'));
const GasGP = lazy(() => import('./pages/GasGP'));
const DGSeguros = lazy(() => import('./pages/DGSeguros'));
const Butterhug = lazy(() => import('./pages/Butterhug'));
const PuntoCinco = lazy(() => import('./pages/PuntoCinco'));
// Placeholder para los demás proyectos
const ComingSoon = ({ projectName }) => (
  <div className="min-h-screen flex items-center justify-center bg-[var(--color-parchment)]">
    <div className="text-center">
      <h2 className="font-[family-name:var(--font-display)] text-[var(--color-melon)] text-6xl italic mb-4">
        {projectName}
      </h2>
      <p className="font-[family-name:var(--font-sans)] text-[var(--color-fern)] text-xl">
        Próximamente...
      </p>
    </div>
  </div>
);

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

  // Renderizar el proyecto correspondiente
  const renderProject = () => {
    switch (currentProject.id) {
      case 1:
        return <AlferdEnchapados />;
      case 2:
        return <GasGP />;
      case 3:
        return <DGSeguros />;
      case 4:
        return <Butterhug />;
      case 5:
        return <PuntoCinco />;
      default:
        return <ComingSoon projectName={currentProject.name} />;
    }
  };

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-parchment)]">
        <span className="text-6xl animate-spin">🌸</span>
      </div>
    }>
      {renderProject()}
    </Suspense>
  );
};

export default Projects;