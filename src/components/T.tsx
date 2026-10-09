"use client";
import { ReactNode } from 'react';
import { useLang } from './LanguageProvider';

/** Renders a translation, turning `{b}…{/b}` into emphasized text. */
export default function T({ k, className }: { k: string; className?: string }) {
  const { t } = useLang();
  const text = t(k);
  const parts: ReactNode[] = [];
  const regex = /\{b\}(.*?)\{\/b\}/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;

  while ((m = regex.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <span key={i++} className="font-semibold text-fg">
        {m[1]}
      </span>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));

  return <span className={className}>{parts}</span>;
}
