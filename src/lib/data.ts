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

export const projects: Project[] = [
  {
    title: 'TaskFlow',
    description: 'Gerenciador de tarefas com drag-and-drop e persistência local.',
    long: 'Aplicação web completa para organizar tarefas em colunas (Kanban), com arrastar e soltar, prioridades e armazenamento no navegador.',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    link: 'https://example.com',
    category: 'Projeto',
    accent: 'from-cyan-400 to-blue-600',
    glyph: '☑',
  },
  {
    title: 'NeoPortfolio',
    description: 'Portfólio 3D com animações avançadas de scroll e parallax.',
    long: 'Landing page futurista com cursor customizado, tilt 3D, aurora animada e microinterações. Construído como vitrine de habilidades front-end.',
    tech: ['Next.js', 'Three.js', 'GSAP'],
    link: 'https://example.com',
    category: 'Projeto',
    accent: 'from-fuchsia-500 to-purple-700',
    glyph: '◆',
  },
  {
    title: 'OraculoBot',
    description: 'Chatbot conversacional conectado a uma API de IA.',
    long: 'Bot de chat com histórico, streaming de respostas e UI responsiva. Backend em Node procesa as mensagens e integra com modelo de linguagem.',
    tech: ['React', 'Node.js', 'OpenAI API'],
    link: 'https://example.com',
    category: 'Sistema',
    accent: 'from-amber-400 to-orange-600',
    glyph: '✦',
  },
  {
    title: 'StockSys',
    description: 'Sistema de controle de estoque com cadastro e relatórios.',
    long: 'Sistema completo de gestão: produtos, entradas/saídas, dashboard com gráficos e exportação de relatórios. Foco em lógica de negócio e dados.',
    tech: ['PHP', 'MySQL', 'Chart.js'],
    link: 'https://example.com',
    category: 'Sistema',
    accent: 'from-emerald-400 to-teal-600',
    glyph: '▤',
  },
];

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