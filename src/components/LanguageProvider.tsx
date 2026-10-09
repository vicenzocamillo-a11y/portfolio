"use client";
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import { translations, HTML_LANG, Lang } from '@/lib/i18n';

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx>({
  lang: 'pt',
  setLang: () => {},
  t: (k) => k,
});

export function useLang() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang') as Lang | null;
      if (saved && translations[saved]) setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const t = useCallback(
    (key: string) => translations[lang][key] ?? translations.pt[key] ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LanguageContext.Provider>
  );
}
