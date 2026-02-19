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

const PopIcon = ({ icon, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-8% 0px -8% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      className="w-20 h-20 rounded-full bg-[#d4d0c8]/30 flex items-center justify-center flex-shrink-0"
    >
      <img 
        src={icon} 
        alt="Icono de servicio"
        className="w-12 h-12 object-contain"
      />
    </motion.div>
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
      { 
        name: 'Ilustración', 
        icon: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ICONO%20HAMBURGUESA/ICONOS-17.svg',
        items: ['Gráficos decorativos', 'Diseño de personajes', 'Ilustración isométrica', 'Ilustración análoga'] 
      },
      { 
        name: 'Identidad\nde marca', 
        icon: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ICONOS%20MENU/ICONOS-13.svg',
        items: ['Diseño de conceptos', 'Identidad visual', 'Papelería', 'Diseño de empaque', 'Merchandising'] 
      },
      { 
        name: 'Diseño\neditorial', 
        icon: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ICONOS%20MENU/ICONOS-14.svg',
        items: ['Diseño de libros', 'Diseño de revistas', 'Diseño de catálogos', 'Tipografías'] 
      },
      { 
        name: 'UX/UI', 
        icon: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ICONOS%20MENU/ICONOS-15.svg',
        items: ['Desarrollo de apps', 'Desarrollo front-end', 'Desarrollo back-end', 'Experiencias de usuario', 'Análisis de usabilidad'] 
      },
      { 
        name: 'Fotografía', 
        icon: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ICONOS%20MENU/ICONOS-16.svg',
        items: ['Dirección creativa', 'Retrato', 'Arquitectura'] 
      },
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
      { 
        name: 'Alferd Enchapados',
        image: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CLIENTES/ICONOS-01.svg',
        identity: 'Identidad', 
        place: 'CDMX', 
        year: '2020' 
      },
      { 
        name: 'Punto Cinco',
        image: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CLIENTES/ICONOS-02.svg',
        identity: 'Identidad', 
        place: 'PUEBLA', 
        year: '2025' 
      },
      { 
        name: 'Gas GP',
        image: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CLIENTES/ICONOS-03.svg',
        identity: 'Identidad', 
        place: 'ACAPULCO', 
        year: '2023' 
      },
    ],
  },
  {
    id: 5,
    type: 'carousel',
    carouselImages: [
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-01.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-02.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-03.jpg',
      'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/CARRUSEL%202/PATA%20DE%20PERRO%20ILUSTRACIONES-04.jpg',
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

  // Ya no hay listener de wheel - solo navegación con botones

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
          className="min-h-screen flex flex-col justify-center px-[6vw] py-[4vw]"
        >

          {section.type === 'intro' && (
            <div>
              <div className="max-w-4xl mb-8">
                <h1
                  className="font-[family-name:var(--font-display)] font-semibold italic"
                  style={{ fontSize: 'clamp(3rem, 7vw, 9rem)', color: 'var(--color-fern)', lineHeight: 1, perspective: '600px' }}
                >
                  <SplitWords text={section.title} />
                </h1>
              </div>
              <div className="w-full flex justify-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="font-[family-name:var(--font-sans)] max-w-lg text-center"
                  style={{ fontSize: 'clamp(1rem, 1.6vw, 1.8rem)', color: 'var(--color-fern)', lineHeight: 1.6 }}
                >
                  {section.description}
                </motion.p>
              </div>
            </div>
          )}

          {section.type === 'services' && (
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[4vw] max-w-7xl">
                {section.services.map((service, i) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex flex-col gap-4 items-center text-center"
                  >
                    <PopIcon icon={service.icon} delay={i * 0.08 + 0.2} />
                    <h3
                      className="font-[family-name:var(--font-accent)] font-bold whitespace-pre-line"
                      style={{ fontSize: 'clamp(1.1rem, 1.6vw, 1.8rem)', color: 'var(--color-fern)', lineHeight: 1.2 }}
                    >
                      {service.name}
                    </h3>
                    <ul className="space-y-1.5 text-[clamp(0.85rem,1.1vw,1.2rem)] text-[var(--color-fern)]/75 font-[family-name:var(--font-sans)]">
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
            <div className="flex flex-col items-center justify-center">
              <h2
                className="font-[family-name:var(--font-display)] font-semibold italic mb-12 self-start"
                style={{ fontSize: 'clamp(3rem, 7vw, 9rem)', color: 'var(--color-fern)', lineHeight: 1, perspective: '600px' }}
              >
                <SplitWords text={section.title} />
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl">
                {section.clients.map((client, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="flex flex-col gap-4 items-center"
                  >
                    <div className="w-full aspect-square bg-[#d4d0c8]/20 rounded-lg overflow-hidden flex items-center justify-center p-8">
                      <img 
                        src={client.image} 
                        alt={client.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-center font-[family-name:var(--font-sans)]">
                      <p className="font-bold text-[clamp(1rem,1.3vw,1.4rem)]" style={{ color: '#3E8440' }}>{client.name}</p>
                      <p className="text-[clamp(0.9rem,1.1vw,1.2rem)]" style={{ color: '#3E8440' }}>{client.identity}</p>
                      <p className="text-[clamp(0.85rem,1vw,1.1rem)]" style={{ color: '#3E8440' }}>{client.place}</p>
                      <p className="text-[clamp(0.85rem,1vw,1.1rem)]" style={{ color: '#3E8440' }}>{client.year}</p>
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