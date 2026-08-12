"use client";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LANG_META, Lang } from '@/lib/i18n';

export default function LanguageTransition({
  lang,
  onSwap,
  onDone,
}: {
  lang: Lang;
  onSwap: (l: Lang) => void;
  onDone: () => void;
}) {
  useEffect(() => {
    const swapTimer = setTimeout(() => onSwap(lang), 420);
    const doneTimer = setTimeout(onDone, 740);
    return () => {
      clearTimeout(swapTimer);
      clearTimeout(doneTimer);
    };
  }, [lang, onSwap, onDone]);

  const meta = LANG_META[lang];

  return (
    <div className="fixed inset-0 z-[300] pointer-events-none overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-darkBg"
        style={{ transformOrigin: 'top' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        transition={{ duration: 0.72, times: [0, 0.24, 0.64, 1], ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      </motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
          transition={{ duration: 0.72, times: [0.22, 0.32, 0.58, 0.72], ease: 'easeOut' }}
          className="font-display text-5xl md:text-6xl font-semibold tracking-[0.18em] text-white uppercase"
        >
          {meta.label}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.72, times: [0.3, 0.38, 0.54, 0.66] }}
          className="text-xs font-mono uppercase tracking-[0.4em] text-white/50"
        >
          {meta.sub}
        </motion.span>
      </div>
    </div>
  );
}
