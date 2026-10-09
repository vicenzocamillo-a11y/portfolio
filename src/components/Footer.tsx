"use client";
import { useLang } from './LanguageProvider';

const links = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.contact', href: '#contact' },
];

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-surface text-xs text-muted">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} Vicenzo. {t('footer.rights')}
        </span>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-fg hover:underline">
                {t(l.key)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/vicenzocamillo-a11y"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg hover:underline"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
