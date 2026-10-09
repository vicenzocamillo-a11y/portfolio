import type { IconType } from 'react-icons';
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiC, SiCplusplus, SiGithub } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export type Project = {
  /** Prefix for the translated `project.<key>.description` / `.long` strings. */
  key: string;
  title: string;
  tech: string[];
  link: string;
  preview?: string;
};

export const projects: Project[] = [
  {
    key: 'nttlio',
    title: 'nttlio',
    tech: ['JavaScript', 'Three.js', 'Express', 'SQLite', 'Mercado Pago'],
    link: 'https://github.com/vicenzocamillo-a11y/nttlio',
    preview: 'https://vicenzocamillo-a11y.github.io/nttlio/',
  },
];

export type Skill = {
  name: string;
  icon: IconType;
  /** Brand color; omitted for monochrome marks that should follow the text color. */
  color?: string;
};

export const skills: Skill[] = [
  { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS', icon: SiCss3, color: '#1572b6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f0db4f' },
  { name: 'Python', icon: SiPython, color: '#3776ab' },
  { name: 'C', icon: SiC, color: '#659ad2' },
  { name: 'C++', icon: SiCplusplus, color: '#00599c' },
  { name: 'Java', icon: FaJava, color: '#ed8b00' },
  { name: 'GitHub', icon: SiGithub },
];

export const contacts = [
  {
    labelKey: 'contact.email',
    value: 'vicenzocamillo@gmail.com',
    href: 'mailto:vicenzocamillo@gmail.com',
  },
  {
    labelKey: 'contact.instagram',
    value: '@vicenzo25camillo',
    href: 'https://instagram.com/vicenzo25camillo',
  },
  {
    labelKey: 'contact.whatsapp',
    value: '+55 51 9701-6902',
    href: 'https://wa.me/555197016902',
  },
];
