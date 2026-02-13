import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-pistacho)]/10 to-[var(--color-parchment)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] text-[var(--color-fern)] mb-6">
            Sobre Mí
          </h2>
          <div className="text-6xl mb-6">🌺</div>
          <p className="text-lg text-[var(--color-fern)]/70 max-w-2xl mx-auto">
            Esta sección estará lista pronto con información sobre mi experiencia, 
            habilidades y pasión por el desarrollo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
