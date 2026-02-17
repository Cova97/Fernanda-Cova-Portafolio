import { motion } from 'motion/react';
import FloatingFlowers from '../../components/common/FloatingFlowers';

const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-parchment)] to-[var(--color-pistacho)]/20"
    >
      {/* Solo el florero centrado */}
      <FloatingFlowers />
    </section>
  );
};

export default Home;