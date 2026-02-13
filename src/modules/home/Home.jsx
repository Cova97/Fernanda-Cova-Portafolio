import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-parchment to-pistacho/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Saludo animado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-pistacho/30 rounded-full text-fern font-accent text-sm mb-4">
              👋 Bienvenido a mi portafolio
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display text-fern mb-6"
          >
            Hola, soy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pistacho to-fern">
              Tu Nombre
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-fern/80 mb-8 max-w-2xl mx-auto font-accent"
          >
            Desarrollador Full Stack | Diseñador | Creativo
          </motion.p>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-fern/70 mb-12 max-w-3xl mx-auto"
          >
            Transformo ideas en experiencias digitales memorables. 
            Especializado en crear soluciones web modernas, elegantes y funcionales.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-fern text-parchment rounded-lg font-medium hover:bg-fern/90 transition-all transform hover:scale-105 shadow-lg"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-pistacho text-fern rounded-lg font-medium hover:bg-pistacho/90 transition-all transform hover:scale-105"
            >
              Contactar
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-20"
          >
            <a
              href="#about"
              className="inline-flex flex-col items-center text-fern/60 hover:text-fern transition-colors"
            >
              <span className="text-sm mb-2 font-accent">Scroll para más</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={24} />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
