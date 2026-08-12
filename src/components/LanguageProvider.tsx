"use client";
import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import LanguageTransition from './LanguageTransition';
import { translations } from '@/lib/i18n';

type Ctx = {
  lang: 'pt' | 'en';
  setLang: (l: 'pt' | 'en') => void;
  toggle: () => void;
  switching: boolean;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx>({
  lang: 'pt',
  setLang: () => {},
  toggle: () => {},
  switching: false,
  t: (k) => k,
});

export function useLang() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<'pt' | 'en'>('pt');
  const [pending, setPending] = useState<'pt' | 'en' | null>(null);
  const [switching, setSwitching] = useState(false);
  const langRef = useRef<'pt' | 'en'>('pt');
  const switchingRef = useRef(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'pt' || saved === 'en') {
        setLangState(saved);
        langRef.current = saved;
      }
    } catch {}
  }, []);

  useEffect(() => {
    langRef.current = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback((l: 'pt' | 'en') => {
    if (l === langRef.current || switchingRef.current) return;
    switchingRef.current = true;
    setPending(l);
    setSwitching(true);
  }, []);

  const toggle = useCallback(() => {
    setLang(langRef.current === 'pt' ? 'en' : 'pt');
  }, [setLang]);

  const swap = useCallback((l: 'pt' | 'en') => {
    setLangState(l);
  }, []);

  const done = useCallback(() => {
    switchingRef.current = false;
    setPending(null);
    setSwitching(false);
  }, []);

  const t = useCallback(
    (key: string) => translations[lang][key] ?? translations.pt[key] ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, switching, t }}>
      {children}
      {switching && pending && (
        <LanguageTransition lang={pending} onSwap={swap} onDone={done} />
      )}
    </LanguageContext.Provider>
  );
}
