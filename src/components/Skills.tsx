"use client";
import { skills } from '@/lib/data';
import Section from './Section';
import { useLang } from './LanguageProvider';

export default function Skills() {
  const { t } = useLang();
  return (
    <Section id="skills" tone="surface" title={t('skills.title')} lead={t('skills.lead')}>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
        {skills.map(({ name, icon: Icon, color }) => (
          <li
            key={name}
            className="flex flex-col items-center gap-4 rounded-[20px] bg-raised px-4 py-9"
          >
            <Icon size={44} aria-hidden="true" style={color ? { color } : undefined} className="text-fg" />
            <span className="text-[15px] font-semibold">{name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
