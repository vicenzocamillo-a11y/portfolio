"use client";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LANG_META, Lang } from '@/lib/i18n';

const DURATION = 1.5;

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
    const swapTimer = setTimeout(() => onSwap(lang), 800);
    const doneTimer = setTimeout(onDone, 1550);
    return () => {
      clearTimeout(swapTimer);
      clearTimeout(doneTimer);
    };
  }, [lang, onSwap, onDone]);

  const meta = LANG_META[lang];

  return (
    <div className="fixed inset-0 z-[300] pointer-events-none overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: DURATION, times: [0, 0.24, 0.76, 1], ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse at 50% 45%, rgba(0,224,255,0.16) 0%, rgba(168,85,247,0.12) 40%, rgba(7,7,11,0.9) 78%, #07070b 100%)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      >
        <div
          className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full opacity-70"
          style={{
            background: 'radial-gradient(circle, rgba(0,224,255,0.55), transparent 60%)',
            filter: 'blur(110px)',
            animation: 'float 5s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -bottom-[15%] -right-[10%] w-[55vw] h-[55vw] rounded-full opacity-70"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.55), transparent 60%)',
            filter: 'blur(110px)',
            animation: 'float 5s ease-in-out -2.5s infinite',
          }}
        />
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <motion.span
          initial={{ opacity: 0, y: 18, filter: 'blur(14px)' }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [18, 0, 0, -14],
            filter: ['blur(14px)', 'blur(0px)', 'blur(0px)', 'blur(10px)'],
          }}
          transition={{ duration: DURATION, times: [0.28, 0.44, 0.68, 0.84], ease: 'easeOut' }}
          className="font-display text-4xl md:text-6xl font-semibold tracking-[0.18em] text-white uppercase px-4 text-center"
        >
          {meta.label}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: DURATION, times: [0.38, 0.5, 0.64, 0.8] }}
          className="text-xs font-mono uppercase tracking-[0.5em] text-white/45"
        >
          {meta.sub}
        </motion.span>
        <motion.div
          className="w-16 h-[2px] rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: DURATION, times: [0.4, 0.52, 0.64, 0.78], ease: 'easeOut' }}
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,224,255,0.8), transparent)' }}
        />
      </div>
    </div>
  );
}
