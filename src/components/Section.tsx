import { ReactNode } from 'react';

/** Page section with a left-aligned headline. `tone` alternates the background band. */
export default function Section({
  id,
  tone = 'bg',
  title,
  lead,
  children,
}: {
  id: string;
  tone?: 'bg' | 'surface';
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={tone === 'surface' ? 'bg-surface' : 'bg-bg'}>
      <div className="mx-auto max-w-page px-6 py-24 md:py-32">
        <header className="mb-12 max-w-[640px] md:mb-16">
          <h2 className="type-headline">{title}</h2>
          {lead && <p className="type-lead mt-3 text-muted">{lead}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
