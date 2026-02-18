import { useState, useEffect, useRef } from 'react';

/**
 * Carrusel horizontal infinito plano con drag manual y auto-scroll
 * Las imágenes se desplazan continuamente de derecha a izquierda
 * El usuario puede arrastrar con el mouse para controlar manualmente
 * 
 * @param {Array} images - Array de strings (URLs o placeholders)
 * @param {number} speed - Velocidad de desplazamiento automático (default: 0.25)
 * @param {string} aspectRatio - Aspect ratio del contenedor (default: 'video' = 16:9)
 */
const AutoCarousel = ({ images = [], speed = 0.25, aspectRatio = 'video' }) => {
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);

  // Auto-scroll (se pausa al hacer drag)
  useEffect(() => {
    if (images.length === 0 || isDragging) return;
    
    const timer = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev - speed;
        if (Math.abs(newOffset) >= 100) return 0;
        return newOffset;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [images.length, speed, isDragging]);

  // Handlers del drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    const containerWidth = containerRef.current?.offsetWidth || 1;
    // Convertir píxeles a porcentaje
    const percentDiff = (diff / containerWidth) * 100;
    setDragOffset(percentDiff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Aplicar el drag al offset permanente
    setOffset((prev) => {
      const newOffset = prev + dragOffset;
      // Normalizar para mantener el loop
      if (newOffset > 0) return newOffset - 100;
      if (newOffset < -200) return newOffset + 100;
      return newOffset;
    });
    setDragOffset(0);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch events para móviles
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    const containerWidth = containerRef.current?.offsetWidth || 1;
    const percentDiff = (diff / containerWidth) * 100;
    setDragOffset(percentDiff);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  if (images.length === 0) return null;

  const duplicatedImages = [...images, ...images, ...images];
  const currentOffset = offset + dragOffset;

  // Aspect ratios disponibles
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
      
      {/* Container de las imágenes con desplazamiento */}
      <div
        className="flex absolute left-0 top-0 h-full"
        style={{
          transform: `translateX(${currentOffset}%)`,
          transition: isDragging ? 'none' : 'transform 0.05s linear',
        }}
      >
        {duplicatedImages.map((img, i) => (
          <div
            key={`${img}-${i}`}
            className="flex-shrink-0 h-full bg-[#d4d0c8] flex items-center justify-center relative rounded-lg overflow-hidden"
            style={{
              width: '85%',
              marginRight: '2.5%',
              marginLeft: '2.5%',
            }}
          >
            {/* Si es una URL de imagen, renderiza <img>, si no, texto placeholder */}
            {typeof img === 'string' && (img.startsWith('http') || img.startsWith('/')) ? (
              <img 
                src={img} 
                alt="" 
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            ) : (
              <span className="text-[#a09a90] text-sm font-[family-name:var(--font-sans)] select-none pointer-events-none">
                {img}
              </span>
            )}

            {/* Overlay sutil al pasar el mouse */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-fern)]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Gradientes laterales para fade effect */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-parchment)] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-parchment)] to-transparent pointer-events-none z-10" /> */}

    </div>
  );
};

export default AutoCarousel;