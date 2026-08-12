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
    const doneTimer = setTimeout(onDone, 780);
    return () => {
      clearTimeout(swapTimer);
      clearTimeout(doneTimer);
    };
  }, [lang, onSwap, onDone]);

  return (
    <div className="fixed inset-0 z-[300] pointer-events-none flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-darkBg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.16, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
      />
      <motion.div
        className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent"
        initial={{ left: '0%', opacity: 0 }}
        animate={{ left: '100%', opacity: [0, 1, 0] }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], times: [0, 0.5, 1] }}
      />
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.18 }}
        className="relative"
      >
        <span className="font-display text-2xl font-semibold tracking-[0.35em] text-white/90 uppercase">
          {LANG_META[lang]}
        </span>
      </motion.div>
      <motion.div
        className="absolute bottom-10 w-16 h-[2px] rounded-full bg-gradient-to-r from-primary to-purple"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.22, ease: 'easeOut' }}
      />
    </div>
  );
}
