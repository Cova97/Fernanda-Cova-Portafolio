import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';

/* ══════════════════════════════════════════
   SplitWords — cada palabra entra escalonada
══════════════════════════════════════════ */
const SplitWords = ({ text, className = '', style = {}, delay = 0 }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-8% 0px -8% 0px' });

  return (
    <span ref={ref} className={`inline ${className}`} style={style} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.22em]"
          initial={{ opacity: 0, y: 50, rotateX: -25 }}
          animate={inView
            ? { opacity: 1, y: 0, rotateX: 0 }
            : { opacity: 0, y: 50, rotateX: -25 }
          }
          transition={{
            duration: 0.6,
            delay: delay + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

/* ══════════════════════════════════════════
   FadeUp — párrafos con fade + slide
══════════════════════════════════════════ */
const FadeUp = ({ children, delay = 0, className = '' }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-6% 0px -6% 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ══════════════════════════════════════════
   FadeLabel — etiqueta columna izquierda
══════════════════════════════════════════ */
const FadeLabel = ({ text, light = false }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-5% 0px -5% 0px' });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        fontFamily: 'var(--font-accent)',
        fontSize: 'clamp(0.85rem, 1.1vw, 1.1rem)',
        fontWeight: 700,
        letterSpacing: '0.06em',
        color: light ? 'var(--color-parchment)' : 'var(--color-fern)',
      }}
    >
      {text}
    </motion.span>
  );
};

/* ══════════════════════════════════════════
   ParallaxSection — parallax sutil en el contenido
══════════════════════════════════════════ */
const ParallaxSection = ({ children, className = '', bg }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y      = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const smoothY = useSpring(y, { stiffness: 60, damping: 20 });

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`} style={{ background: bg }}>
      <motion.div style={{ y: smoothY }} className="relative z-10">
        {children}
      </motion.div>
    </section>
  );
};

/* ══════════════════════════════════════════
   ABOUT
══════════════════════════════════════════ */
const About = () => {
  /* Tamaños tipográficos */
  const titleSize = 'clamp(2.8rem, 6.5vw, 8rem)';
  const bodySize  = 'clamp(1rem, 1.6vw, 3rem)';
  const titleFont = 'var(--font-display)';
  const bodyFont  = 'var(--font-sans)';

  return (
    <div id="about" className="overflow-x-hidden">

      {/* ══════════════════════════════
          1. PROPÓSITO — fondo parchment
      ══════════════════════════════ */}
      <ParallaxSection bg="var(--color-parchment)" className="min-h-screen flex flex-col justify-center">
        <div className="w-full px-[5vw] py-[8vw]" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="flex gap-[4vw]">

            {/* Columna izquierda — label */}
            <div className="w-[12vw] min-w-[80px] pt-[0.6em] flex-shrink-0">
              <FadeLabel text="Propósito" light={false} />
            </div>

            {/* Columna derecha — contenido */}
            <div className="flex-1">
              <h2
                className="font-semibold leading-[1.05] mb-[3vw]"
                style={{ fontFamily: titleFont, fontSize: titleSize, color: 'var(--color-melon)', perspective: '600px' }}
              >
                <SplitWords text="Soluciones visuales integrales donde la estrategia y el arte convergen." />
              </h2>
              <FadeUp delay={0.3} className="max-w-xl">
                <p style={{ fontFamily: bodyFont, fontSize: bodySize, color: 'var(--color-fern)', fontWeight: 400, lineHeight: 1.65 }}>
                  Transformar soluciones visuales en sistemas vivos y funcionales que permitan a cada proyecto florecer con una identidad propia, auténtica y equilibrada.
                </p>
              </FadeUp>
            </div>

          </div>
        </div>
      </ParallaxSection>

      {/* ══════════════════════════════
          2. VISIÓN — fondo melon
      ══════════════════════════════ */}
      <ParallaxSection bg="var(--color-melon)" className="min-h-screen flex flex-col justify-center">
        <div className="w-full px-[5vw] py-[8vw]" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="flex gap-[4vw]">

            <div className="w-[12vw] min-w-[80px] pt-[0.6em] flex-shrink-0">
              <FadeLabel text="Visión" light={true} />
            </div>

            <div className="flex-1">
              <h2
                className="font-semibold leading-[1.05] mb-[3vw]"
                style={{ fontFamily: titleFont, fontSize: titleSize, color: 'var(--color-parchment)', perspective: '600px' }}
              >
                <SplitWords text="Anticipar la evolución de lo que se diseña hoy." />
              </h2>
              <FadeUp delay={0.3} className="max-w-xl">
                <p style={{ fontFamily: bodyFont, fontSize: bodySize, color: 'var(--color-parchment)', fontWeight: 400, lineHeight: 1.65 }}>
                  Un laboratorio de diseño, donde la multidisciplina y la precisión técnica crean visuales del futuro, logrando que cada proyecto sea una pieza trascendente.
                </p>
              </FadeUp>
            </div>

          </div>
        </div>
      </ParallaxSection>

      {/* ══════════════════════════════
          3. VALORES — fondo parchment
      ══════════════════════════════ */}
      <ParallaxSection bg="var(--color-parchment)" className="min-h-screen flex flex-col justify-center">
        <div className="w-full px-[5vw] py-[8vw]" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="flex gap-[4vw]">

            <div className="w-[12vw] min-w-[80px] pt-[0.6em] flex-shrink-0">
              <FadeLabel text="Valores" light={false} />
            </div>

            <div className="flex-1">
              <h2
                className="font-semibold leading-[1.05] mb-[3vw]"
                style={{ fontFamily: titleFont, fontSize: titleSize, color: 'var(--color-melon)', perspective: '600px' }}
              >
                <SplitWords text="La práctica se sostine sobre pilares sólidos y equilibrados" />
              </h2>
              <FadeUp delay={0.25} className="max-w-xl">
                <p style={{ fontFamily: bodyFont, fontSize: bodySize, color: 'var(--color-fern)', fontWeight: 400, lineHeight: 1.65, marginBottom: '1.4em' }}>
                  Cada simiento se basa a través de un holismo creativo donde cada proyecto se convierte en un organismo completo; entiendo que detrás de cada decisión debe existir una estrategia con base científica y de mercado.
                </p>
              </FadeUp>
              <FadeUp delay={0.45} className="max-w-xl">
                <p style={{ fontFamily: bodyFont, fontSize: bodySize, color: 'var(--color-fern)', fontWeight: 400, lineHeight: 1.65 }}>
                  Todo crecimiento orgánico que respeta la esencia auténtica de cada proyecto, se potencia mediante una curiosidad multidisciplinaria que combina diversas áreas de diseño para crear ecosistemas visuales resilientes, diversos y funcionales.
                </p>
              </FadeUp>
            </div>

          </div>
        </div>
      </ParallaxSection>

      {/* ══════════════════════════════
          4. CULTURA — fondo melon
      ══════════════════════════════ */}
      <ParallaxSection bg="var(--color-melon)" className="min-h-screen flex flex-col justify-center">
        <div className="w-full px-[5vw] py-[8vw]" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="flex gap-[4vw]">

            <div className="w-[12vw] min-w-[80px] pt-[0.6em] flex-shrink-0">
              <FadeLabel text="Cultura" light={true} />
            </div>

            <div className="flex-1">
              <h2
                className="font-semibold leading-[1.05] mb-[3vw]"
                style={{ fontFamily: titleFont, fontSize: titleSize, color: 'var(--color-parchment)', perspective: '600px' }}
              >
                <SplitWords text="Experimentación y cuidado dentro del laboratorio." />
              </h2>
              <FadeUp delay={0.3} className="max-w-xl">
                <p style={{ fontFamily: bodyFont, fontSize: bodySize, color: 'var(--color-parchment)', fontWeight: 400, lineHeight: 1.65 }}>
                  Entrar en un espacio de cuidado, escucha profunda, disciplina y libertad creativa, trata con delicadeza cada proyecto para asegurar resultados de excelencia a partir de una comunicación fluida y transparente.
                </p>
              </FadeUp>
            </div>

          </div>
        </div>
      </ParallaxSection>

    </div>
  );
};

export default About;