"use client";
import { Fragment, ReactNode } from 'react';
import { useLang } from './LanguageProvider';

export default function T({ k, className }: { k: string; className?: string }) {
  const { t } = useLang();
  const text = t(k);
  const parts: ReactNode[] = [];
  const tags: Record<string, string> = {
    b: 'font-semibold text-white',
    g: 'text-gradient font-medium',
  };

  const regex = /\{([bg])\}(.*?)\{\/\1\}/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;

  while ((m = regex.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <span key={i++} className={tags[m[1]]}>
        {m[2]}
      </span>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));

  return <span className={className}>{parts}</span>;
}
