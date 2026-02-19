import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';
import FloatingFlowers from '../../components/common/FloatingFlowers';

/* ══════════════════════════════════════════
   FadeSection — fade + slide fuerte al scroll
══════════════════════════════════════════ */
const FadeSection = ({ children, className = '', direction = 'up' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'end 0.08'],
  });

  const dirs = {
    up:    [60, 0, 0, -60],
    down:  [-60, 0, 0, 60],
    left:  [0, 0, 0, 0],
    right: [0, 0, 0, 0],
  };

  const opacity    = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0, 1, 1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], dirs[direction]);
  const smoothY    = useSpring(translateY, { stiffness: 80, damping: 20 });

  return (
    <motion.div ref={ref} style={{ opacity, y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
};

/* ══════════════════════════════════════════
   SplitText — cada palabra entra escalonada
══════════════════════════════════════════ */
const SplitText = ({ text, className = '', style = {} }) => {
  const ref  = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-10% 0px -10% 0px' });

  return (
    <span ref={ref} className={`inline ${className}`} style={style} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 40, rotateX: -30 }}
          animate={inView
            ? { opacity: 1, y: 0, rotateX: 0 }
            : { opacity: 0, y: 40, rotateX: -30 }
          }
          transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

/* ══════════════════════════════════════════
   PopImage — parallax + tilt 3D + reveal
══════════════════════════════════════════ */
const PopImage = ({ src, placeholder, className = '', parallaxStrength = 40 }) => {
  const ref = useRef(null);

  /* Parallax vertical al scroll */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-parallaxStrength, parallaxStrength]);
  const smoothImgY = useSpring(imgY, { stiffness: 60, damping: 18 });

  /* Reveal al entrar en viewport */
  const inView = useInView(ref, { once: false, margin: '-5% 0px -5% 0px' });

  /* Tilt 3D al mover el mouse */
  const handleMouseMove = (e) => {
    const rect   = e.currentTarget.getBoundingClientRect();
    const x      = (e.clientX - rect.left) / rect.width  - 0.5;
    const y      = (e.clientY - rect.top)  / rect.height - 0.5;
    e.currentTarget.style.transform =
      `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.04)`;
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform =
      'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)';
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)', willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Máscara de reveal — se desliza hacia arriba al entrar */}
      <motion.div
        className="absolute inset-0 bg-[var(--color-parchment)] z-10 origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: inView ? 0 : 1 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Imagen con parallax */}
      <motion.div
        style={{ y: smoothImgY }}
        className="w-full h-[115%] -mt-[7.5%]"
      >
        {src ? (
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#d4d0c8] flex items-center justify-center">
            <span className="text-[#a09a90] text-sm font-[family-name:var(--font-sans)] select-none">
              {placeholder}
            </span>
          </div>
        )}
      </motion.div>

      {/* Overlay brillante en hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Sombra dinámica al hacer hover */}
      <motion.div
        className="absolute -inset-2 -z-10 rounded-3xl"
        initial={{ boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}
        whileHover={{ boxShadow: '0 40px 100px rgba(62,132,64,0.22), 0 8px 30px rgba(0,0,0,0.12)' }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
};

/* ══════════════════════════════════════════
   HOME
══════════════════════════════════════════ */
const Home = ({ onNavigate }) => {
  return (
    <div
      id="home"
      className="bg-[var(--color-parchment)] overflow-x-hidden"
      style={{ fontFamily: 'var(--font-sans)' }}
    >

      {/* ── SECCIÓN 1 — Florero ── */}
      <section className="min-h-screen flex items-center justify-center">
        <FloatingFlowers onNavigate={onNavigate} />
      </section>

      {/* ── SECCIÓN 2 — Presentación ── */}
      <section className="min-h-screen px-8 md:px-16 lg:px-24 py-16 flex flex-col justify-center">

        {/* Título extendido casi a 3/4 de pantalla */}
        <div className="mb-10 max-w-[75%]">
          <h2
            className="text-[clamp(2rem,4.5vw,5.5rem)] leading-[1.1] font-semibold italic text-[var(--color-melon)]"
            style={{ fontFamily: 'var(--font-display)', perspective: '600px' }}
          >
            <SplitText text="No hay nada más armonioso que un proyecto que crece en su propia forma." />
          </h2>
        </div>

        {/* Layout: Imagen centro-izquierda + Textos sangría derecha */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">

          {/* Imagen más al centro */}
          <FadeSection className="w-full md:w-[42%] md:ml-[8%]" direction="up">
            <PopImage
              src="https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ILUSTRACIONES%20HOME/01.jpg"
              className="w-full aspect-[3/4]"
              parallaxStrength={30}
            />
          </FadeSection>

          {/* Textos en sangría derecha */}
          <div className="w-full md:w-[40%] flex flex-col justify-center gap-6">
            
            {/* Texto 1 - color fern */}
            <FadeSection direction="up">
              <motion.p
                className="text-[clamp(1.1rem,1.6vw,2rem)] leading-relaxed text-[var(--color-fern)]"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
              >
                Soy diseñadora estratégica y alguien que se apasiona por la gráfica y el arte.
              </motion.p>
            </FadeSection>

            {/* Texto 2 - color fern también */}
            <FadeSection direction="up">
              <motion.p
                className="text-[clamp(1.1rem,1.6vw,2rem)] leading-relaxed text-[var(--color-fern)]"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
              >
                Disfruto hacer del diseño una multidisciplina; explorando y combinando áreas del diseño para aportar soluciones integrales y creativas.
              </motion.p>
            </FadeSection>

          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3 — Metodología ── */}
      <section className="min-h-screen px-8 md:px-16 lg:px-24 py-16 flex flex-col justify-center">

        {/* Título a la izquierda */}
        <div className="mb-8" style={{ perspective: '600px' }}>
          <h2
            className="text-[clamp(2.5rem,6vw,7rem)] leading-[1.05] font-semibold italic text-[var(--color-fern)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <SplitText text="Metodología" />
          </h2>
        </div>

        {/* Contenedor para párrafo + grid alineados a la derecha */}
        <div className="ml-auto max-w-[85%]">
          
          {/* Párrafo */}
          <FadeSection>
            <p
              className="text-[clamp(0.85rem,1.3vw,1.6rem)] text-[var(--color-fern)]/80 mb-10 leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
            >
              En este espacio la precisión se funde con la libertad del diseño.
              Cada proyecto se trata como un organismo único, transformando cada
              idea desde un proceso sólido hasta convertirse en un sistema
              completo y equilibrado.
            </p>
          </FadeSection>

          {/* Grid de 4 pasos con iconos SVG */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/METODOLOGIA/ICONOS-09.svg',
                title: 'Llamada de conocimiento',
                desc:  'Inicio de comunicación con brief, investigación y análisis de datos para establecer una base estratégica sólida.',
              },
              {
                icon: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/METODOLOGIA/ICONOS-10.svg',
                title: 'Estrategia creativa',
                desc:  'Definición y traducción de estrategia en sistemas visuales bajo una visión multidisciplinar.',
              },
              {
                icon: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/METODOLOGIA/ICONOS-11.svg',
                title: 'Diseño creativo',
                desc:  'Fase de diseño y prototipado donde la técnica y la creatividad convergen. Fase de iteración y ajustes basados en feedback estratégico.',
              },
              {
                icon: 'https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/METODOLOGIA/ICONOS-12.svg',
                title: 'Optimización de entregas',
                desc:  'Preparación y exportación de archivos finales. Entrega de un sistema funcional y listo para su implementación.',
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: '-5% 0px -5% 0px' }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="flex flex-col items-center gap-3 cursor-default"
              >
                {/* Icono SVG centrado */}
                <motion.div
                  whileInView={{ scale: [0, 1.1, 1] }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                  className="w-14 h-14"
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <h3
                  className="text-[clamp(0.95rem,1.4vw,1.8rem)] font-semibold text-[var(--color-fern)] leading-tight text-center"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-[clamp(0.75rem,1vw,1.2rem)] text-[var(--color-fern)]/75 leading-relaxed text-center"
                  style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </section>

      {/* ── SECCIÓN 4 — Frase + imagen ancha ── */}
      <section className="min-h-screen px-8 md:px-16 lg:px-24 py-16 flex flex-col justify-center">

        <div className="mb-12 max-w-3xl" style={{ perspective: '600px' }}>
          <h2
            className="text-[clamp(3rem,8vw,8rem)] leading-[1.05] font-semibold text-[var(--color-melon)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <SplitText text="Diseñar es un acto de cultivo." />
          </h2>
        </div>

        <FadeSection>
          <PopImage
            src="https://ekskvtmatbrhqmdcybnc.supabase.co/storage/v1/object/public/imagenes/ILUSTRACIONES%20HOME/02.jpg"
            className="w-full aspect-video"
            parallaxStrength={20}
          />
        </FadeSection>

      </section>

    </div>
  );
};

export default Home;