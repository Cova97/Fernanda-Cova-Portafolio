import { motion } from 'motion/react';
import { useState } from 'react';

const FloatingFlowers = () => {
  const [selectedFlower, setSelectedFlower] = useState(null);

  const flowers = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
      color: 'var(--color-pistacho)',
      icon: '🌸',
      position: { x: -60, y: -120 }
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
      color: 'var(--color-melon)',
      icon: '🌺',
      position: { x: -20, y: -140 }
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
      color: 'var(--color-pistacho)',
      icon: '🌼',
      position: { x: 20, y: -140 }
    },
    {
      id: 4,
      name: 'Services',
      href: '#services',
      color: 'var(--color-melon)',
      icon: '🌻',
      position: { x: 60, y: -120 }
    }
  ];

  const handleFlowerClick = (flower) => {
    setSelectedFlower(flower.id);
    
    // Esperar a que termine la animación antes de navegar
    setTimeout(() => {
      window.location.href = flower.href;
      setSelectedFlower(null);
    }, 800);
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className="relative">
        {/* Flores */}
        {flowers.map((flower) => (
          <motion.button
            key={flower.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: selectedFlower === flower.id ? 0 : 1, 
              opacity: selectedFlower === flower.id ? 0 : 1,
              x: flower.position.x,
              y: flower.position.y
            }}
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
            whileTap={{ scale: 0.9 }}
            transition={{ 
              duration: 0.5, 
              delay: flower.id * 0.1,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            onClick={() => handleFlowerClick(flower)}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer text-5xl"
            style={{
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
            }}
            aria-label={`Ir a ${flower.name}`}
          >
            {/* Tallo de la flor */}
            <div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-[var(--color-fern)]"
              style={{ height: '60px', zIndex: -1 }}
            />
            
            {/* Flor */}
            <motion.span
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {flower.icon}
            </motion.span>

            {/* Tooltip */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[var(--color-fern)] text-[var(--color-parchment)] px-3 py-1 rounded-full text-xs whitespace-nowrap font-[family-name:var(--font-accent)]"
            >
              {flower.name}
            </motion.span>
          </motion.button>
        ))}

        {/* Florero */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative z-10"
        >
          {/* Cuerpo del florero */}
          <div className="w-24 h-32 bg-gradient-to-b from-[var(--color-melon)]/80 to-[var(--color-melon)] rounded-t-3xl relative overflow-hidden">
            {/* Decoración del florero */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[var(--color-parchment)]/20 rounded-full" />
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[var(--color-parchment)]/30 rounded-full" />
            
            {/* Borde superior del florero */}
            <div className="absolute -top-2 left-0 right-0 h-4 bg-[var(--color-melon)] rounded-t-xl" />
          </div>

          {/* Base del florero */}
          <div className="w-28 h-3 bg-[var(--color-melon)] mx-auto rounded-b-xl" />
          
          {/* Sombra */}
          <div className="w-32 h-2 bg-[var(--color-fern)]/20 mx-auto mt-1 rounded-full blur-sm" />
        </motion.div>

        {/* Animación de partículas cuando se selecciona una flor */}
        {selectedFlower && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: 0, 
                  y: -100,
                  opacity: 1,
                  scale: 1
                }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 8) * 100,
                  y: -100 + Math.sin((i * Math.PI * 2) / 8) * 100,
                  opacity: 0,
                  scale: 0
                }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 left-1/2 w-2 h-2 bg-[var(--color-pistacho)] rounded-full"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FloatingFlowers;
