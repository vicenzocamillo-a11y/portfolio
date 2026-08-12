"use client";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { LANG_META, Lang } from '@/lib/i18n';

const SCRAMBLE = '!<>-_\\/[]{}=+*^?#$%&@';
const DURATION = 1.5;
const TIMES = [0, 0.3, 0.66, 1];

function randomChar() {
  return SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)];
}

function scrambleOnce(full: string, revealed: number) {
  let out = '';
  for (let i = 0; i < full.length; i++) {
    if (full[i] === ' ') out += ' ';
    else if (i < revealed) out += full[i];
    else out += randomChar();
  }
  return out;
}

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
  const fullRef = useRef(meta.label);
  const [label, setLabel] = useState(() => scrambleOnce(meta.label, 0));

  useEffect(() => {
    const swapTimer = setTimeout(() => onSwap(lang), 600);
    const doneTimer = setTimeout(onDone, 1560);
    return () => {
      clearTimeout(swapTimer);
      clearTimeout(doneTimer);
    };
  }, [lang, onSwap, onDone]);

  useEffect(() => {
    const full = fullRef.current;
    setLabel(scrambleOnce(full, 0));
    let i = 0;
    let interval: number | null = null;
    const startId = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i++;
        const revealed = Math.floor((full.length * i) / 10);
        setLabel(scrambleOnce(full, revealed));
        if (i >= 10) window.clearInterval(interval!);
      }, 40);
    }, 420);
    return () => {
      window.clearTimeout(startId);
      if (interval) window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[300] pointer-events-none overflow-hidden">
      <motion.div
        className="absolute rounded-full"
        style={{
          left: '50%',
          top: '115%',
          width: '210vmax',
          height: '210vmax',
          x: '-50%',
          y: '-50%',
          background:
            'radial-gradient(circle at 50% 30%, rgba(0,224,255,0.10) 0%, rgba(168,85,247,0.10) 40%, rgba(7,7,11,0.92) 78%, #07070b 100%)',
        }}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1, 0] }}
        transition={{ duration: DURATION, times: TIMES, ease: 'easeInOut' }}
      >
        <div
          className="absolute inset-0 rounded-full animate-spin [animation-duration:7s]"
          style={{
            background:
              'conic-gradient(from 90deg, rgba(0,224,255,0.9), rgba(255,228,94,0.9), rgba(168,85,247,0.9), rgba(0,224,255,0.9))',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
          <motion.span
            initial={{ scale: 0, rotate: -200, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.32 }}
            className="text-7xl drop-shadow-[0_0_28px_rgba(0,224,255,0.55)]"
          >
            {meta.flag}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.25 }}
            className="font-display text-3xl md:text-4xl font-bold tracking-[0.3em] text-white text-center px-4"
          >
            {label}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-xs font-mono uppercase tracking-[0.5em] text-white/60"
          >
            {meta.done}
          </motion.span>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.28, 0] }}
        transition={{ duration: DURATION, times: [0, 0.665, 0.7], ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(circle at 50% 115%, rgba(0,224,255,0.8), transparent 60%)' }}
      />
    </div>
  );
}
