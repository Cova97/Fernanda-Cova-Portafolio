import { motion } from 'motion/react';
import { useState } from 'react';

const FLOWERS = [
  {
    id: 1,
    name: 'Home',
    section: 'home',
    image: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/FLORERO/FLOR1.svg',
    delay: 0.1,
  },
  {
    id: 2,
    name: 'Sobre mí',
    section: 'about',
    image: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/FLORERO/FLOR2.svg',
    delay: 0.2,
  },
  {
    id: 3,
    name: 'Servicios',
    section: 'services',
    image: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/FLORERO/FLOR3.svg',
    delay: 0.3,
  },
  {
    id: 4,
    name: 'Proyectos',
    section: 'projects',
    image: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/FLORERO/FLOR4.svg',
    delay: 0.4,
  },
];

const FloatingFlowers = ({ onNavigate }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (flower) => {
    setSelected(flower.id);
    setTimeout(() => {
      if (onNavigate) onNavigate(flower.section);
      setSelected(null);
    }, 650);
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex items-center justify-center gap-[1px] max-w-7xl mx-auto px-4">
        {FLOWERS.map((flower) => (
          <motion.button
            key={flower.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: selected === flower.id ? 0 : 1,
              opacity: selected === flower.id ? 0 : 1,
            }}
            transition={{
              scale: { duration: 0.5, delay: flower.delay, type: 'spring', stiffness: 200, damping: 18 },
              opacity: { duration: 0.5, delay: flower.delay },
            }}
            onClick={() => handleClick(flower)}
            className="relative cursor-pointer group"
            style={{ 
              filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.15))',
              width: 'clamp(200px, 20vw, 1000px)',
              height: 'clamp(200px, 20vw, 800px)',
            }}
            aria-label={`Ir a ${flower.name}`}
          >
            {/* Imagen de la flor */}
            <motion.img
              src={flower.image}
              alt={flower.name}
              className="w-full h-full object-contain"
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileHover={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[var(--color-fern)] text-[var(--color-parchment)] px-4 py-2 rounded-full text-sm whitespace-nowrap pointer-events-none shadow-lg z-10"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              {flower.name}
            </motion.div>

            {/* Partículas al clic */}
            {selected === flower.id && (
              [...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
                  style={{ background: i % 2 === 0 ? 'var(--color-pistacho)' : 'var(--color-melon)' }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: Math.cos((i * Math.PI * 2) / 10) * 80,
                    y: Math.sin((i * Math.PI * 2) / 10) * 80,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{ duration: 0.65 }}
                />
              ))
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FloatingFlowers;