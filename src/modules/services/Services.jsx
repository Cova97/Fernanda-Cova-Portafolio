import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import AutoCarousel from '../../components/common/AutoCarousel';
import AutoCarousel2 from '../../components/common/AutoCarousel2';

const SplitWords = ({ text, className = '', style = {}, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-10% 0px -10% 0px' });

  return (
    <span ref={ref} className={`inline ${className}`} style={style} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.22em]"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.55, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const PopIcon = ({ delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-8% 0px -8% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      className="w-16 h-16 rounded-full bg-[#d4d0c8] flex-shrink-0"
    />
  );
};

const SECTIONS_DATA = [
  {
    id: 1,
    title: 'Servicios',
    description: 'Sistemas visuales creativos diseñados para perdurar. Explora las soluciones integrales que darán estructura y crecimiento a tu proyecto.',
    type: 'intro',
  },
  {
    id: 2,
    title: 'Servicios',
    type: 'services',
    services: [
      { name: 'Ilustración', items: ['Gráficos decorativos', 'Diseño de personajes', 'Ilustración isométrica', 'Ilustración análoga'] },
      { name: 'Identidad\nde marca', items: ['Diseño de conceptos', 'Identidad visual', 'Papelería', 'Diseño de empaque', 'Merchandising'] },
      { name: 'Diseño\neditorial', items: ['Diseño de libros', 'Diseño de revistas', 'Diseño de catálogos', 'Tipografías'] },
      { name: 'UX/UI', items: ['Desarrollo de apps', 'Desarrollo front-end', 'Desarrollo back-end', 'Experiencias de usuario', 'Análisis de usabilidad'] },
      { name: 'Fotografía', items: ['Dirección creativa', 'Retrato', 'Arquitectura'] },
    ],
  },
  {
    id: 3,
    type: 'carousel',
    carouselImages: [
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%201/_ADS0011.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%201/_ADS0014.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%201/_ADS0024.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%201/_ADS0033.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%201/_ADS0065.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%201/_DSC1436.JPG',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%201/_DSC1438.JPG',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%201/_DSC1453.JPG',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%201/_DSC1459.JPG',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%201/_DSC1461.JPG',
    ],
  },
  {
    id: 4,
    title: 'Clientes',
    type: 'clients',
    clients: [
      { name: 'Cliente 1', identity: 'Identidad X', place: 'Lugar', year: '2024' },
      { name: 'Cliente 2', identity: 'Identidad Y', place: 'Lugar', year: '2023' },
      { name: 'Cliente 3', identity: 'Identidad Z', place: 'Lugar', year: '2024' },
    ],
  },
  {
    id: 5,
    type: 'carousel',
    carouselImages: [
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-01.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-02.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-03.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-03.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-05.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-06.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-07.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-08.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-09.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-10.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-11.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-12.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-13.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-14.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-15.jpg',
    ],
  },
];

const Services = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const goNext = () => setCurrentSection((prev) => Math.min(prev + 1, SECTIONS_DATA.length - 1));
  const goPrev = () => setCurrentSection((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    let timeout;
    const handleWheel = (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (e.deltaY > 0) goNext();
        else goPrev();
      }, 100);
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timeout);
    };
  }, [currentSection]);

  const section = SECTIONS_DATA[currentSection];

  return (
    <div id="services" className="relative min-h-screen bg-[var(--color-parchment)] overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen flex flex-col justify-center px-[6vw] py-[6vw]"
        >

          {section.type === 'intro' && (
            <div className="max-w-4xl">
              <h1
                className="font-[family-name:var(--font-display)] font-semibold italic mb-8"
                style={{ fontSize: 'clamp(3rem, 7vw, 9rem)', color: 'var(--color-fern)', lineHeight: 1, perspective: '600px' }}
              >
                <SplitWords text={section.title} />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-[family-name:var(--font-sans)] max-w-lg"
                style={{ fontSize: 'clamp(1rem, 1.6vw, 1.8rem)', color: 'var(--color-fern)', lineHeight: 1.6 }}
              >
                {section.description}
              </motion.p>
            </div>
          )}

          {section.type === 'services' && (
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[3vw] max-w-6xl">
                {section.services.map((service, i) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex flex-col gap-4"
                  >
                    <PopIcon delay={i * 0.08 + 0.2} />
                    <h3
                      className="font-[family-name:var(--font-accent)] font-bold whitespace-pre-line"
                      style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.3rem)', color: 'var(--color-fern)', lineHeight: 1.2 }}
                    >
                      {service.name}
                    </h3>
                    <ul className="space-y-1 text-[clamp(0.75rem,1vw,1rem)] text-[var(--color-fern)]/75 font-[family-name:var(--font-sans)]">
                      {service.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 + idx * 0.05 + 0.3 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {section.type === 'carousel' && (
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full max-w-[90vw]">
                {section.id === 3 ? (
                  <AutoCarousel images={section.carouselImages} speed={0.25} aspectRatio="video" />
                ) : (
                  <AutoCarousel2 images={section.carouselImages} speed={0.25} aspectRatio="video" />
                )}
              </div>
            </div>
          )}

          {section.type === 'clients' && (
            <div>
              <h2
                className="font-[family-name:var(--font-display)] font-semibold italic mb-12"
                style={{ fontSize: 'clamp(3rem, 7vw, 9rem)', color: 'var(--color-fern)', lineHeight: 1, perspective: '600px' }}
              >
                <SplitWords text={section.title} />
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
                {section.clients.map((client, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="flex flex-col gap-3"
                  >
                    <div className="w-full aspect-square bg-[#d4d0c8] rounded-lg" />
                    <div className="text-sm font-[family-name:var(--font-sans)] text-[var(--color-fern)]">
                      <p className="font-bold">{client.name}</p>
                      <p className="text-[var(--color-pistacho)]">{client.identity}</p>
                      <p>{client.place}</p>
                      <p>{client.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </motion.div>
      </AnimatePresence>

      {currentSection < SECTIONS_DATA.length - 1 && (
        <motion.button
          onClick={goNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-fern)] hover:text-[var(--color-pistacho)] transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          aria-label="Siguiente sección"
        >
          <ChevronDown style={{ width: 'clamp(32px, 4vw, 48px)', height: 'clamp(32px, 4vw, 48px)' }} />
        </motion.button>
      )}

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {SECTIONS_DATA.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSection(i)}
            className="w-2 h-2 rounded-full transition-all"
            style={{
              background: i === currentSection ? 'var(--color-fern)' : 'rgba(62,132,64,0.25)',
              transform: i === currentSection ? 'scale(1.5)' : 'scale(1)',
            }}
            aria-label={`Ir a sección ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Services;