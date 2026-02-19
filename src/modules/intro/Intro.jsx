import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const Intro = ({ onComplete }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // Auto-avanzar después de 8 segundos (opcional)
  useEffect(() => {
    const timer = setTimeout(() => {
      handleContinue();
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowIntro(false);
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
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#F7EFDA' }}
        >
          {/* Logo centrado clickeable */}
          <motion.button
            onClick={handleContinue}
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={isExiting ? {
              scale: 3,
              opacity: 0,
              rotate: 360
            } : {
              scale: 1,
              opacity: 1,
              rotate: 360
            }}
            transition={isExiting ? {
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            } : {
              scale: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 },
              opacity: { duration: 0.6 },
              rotate: { duration: 2, ease: "easeInOut" }
            }}
            className="relative z-10 cursor-pointer group"
            style={{ width: 'clamp(400px, 50vw, 600px)', height: 'auto' }}
          >
            <motion.img
              src="https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/LOGO/LOGO.svg"
              alt="Logo Portfolio"
              className="w-full h-auto"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
              animate={!isExiting && {
                rotate: [0, 360]
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />

            {/* Efecto hover */}
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0, scale: 1 }}
              whileHover={{ opacity: 0.1, scale: 1.05 }}
              style={{ 
                background: 'radial-gradient(circle, rgba(62,132,64,0.3) 0%, transparent 70%)',
              }}
            />
          </motion.button>

          {/* Texto pequeño indicador */}
          {!isExiting && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="absolute bottom-12 text-sm text-[#3e8440]/50 text-center"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Click en el logo o espera unos segundos...
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;