"use client";
import { motion } from 'framer-motion';
import { useLang } from './LanguageProvider';
import { LANGS } from '@/lib/i18n';

/** Segmented control; the selected pill slides between options. */
export default function LanguageSwitcher({ layoutId = 'lang-pill' }: { layoutId?: string }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t('nav.language')}
      className="inline-flex items-center rounded-full bg-fg/[0.07] p-0.5"
    >
      {LANGS.map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={`relative h-7 min-w-[36px] rounded-full px-2 text-[11px] font-semibold uppercase tracking-[0.04em] transition-colors duration-200 ${
              active ? 'text-fg' : 'text-muted hover:text-fg'
            }`}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-raised shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
                transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
              />
            )}
            <span className="relative">{l}</span>
          </button>
        );
      })}
    </div>
  );
}
