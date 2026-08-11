export type Project = {
  title: string;
  description: string;
  long: string;
  tech: string[];
  link: string;
  category: 'Projeto' | 'Sistema';
  accent: string;
  glyph: string;
};

export const projects: Project[] = [];

export const skills = [
  { name: 'HTML5', level: 100, color: '#e34f26' },
  { name: 'CSS3', level: 93, color: '#38bdf8' },
  { name: 'Tailwind CSS', level: 10, color: '#38bdf8' },
  { name: 'JavaScript', level: 37, color: '#f7df1e' },
  { name: 'React / Next.js', level: 14, color: '#00e0ff' },
  { name: 'Node.js', level: 20, color: '#83cc66' },
  { name: 'Git / GitHub', level: 67, color: '#a855f7' },
  { name: 'TypeScript', level: 76, color: '#3178c6' },
  { name: 'UI / UX Design', level: 100, color: '#ffe45e' },
  { name: 'C', level: 78, color: '#00599C' },
  { name: 'C++', level: 15, color: '#00599C' },
  { name: 'Python', level: 20, color: '#3776AB' },
  { name: 'Java', level: 23, color: '#ED8B00' },
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