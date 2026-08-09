"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(interval);
          setTimeout(() => setShow(false), 400);
          return 100;
        }
        return Math.min(100, c + Math.floor(Math.random() * 18) + 6);
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-darkBg flex flex-col items-center justify-center z-[200]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-8"
      >
        <Logo size={88} withGlow animate />
      </motion.div>
          </motion.div>
          <div className="font-display text-2xl font-bold text-gradient mb-8">
            Vicenzo
          </div>
          <div className="w-56 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-purple to-accent"
              animate={{ width: `${count}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
          <div className="mt-4 text-sm font-mono text-white/50">{count}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
