"use client";
import Section from './Section';
import T from './T';
import { useLang } from './LanguageProvider';

const facts = [1, 2, 3, 4, 5, 6].map((n) => ({
  labelKey: `about.fact${n}.label`,
  valueKey: `about.fact${n}.value`,
}));

export default function About() {
  const { t } = useLang();
  return (
    <Section id="about" tone="surface" title={t('about.title')} lead={t('about.lead')}>
      <div className="grid gap-6 text-muted md:grid-cols-2 md:gap-12">
        <p>
          <T k="about.p1" />
        </p>
        <p>
          <T k="about.p2" />
        </p>
      </div>

      <dl className="mt-16 grid gap-x-12 sm:grid-cols-2 md:mt-20 md:grid-cols-3">
        {facts.map((f) => (
          <div key={f.labelKey} className="border-t border-line py-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-muted">
              {t(f.labelKey)}
            </dt>
            <dd className="mt-1.5 text-[17px] font-semibold text-fg">{t(f.valueKey)}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
