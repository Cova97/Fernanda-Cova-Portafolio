import { motion } from 'motion/react';
import { useState } from 'react';

/* ── Flor 1: Rosa/Orquídea (→ Home) ── */
const FlowerRosa = () => (
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
    <ellipse cx="45" cy="30" rx="18" ry="28" fill="#f9b8d0" transform="rotate(-30 45 45)" opacity="0.9"/>
    <ellipse cx="45" cy="30" rx="18" ry="28" fill="#f48fb1" transform="rotate(30 45 45)" opacity="0.85"/>
    <ellipse cx="30" cy="45" rx="18" ry="28" fill="#f9b8d0" transform="rotate(90 45 45)" opacity="0.85"/>
    <ellipse cx="60" cy="45" rx="18" ry="28" fill="#f48fb1" transform="rotate(-90 45 45)" opacity="0.85"/>
    <circle cx="45" cy="45" r="10" fill="#ffe082"/>
    <circle cx="45" cy="45" r="6" fill="#ffb300"/>
    <circle cx="45" cy="45" r="3" fill="#e65100"/>
  </svg>
);

/* ── Flor 2: Hibisco (→ About) ── */
const FlowerHibisco = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="20" rx="14" ry="26" fill="#e91e8c" opacity="0.9"/>
    <ellipse cx="50" cy="20" rx="14" ry="26" fill="#e91e8c" transform="rotate(72 50 50)" opacity="0.85"/>
    <ellipse cx="50" cy="20" rx="14" ry="26" fill="#c2185b" transform="rotate(144 50 50)" opacity="0.85"/>
    <ellipse cx="50" cy="20" rx="14" ry="26" fill="#e91e8c" transform="rotate(216 50 50)" opacity="0.85"/>
    <ellipse cx="50" cy="20" rx="14" ry="26" fill="#c2185b" transform="rotate(288 50 50)" opacity="0.85"/>
    {/* Estambre */}
    <line x1="50" y1="50" x2="50" y2="25" stroke="#ad1457" strokeWidth="3"/>
    <circle cx="50" cy="22" r="4" fill="#f06292"/>
    <circle cx="42" cy="26" r="3" fill="#f06292"/>
    <circle cx="58" cy="26" r="3" fill="#f06292"/>
  </svg>
);

/* ── Flor 3: Margarita/Girasol (→ Projects) ── */
const FlowerMargarita = () => (
  <svg width="95" height="95" viewBox="0 0 95 95" fill="none">
    {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
      <ellipse
        key={i}
        cx="47.5" cy="16"
        rx="8" ry="20"
        fill={i % 2 === 0 ? '#fdd835' : '#f9a825'}
        transform={`rotate(${angle} 47.5 47.5)`}
        opacity="0.95"
      />
    ))}
    <circle cx="47.5" cy="47.5" r="16" fill="#795548"/>
    <circle cx="47.5" cy="47.5" r="11" fill="#5d4037"/>
    {[0,45,90,135,180,225,270,315].map((a, i) => (
      <circle
        key={i}
        cx={47.5 + 7 * Math.cos(a * Math.PI / 180)}
        cy={47.5 + 7 * Math.sin(a * Math.PI / 180)}
        r="2"
        fill="#a1887f"
      />
    ))}
  </svg>
);

