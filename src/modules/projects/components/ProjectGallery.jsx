import { motion } from 'motion/react';

const ProjectGallery = ({ 
  number, 
  title, 
  strategy, 
  year, 
  location, 
  descriptions = [], 
  mainQuote = '',
  images = [] 
}) => {
  return (
    <div className="min-h-screen bg-[var(--color-parchment)] px-[3vw] py-[8vw]">
      <div className="max-w-[95vw] mx-auto space-y-8">
        
        {/* SECCIÓN 1: Info izquierda + Primera imagen derecha (50/50) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Columna izquierda - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Número */}
            <span className="font-[family-name:var(--font-accent)] font-bold text-[var(--color-melon)]/50 text-[clamp(1rem,1.4vw,1.6rem)] block">
              {number}
            </span>

            {/* Título */}
            <h1
              className="font-[family-name:var(--font-display)] font-semibold italic text-[var(--color-melon)]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5rem)', lineHeight: 0.95 }}
            >
              {title}
            </h1>

            {/* Info */}
            <div className="space-y-3 pt-2">
              {strategy && (
                <div>
                  <p className="font-[family-name:var(--font-sans)] font-semibold text-[var(--color-fern)] text-[clamp(0.85rem,1vw,1.15rem)]">
                    Estrategia
                  </p>
                  <p className="font-[family-name:var(--font-sans)] text-[var(--color-fern)] text-[clamp(0.8rem,0.95vw,1.1rem)]">
                    {strategy}
                  </p>
                </div>
              )}
              
              {year && (
                <div>
                  <p className="font-[family-name:var(--font-sans)] font-semibold text-[var(--color-fern)] text-[clamp(0.85rem,1vw,1.15rem)]">
                    Año
                  </p>
                  <p className="font-[family-name:var(--font-sans)] text-[var(--color-fern)] text-[clamp(0.8rem,0.95vw,1.1rem)]">
                    {year}
                  </p>
                </div>
              )}

              {location && (
                <div>
                  <p className="font-[family-name:var(--font-sans)] font-semibold text-[var(--color-fern)] text-[clamp(0.85rem,1vw,1.15rem)]">
                    Lugar
                  </p>
                  <p className="font-[family-name:var(--font-sans)] text-[var(--color-fern)] text-[clamp(0.8rem,0.95vw,1.1rem)]">
                    {location}
                  </p>
                </div>
              )}
            </div>

            {/* Descripciones */}
            <div className="space-y-3 pt-2">
              {descriptions.map((desc, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="font-[family-name:var(--font-sans)] text-[var(--color-fern)]/80 text-[clamp(0.8rem,0.95vw,1.1rem)] leading-relaxed"
                >
                  {desc}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Columna derecha - Primera imagen grande (ALFERD-29) con blur y hover */}
          {images[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full overflow-hidden rounded-xl group"
            >
              <img
                src={images[0]}
                alt={`${title} - Principal`}
                className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                style={{ filter: 'blur(0.5px)', willChange: 'transform, filter' }}
                onMouseEnter={(e) => e.target.style.filter = 'blur(0px)'}
                onMouseLeave={(e) => e.target.style.filter = 'blur(0.5px)'}
              />
            </motion.div>
          )}
        </div>

        {/* SECCIÓN 2: Imagen ancha (ALFERD-30) con blur y hover */}
        {images[1] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full overflow-hidden rounded-xl group"
          >
            <img
              src={images[1]}
              alt={`${title} - Imagen 2`}
              className="w-full h-auto transition-all duration-500 group-hover:scale-105"
              style={{ filter: 'blur(0.5px)', willChange: 'transform, filter' }}
              onMouseEnter={(e) => e.target.style.filter = 'blur(0px)'}
              onMouseLeave={(e) => e.target.style.filter = 'blur(0.5px)'}
            />
          </motion.div>
        )}

        {/* SECCIÓN 3: Imagen pequeña izquierda (ALFERD-31) + Quote derecha */}
        {mainQuote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 items-center"
          >
            {/* Imagen pequeña con blur y hover */}
            {images[2] && (
              <div className="overflow-hidden rounded-xl group">
                <img
                  src={images[2]}
                  alt={`${title} - Detalle`}
                  className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                  style={{ filter: 'blur(0.5px)', willChange: 'transform, filter' }}
                  onMouseEnter={(e) => e.target.style.filter = 'blur(0px)'}
                  onMouseLeave={(e) => e.target.style.filter = 'blur(0.5px)'}
                />
              </div>
            )}

            {/* Quote */}
            <h2
              className="font-[family-name:var(--font-display)] font-semibold italic text-[var(--color-melon)] leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 3.8vw, 4.5rem)' }}
            >
              {mainQuote}
            </h2>
          </motion.div>
        )}

        {/* SECCIÓN 4: Imagen ancha (ALFERD-32) con blur y hover */}
        {images[3] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full overflow-hidden rounded-xl group"
          >
            <img
              src={images[3]}
              alt={`${title} - Imagen 4`}
              className="w-full h-auto transition-all duration-500 group-hover:scale-105"
              style={{ filter: 'blur(0.5px)', willChange: 'transform, filter' }}
              onMouseEnter={(e) => e.target.style.filter = 'blur(0px)'}
              onMouseLeave={(e) => e.target.style.filter = 'blur(0.5px)'}
            />
          </motion.div>
        )}

        {/* SECCIÓN 5: Grid 2 columnas (ALFERD-33 y ALFERD-34) con blur y hover */}
        {images[4] && images[5] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="overflow-hidden rounded-xl group">
              <img
                src={images[4]}
                alt={`${title} - Imagen 5`}
                className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                style={{ filter: 'blur(0.5px)', willChange: 'transform, filter' }}
                onMouseEnter={(e) => e.target.style.filter = 'blur(0px)'}
                onMouseLeave={(e) => e.target.style.filter = 'blur(0.5px)'}
              />
            </div>
            <div className="overflow-hidden rounded-xl group">
              <img
                src={images[5]}
                alt={`${title} - Imagen 6`}
                className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                style={{ filter: 'blur(0.5px)', willChange: 'transform, filter' }}
                onMouseEnter={(e) => e.target.style.filter = 'blur(0px)'}
                onMouseLeave={(e) => e.target.style.filter = 'blur(0.5px)'}
              />
            </div>
          </motion.div>
        )}

        {/* SECCIÓN 6: Imagen ancha final (ALFERD-35) con blur y hover */}
        {images[6] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full overflow-hidden rounded-xl group"
          >
            <img
              src={images[6]}
              alt={`${title} - Imagen 7`}
              className="w-full h-auto transition-all duration-500 group-hover:scale-105"
              style={{ filter: 'blur(0.5px)', willChange: 'transform, filter' }}
              onMouseEnter={(e) => e.target.style.filter = 'blur(0px)'}
              onMouseLeave={(e) => e.target.style.filter = 'blur(0.5px)'}
            />
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default ProjectGallery;