"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Sobre' },
  { id: 'projects', label: 'Projetos' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'contact', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const mid = window.innerHeight / 2;
      let current = 'home';
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= mid) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-darkBg/70 backdrop-blur-xl border-b border-white/10 py-2'
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="#home" className="group flex items-center gap-2.5">
          <span className="transition-transform group-hover:scale-110">
            <Logo size={32} />
          </span>
          <span className="font-display text-xl font-bold text-gradient">Vicenzo.</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center space-x-8">
          {sections.map((sec) => (
            <li key={sec.id} className="relative">
              <Link
                href={`#${sec.id}`}
                className={`text-sm font-medium transition-colors ${
                  active === sec.id ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {sec.label}
              </Link>
              {active === sec.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-purple rounded-full"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white/80 p-2"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-darkBg/95 backdrop-blur-xl border-b border-white/10 px-6 space-y-3 pt-3 pb-6"
          >
            {sections.map((sec) => (
              <li key={sec.id}>
                <Link
                  href={`#${sec.id}`}
                  onClick={() => setOpen(false)}
                  className={`block text-lg font-medium ${active === sec.id ? 'text-primary' : 'text-white/70'}`}
                >
                  {sec.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
