"use client";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LANG_META, Lang } from '@/lib/i18n';

const DURATION = 1.4;
const TIMES = [0, 0.4, 0.62, 1];

export default function LanguageTransition({
  lang,
  onSwap,
  onDone,
}: {
  lang: Lang;
  onSwap: (l: Lang) => void;
  onDone: () => void;
}) {
  const meta = LANG_META[lang];
  const label = meta.label;
  const flag = meta.flag;

  useEffect(() => {
    const swapTimer = setTimeout(() => onSwap(lang), 560);
    const doneTimer = setTimeout(onDone, 1500);
    return () => {
      clearTimeout(swapTimer);
      clearTimeout(doneTimer);
    };
  }, [lang, onSwap, onDone]);

  return (
    <div className="fixed inset-0 z-[300] pointer-events-none flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-darkBg"
        style={{ transformOrigin: 'top' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        transition={{ duration: DURATION, times: TIMES, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 bg-darkBg"
        style={{ transformOrigin: 'bottom' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        transition={{ duration: DURATION, times: TIMES, ease: 'easeInOut', delay: 0.05 }}
      />
      <motion.div
        className="relative flex flex-col items-center gap-3"
        initial={{ opacity: 0, scale: 0.7, y: 30 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.7, 1, 1, 1.15], y: [30, 0, 0, 0] }}
        transition={{ duration: DURATION, times: TIMES, ease: 'easeInOut' }}
      >
        <motion.span
          className="text-6xl"
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.45 }}
        >
          {flag}
        </motion.span>
        <span className="font-display text-2xl font-bold tracking-[0.3em] text-gradient">{label}</span>
        <span className="text-sm text-white/60 font-mono" style={{ animation: 'glitch-in 0.6s ease-out 0.5s both' }}>
          {meta.done}
        </span>
      </motion.div>
    </div>
  );
}
