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
      position: { x: -120, y: -240 }
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
      color: 'var(--color-melon)',
      icon: '🌺',
      position: { x: -40, y: -280 }
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
      color: 'var(--color-pistacho)',
      icon: '🌼',
      position: { x: 40, y: -280 }
    },
    {
      id: 4,
      name: 'Services',
      href: '#services',
      color: 'var(--color-melon)',
      icon: '🌻',
      position: { x: 120, y: -240 }
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
    <div className="flex items-center justify-center mt-12">
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
            whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
            whileTap={{ scale: 0.9 }}
            transition={{ 
              duration: 0.5, 
              delay: flower.id * 0.1,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            onClick={() => handleFlowerClick(flower)}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer text-8xl"
            style={{
              filter: 'drop-shadow(0 8px 12px rgba(0, 0, 0, 0.15))',
            }}
            aria-label={`Ir a ${flower.name}`}
          >
            {/* Tallo de la flor */}
            <div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 bg-[var(--color-fern)]"
              style={{ height: '120px', zIndex: -1 }}
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
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[var(--color-fern)] text-[var(--color-parchment)] px-4 py-2 rounded-full text-base whitespace-nowrap font-[family-name:var(--font-accent)] shadow-lg"
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
          <div className="w-48 h-64 bg-gradient-to-b from-[var(--color-melon)]/80 to-[var(--color-melon)] rounded-t-[4rem] relative overflow-hidden shadow-2xl">
            {/* Decoración del florero */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[var(--color-parchment)]/20 rounded-full" />
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-[var(--color-parchment)]/30 rounded-full" />
            
            {/* Patrón decorativo */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-[var(--color-parchment)]/40" />
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-[var(--color-parchment)]/40" />
            
            {/* Borde superior del florero */}
            <div className="absolute -top-4 left-0 right-0 h-8 bg-[var(--color-melon)] rounded-t-2xl shadow-inner" />
          </div>

          {/* Base del florero */}
          <div className="w-56 h-6 bg-[var(--color-melon)] mx-auto rounded-b-2xl shadow-lg" />
          
          {/* Sombra */}
          <div className="w-64 h-4 bg-[var(--color-fern)]/20 mx-auto mt-2 rounded-full blur-md" />
        </motion.div>

        {/* Animación de partículas cuando se selecciona una flor */}
        {selectedFlower && (
          <>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: 0, 
                  y: -200,
                  opacity: 1,
                  scale: 1
                }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 12) * 150,
                  y: -200 + Math.sin((i * Math.PI * 2) / 12) * 150,
                  opacity: 0,
                  scale: 0
                }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 left-1/2 w-3 h-3 bg-[var(--color-pistacho)] rounded-full"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FloatingFlowers;