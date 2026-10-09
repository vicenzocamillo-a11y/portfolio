"use client";
import { contacts } from '@/lib/data';
import Section from './Section';
import Chevron from './Chevron';
import { useLang } from './LanguageProvider';

export default function Contact() {
  const { t } = useLang();
  return (
    <Section id="contact" title={t('contact.title')} lead={t('contact.lead')}>
      <ul className="max-w-[640px] overflow-hidden rounded-[20px] bg-surface">
        {contacts.map((c, i) => (
          <li key={c.href} className={i > 0 ? 'border-t border-line/70' : undefined}>
            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 px-6 py-4 transition-colors duration-150 hover:bg-fg/[0.04] active:bg-fg/[0.08]"
            >
              <span className="min-w-0">
                <span className="block text-[13px] text-muted">{t(c.labelKey)}</span>
                <span className="block truncate text-[17px] text-fg">{c.value}</span>
              </span>
              <span className="text-muted">
                <Chevron />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
