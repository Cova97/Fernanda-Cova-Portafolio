import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Intro = ({ onComplete }) => {
  const [showIntro, setShowIntro] = useState(true);

  // Auto-avanzar después de 8 segundos (opcional)
  useEffect(() => {
    const timer = setTimeout(() => {
      handleContinue();
    }, 8000); // 8 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    setShowIntro(false);
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-[var(--color-fern)] via-[var(--color-pistacho)] to-[var(--color-melon)] flex items-center justify-center overflow-hidden"
        >
          {/* Partículas de fondo animadas */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[var(--color-parchment)]/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
                  x: [null, Math.random() * window.innerWidth],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          {/* Carta de presentación */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="relative z-10 max-w-2xl mx-4"
          >
            {/* Carta */}
            <div className="bg-[var(--color-parchment)] rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Decoración superior */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-pistacho)] via-[var(--color-melon)] to-[var(--color-fern)]" />

              {/* Flores decorativas en las esquinas */}
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4 text-4xl"
              >
                🌸
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-4 left-4 text-4xl"
              >
                🌺
              </motion.div>

              {/* Contenido de la carta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-center"
              >
                {/* Saludo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mb-6"
                >
                  <span className="text-6xl md:text-8xl">👋</span>
                </motion.div>

                {/* Badge de bienvenida */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="mb-6"
                >
                  <span className="inline-block px-6 py-2 bg-[var(--color-pistacho)]/30 rounded-full text-[var(--color-fern)] font-[family-name:var(--font-accent)] text-base">
                    👋 Bienvenido a mi portafolio
                  </span>
                </motion.div>

                {/* Título */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="text-3xl md:text-5xl font-[family-name:var(--font-display)] text-[var(--color-fern)] mb-4"
                >
                  Hola, soy{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-pistacho)] to-[var(--color-fern)]">
                    Fernanda Cova Martínez
                  </span>
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="text-lg md:text-xl font-[family-name:var(--font-accent)] text-[var(--color-pistacho)] mb-6"
                >
                  Desarrollador Full Stack | Diseñador | Creativo
                </motion.p>

                {/* Descripción */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="text-base text-[var(--color-fern)]/70 mb-8 leading-relaxed"
                >
                  Transformo ideas en experiencias digitales memorables. 
                  Especializado en crear soluciones web modernas, elegantes y funcionales.
                </motion.p>

                {/* Línea decorativa */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="h-px bg-gradient-to-r from-transparent via-[var(--color-pistacho)] to-transparent mb-8"
                />

                {/* Botón de continuar */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContinue}
                  className="group px-8 py-4 bg-gradient-to-r from-[var(--color-fern)] to-[var(--color-pistacho)] text-[var(--color-parchment)] rounded-full font-medium shadow-lg transition-all flex items-center gap-2 mx-auto"
                >
                  <span>Explorar Portfolio</span>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </motion.button>

                {/* Texto pequeño */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 0.8 }}
                  className="text-sm text-[var(--color-fern)]/50 mt-6"
                >
                  O espera unos segundos...
                </motion.p>
              </motion.div>
            </div>

            {/* Sombra de la carta */}
            <div className="absolute -bottom-4 left-8 right-8 h-8 bg-[var(--color-fern)]/20 blur-2xl rounded-full" />
          </motion.div>

          {/* Elementos decorativos flotantes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-20 left-20 text-5xl"
          >
            🌼
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-32 right-20 text-5xl"
          >
            🌻
          </motion.div>
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute top-1/2 right-32 text-5xl"
          >
            🌷
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;