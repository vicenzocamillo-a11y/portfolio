"use client";
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiCpu } from 'react-icons/fi';

const name = 'VICENZO';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
};
const letter = {
  hidden: { y: 80, opacity: 0, rotateX: -90 },
  show: { y: 0, opacity: 1, rotateX: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
};

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* floating tech badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[
          { icon: '</>', x: '8%', y: '22%', d: 0 },
          { icon: '{ }', x: '85%', y: '30%', d: 0.5 },
          { icon: '=', x: '15%', y: '70%', d: 1 },
          { icon: '#', x: '80%', y: '72%', d: 1.5 },
        ].map((b, i) => (
          <motion.span
            key={i}
            className="absolute font-mono text-2xl text-white/15"
            style={{ left: b.x, top: b.y }}
            animate={{ y: [0, -22, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: b.d }}
          >
            {b.icon}
          </motion.span>
        ))}
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/15 bg-white/5 text-xs text-white/70 backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        Disponível para novos projetos
      </motion.span>

      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight flex"
        style={{ perspective: 600 }}
      >
        {name.split('').map((c, i) => (
          <motion.span key={i} variants={letter} className="text-gradient inline-block">
            {c}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-6 max-w-2xl text-lg md:text-2xl text-white/70 font-light"
      >
        Estudante de <span className="text-white font-medium">Informática</span> transformando
        ideias em <span className="text-gradient font-medium">código criativo</span> e interfaces
        que impressionam.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="group relative overflow-hidden px-8 py-3.5 rounded-full font-semibold text-darkBg bg-gradient-to-r from-primary to-accent transition-transform"
        >
          <span className="relative z-10 flex items-center gap-2">
            <FiCpu /> Ver Projetos
          </span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="px-8 py-3.5 rounded-full font-medium text-white border border-white/20 hover:bg-white/10 backdrop-blur-md transition-colors"
        >
          Contato
        </motion.a>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 flex flex-col items-center text-white/40 hover:text-white transition-colors"
      >
        <span className="text-xs mb-2">Role para baixo</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <FiArrowDown className="text-lg" />
        </motion.div>
      </motion.a>
    </div>
  );
}
