"use client";
import { motion } from 'framer-motion';
import { FiGlobe } from 'react-icons/fi';
import { useLang } from './LanguageProvider';
import { LANGS } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { lang, setLang, switching } = useLang();

  return (
    <div className="relative flex items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-1 py-1">
      <FiGlobe className="ml-2 mr-1 text-white/60 text-sm shrink-0" />
      {LANGS.map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            disabled={switching}
            className={`relative z-10 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
              active ? 'text-darkBg' : 'text-white/60 hover:text-white'
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{l}</span>
          </button>
        );
      })}
    </div>
  );
}
