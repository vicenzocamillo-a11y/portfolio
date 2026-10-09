"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { useLang } from './LanguageProvider';
import LanguageSwitcher from './LanguageSwitcher';

const sections = [
  { id: 'about', key: 'nav.about' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'contact', key: 'nav.contact' },
];

const spring = { type: 'spring', bounce: 0, duration: 0.4 } as const;

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const mid = window.innerHeight / 2;
      let current = '';
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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`relative z-10 transition-[background-color,box-shadow] duration-300 ${
          solid
            ? 'bg-[rgb(var(--nav)/0.78)] shadow-[0_1px_0_rgb(var(--line)/0.7)] backdrop-blur-xl backdrop-saturate-150'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-12 max-w-page items-center justify-between px-6">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-fg transition-opacity hover:opacity-70"
          >
            <Logo size={18} />
            <span className="text-[15px] font-semibold tracking-[-0.01em]">Vicenzo</span>
          </a>

          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-7 md:flex">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    aria-current={active === sec.id ? 'true' : undefined}
                    className={`text-xs transition-colors duration-200 ${
                      active === sec.id ? 'text-fg' : 'text-fg/70 hover:text-fg'
                    }`}
                  >
                    {t(sec.key)}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t('nav.close') : t('nav.menu')}
              className="-mr-2 flex h-11 w-11 items-center justify-center text-fg md:hidden"
            >
              <span className="relative block h-3 w-[18px]">
                <span
                  className={`absolute left-0 h-px w-full bg-current transition-transform duration-300 ${
                    open ? 'top-1.5 rotate-45' : 'top-0.5'
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-full bg-current transition-transform duration-300 ${
                    open ? 'top-1.5 -rotate-45' : 'top-[10px]'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-12 bg-bg md:hidden"
          >
            <motion.ul
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={spring}
              className="mx-auto max-w-page px-6 pt-6"
            >
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[28px] font-semibold tracking-[-0.02em] text-fg active:text-muted"
                  >
                    {t(sec.key)}
                  </a>
                </li>
              ))}
              <li className="mt-8">
                <LanguageSwitcher layoutId="lang-pill-mobile" />
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
