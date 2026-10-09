"use client";
import { projects } from '@/lib/data';
import Section from '../Section';
import Chevron from '../Chevron';
import LivePreview from './LivePreview';
import { useLang } from '../LanguageProvider';

export default function ProjectsSection() {
  const { t } = useLang();
  return (
    <Section id="projects" title={t('projects.title')} lead={t('projects.lead')}>
      {projects.length > 0 ? (
        <div className="space-y-6">
          {projects.map((p) => (
            <article
              key={p.key}
              className="grid overflow-hidden rounded-tile bg-surface md:grid-cols-[5fr_7fr]"
            >
              <div className="flex flex-col p-8 md:p-12">
                <h3 className="text-[40px] font-bold leading-[1.1] tracking-[-0.025em]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[21px] font-semibold leading-snug tracking-[-0.015em]">
                  {t(`project.${p.key}.description`)}
                </p>
                <p className="mt-4 text-muted">{t(`project.${p.key}.long`)}</p>
                <p className="mt-6 text-sm text-muted">{p.tech.join(' · ')}</p>

                <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 md:mt-auto md:pt-10">
                  {p.preview && (
                    <a href={p.preview} target="_blank" rel="noopener noreferrer" className="link-chevron">
                      {t('projects.preview')}
                      <Chevron />
                    </a>
                  )}
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="link-chevron">
                    {t('projects.github')}
                    <Chevron />
                  </a>
                </div>
              </div>

              {p.preview && (
                <div className="px-8 pb-8 md:py-12 md:pl-0 md:pr-12">
                  <LivePreview url={p.preview} title={p.title} label={t('projects.livePreview')} />
                </div>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="text-muted">{t('projects.empty')}</p>
      )}
    </Section>
  );
}