/* ── Flor 4: Girasol grande (→ Services) ── */
const FlowerGirasol = () => (
  <svg width="105" height="105" viewBox="0 0 105 105" fill="none">
    {[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map((angle, i) => (
      <ellipse
        key={i}
        cx="52.5" cy="14"
        rx="7" ry="22"
        fill={i % 2 === 0 ? '#ffb300' : '#ff8f00'}
        transform={`rotate(${angle} 52.5 52.5)`}
        opacity="0.95"
      />
    ))}
    <circle cx="52.5" cy="52.5" r="20" fill="#4e342e"/>
    <circle cx="52.5" cy="52.5" r="14" fill="#3e2723"/>
    {[0,30,60,90,120,150,180,210,240,270,300,330].map((a, i) => (
      <circle
        key={i}
        cx={52.5 + 9 * Math.cos(a * Math.PI / 180)}
        cy={52.5 + 9 * Math.sin(a * Math.PI / 180)}
        r="2.5"
        fill="#6d4c41"
      />
    ))}
    <circle cx="52.5" cy="52.5" r="5" fill="#5d4037"/>
  </svg>
);

/* ── Configuración de flores ── */
const FLOWERS = [
  {
    id: 1,
    name: 'Home',
    section: 'home',
    Component: FlowerRosa,
    stemColor: '#66bb6a',
    x: -130,
    y: -210,
    stemH: 160,
    delay: 0.1,
    swayDuration: 2.2,
  },
  {
    id: 2,
    name: 'Sobre mí',
    section: 'about',
    Component: FlowerHibisco,
    stemColor: '#43a047',
    x: -45,
    y: -250,
    stemH: 190,
    delay: 0.2,
    swayDuration: 2.7,
  },
  {
    id: 3,
    name: 'Proyectos',
    section: 'projects',
    Component: FlowerMargarita,
    stemColor: '#388e3c',
    x: 45,
    y: -250,
    stemH: 190,
    delay: 0.3,
    swayDuration: 2.4,
  },
  {
    id: 4,
    name: 'Servicios',
    section: 'services',
    Component: FlowerGirasol,
    stemColor: '#2e7d32',
    x: 140,
    y: -215,
    stemH: 160,
    delay: 0.4,
    swayDuration: 3.0,
  },
];

/* ══════════════════════════════════════
   FLORERO SVG
══════════════════════════════════════ */
const Vase = () => (
  <svg width="220" height="280" viewBox="0 0 220 280" fill="none">
    {/* Sombra */}
    <ellipse cx="110" cy="272" rx="80" ry="10" fill="rgba(62,132,64,0.15)"/>

    {/* Base */}
    <rect x="42" y="248" width="136" height="16" rx="8" fill="#f48a9b"/>
    <rect x="52" y="244" width="116" height="10" rx="5" fill="#f7aab8"/>

    {/* Cuerpo principal */}
    <path
      d="M60 60 C50 100 38 160 42 210 C46 240 80 248 110 248 C140 248 174 240 178 210 C182 160 170 100 160 60 Z"
      fill="#f7a8b8"
    />
    {/* Brillo lateral */}
    <path
      d="M68 80 C62 120 55 170 58 210 C60 230 72 242 85 245"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />

    {/* Círculo decorativo */}
    <ellipse cx="110" cy="165" rx="42" ry="42" fill="rgba(255,255,255,0.18)"/>
    <ellipse cx="110" cy="165" rx="30" ry="30" fill="rgba(255,255,255,0.12)"/>

    {/* Boca del florero */}
    <path
      d="M55 60 C65 30 155 30 165 60 L160 78 C150 55 70 55 60 78 Z"
      fill="#f48a9b"
    />
    <ellipse cx="110" cy="62" rx="55" ry="16" fill="#f7aab8"/>
    <ellipse cx="110" cy="58" rx="50" ry="13" fill="#fbc9d3"/>

    {/* Líneas decorativas horizontales */}
    <path d="M56 130 Q110 140 164 130" stroke="rgba(255,255,255,0.25)" strokeWidth="2" fill="none"/>
    <path d="M50 170 Q110 182 170 170" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none"/>
    <path d="M46 210 Q110 224 174 210" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none"/>
  </svg>
);

/* ══════════════════════════════════════
   COMPONENTE PRINCIPAL
══════════════════════════════════════ */
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
    <div className="flex items-center justify-center" style={{ minHeight: '520px' }}>
      <div className="relative" style={{ width: '220px', height: '280px' }}>

        {/* Flores */}
        {FLOWERS.map((flower) => {
          const FlowerComp = flower.Component;
          return (
            <motion.button
              key={flower.id}
              initial={{ scale: 0, opacity: 0, x: flower.x, y: flower.y }}
              animate={{
                scale: selected === flower.id ? 0 : 1,
                opacity: selected === flower.id ? 0 : 1,
                x: flower.x,
                y: flower.y,
              }}
              transition={{
                scale: { duration: 0.5, delay: flower.delay, type: 'spring', stiffness: 200, damping: 18 },
                opacity: { duration: 0.5, delay: flower.delay },
              }}
              onClick={() => handleClick(flower)}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer group"
              style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.18))' }}
              aria-label={`Ir a ${flower.name}`}
            >
              {/* Tallo */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  width: '6px',
                  height: `${flower.stemH}px`,
                  background: `linear-gradient(to top, ${flower.stemColor}cc, ${flower.stemColor})`,
                  zIndex: 0,
                }}
              />

              {/* Flor con balanceo */}
              <motion.div
                animate={{ rotate: [0, 6, -4, 2, 0] }}
                transition={{ duration: flower.swayDuration, repeat: Infinity, ease: 'easeInOut' }}
                style={{ zIndex: 1, position: 'relative' }}
              >
                <FlowerComp />
              </motion.div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.9 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[var(--color-fern)] text-[var(--color-parchment)] px-3 py-1 rounded-full text-sm whitespace-nowrap pointer-events-none shadow-lg"
                style={{ fontFamily: 'var(--font-accent)', zIndex: 10 }}
              >
                {flower.name}
              </motion.div>

              {/* Partículas al clic */}
              {selected === flower.id && (
                [...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                    style={{ background: i % 2 === 0 ? 'var(--color-pistacho)' : 'var(--color-melon)' }}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                      x: Math.cos((i * Math.PI * 2) / 10) * 60,
                      y: Math.sin((i * Math.PI * 2) / 10) * 60,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{ duration: 0.65 }}
                  />
                ))
              )}
            </motion.button>
          );
        })}

        {/* Florero */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.05, type: 'spring', stiffness: 140 }}
          className="absolute bottom-0 left-0"
          style={{ zIndex: 2 }}
        >
          <Vase />
        </motion.div>

      </div>
    </div>
  );
};

export default FloatingFlowers;