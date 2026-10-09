import { SiHtml5, SiCss3, SiJavascript, SiPython, SiC, SiCplusplus, SiGithub } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export type Project = {
  title: string;
  description: string;
  long: string;
  tech: string[];
  link: string;
  preview?: string;
  category: 'Projeto' | 'Sistema';
  accent: string;
  glyph: string;
};

export const projects: Project[] = [
  {
    title: 'nttlio',
    description: 'Loja de impressão 3D premium com carrinho e pagamento Pix.',
    long: 'E-commerce completo de impressão 3D: catálogo de produtos, carrinho, pagamento via Pix/Mercado Pago, área do cliente com acompanhamento de pedidos e painel administrativo.',
    tech: ['JavaScript', 'Three.js', 'Express', 'SQLite', 'Mercado Pago'],
    link: 'https://github.com/vicenzocamillo-a11y/nttlio',
    preview: 'https://vicenzocamillo-a11y.github.io/nttlio/',
    category: 'Projeto',
    accent: 'from-orange-400 to-rose-600',
    glyph: '▣',
  },
];

export const skills = [
  { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS', icon: SiCss3, color: '#1572b6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'Python', icon: SiPython, color: '#3776ab' },
  { name: 'C', icon: SiC, color: '#a8b9cc' },
  { name: 'C++', icon: SiCplusplus, color: '#00599c' },
  { name: 'Java', icon: FaJava, color: '#ed8b00' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
];

export const learningStack = [
  { name: 'C', color: '#00599C' },
  { name: 'C++', color: '#00599C' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Java', color: '#ED8B00' },
  { name: 'Rust', color: '#DEA584' },
  { name: 'Go', color: '#00ADD8' },
  { name: 'SQL', color: '#4479A1' },
  { name: 'Docker', color: '#2496ED' },
];