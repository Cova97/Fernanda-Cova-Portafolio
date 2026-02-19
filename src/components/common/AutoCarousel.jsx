import { useState, useEffect, useRef } from 'react';

/**
 * Carrusel horizontal infinito con drag manual y auto-scroll
 */
const AutoCarousel = ({ images = [], speed = 0.3, aspectRatio = 'video' }) => {
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Auto-scroll continuo
  useEffect(() => {
    if (images.length === 0 || isDragging) return;
    
    let lastTimestamp = 0;
    
    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      setOffset((prev) => {
        // Mover hacia la izquierda continuamente
        let newOffset = prev - (speed * delta / 16.67);
        
        // Cada imagen ocupa 50% (45% + 2.5% margen × 2)
        const singleSetWidth = images.length * 50;
        
        // Reiniciar cuando se completa un set completo
        if (Math.abs(newOffset) >= singleSetWidth) {
          return newOffset + singleSetWidth;
        }
        
        return newOffset;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [images.length, speed, isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const diff = e.clientX - startX;
    const containerWidth = containerRef.current.offsetWidth;
    const percentDiff = (diff / containerWidth) * 100;
    
    setOffset((prev) => {
      const newOffset = prev + percentDiff;
      const singleSetWidth = images.length * 50;
      
      // Normalizar para mantener loop
      if (newOffset > 0) return newOffset - singleSetWidth;
      if (Math.abs(newOffset) >= singleSetWidth * 2) return newOffset + singleSetWidth;
      
      return newOffset;
    });
    
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const diff = e.touches[0].clientX - startX;
    const containerWidth = containerRef.current.offsetWidth;
    const percentDiff = (diff / containerWidth) * 100;
    
    setOffset((prev) => {
      const newOffset = prev + percentDiff;
      const singleSetWidth = images.length * 90;
      
      if (newOffset > 0) return newOffset - singleSetWidth;
      if (Math.abs(newOffset) >= singleSetWidth * 2) return newOffset + singleSetWidth;
      
      return newOffset;
    });
    
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  if (images.length === 0) return null;

  // Triplicar para loop infinito
  const tripleImages = [...images, ...images, ...images];

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
    portrait: 'aspect-[9/16]',
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${aspectClasses[aspectRatio] || aspectClasses.video} overflow-hidden rounded-xl bg-[var(--color-parchment)] select-none`}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* Container de las imágenes */}
      <div
        className="flex absolute left-0 top-0 h-full"
        style={{
          transform: `translateX(${offset}%)`,
          willChange: 'transform',
        }}
      >
        {tripleImages.map((img, i) => (
          <div
            key={`${img}-${i}`}
            className="flex-shrink-0 h-full relative overflow-hidden"
            style={{
              width: '65%',
              height: '75%',
              marginRight: '2.5%',
              marginLeft: '2.5%',
            }}
          >
            <img 
              src={img} 
              alt={`Imagen ${(i % images.length) + 1}`}
              className="w-full h-full object-cover pointer-events-none rounded-lg"
              draggable={false}
            />

            {/* Overlay al hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-fern)]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default AutoCarousel;