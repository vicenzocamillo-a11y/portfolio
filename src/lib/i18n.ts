export type Lang = 'pt' | 'en';

export const LANGS: Lang[] = ['pt', 'en'];

type Dict = Record<string, string>;

export const translations: Record<Lang, Dict> = {
  pt: {
    'nav.home': 'Home',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',
    'nav.menu': 'Menu',

    'hero.badge': 'Disponível para novos projetos',
    'hero.p1': 'Estudante de {b}Informática{/b} transformando ideias em {g}código criativo{/g} e interfaces que impressionam.',
    'hero.cta': 'Ver Projetos',
    'hero.contact': 'Contato',
    'hero.scroll': 'Role para baixo',

    'about.subtitle': 'Quem sou',
    'about.title': 'Sobre Mim',
    'about.p1': 'Sou {b}Vicenzo{/b}, estudante do 1º ano do ensino médio com curso técnico em {b}Informática{/b}. Descobri na programação uma forma de transformar imaginação em realidade — gosto de construir interfaces que não apenas funcionam, mas causam impressão.',
    'about.p2': 'Atuo como {b}desenvolvedor Full Stack{/b}: no front-end crio experiências fluidas com React, Next.js e TypeScript; no back-end construo APIs, autenticação e trabalho com bancos de dados. Paralelamente, estou finalizando a base em {b}linguagem C{/b} e já iniciei estudos em {b}Python{/b} e {b}Java{/b} para expandir minha visão de sistemas e algoritmos.',
    'about.fact1.label': 'Ensino Médio',
    'about.fact1.value': '1º Ano · Técnico em Informática',
    'about.fact2.label': 'Localização',
    'about.fact2.value': 'Brasil · Remoto',
    'about.fact3.label': 'Front-end',
    'about.fact3.value': 'React, Next.js, TypeScript, Tailwind',
    'about.fact4.label': 'Back-end',
    'about.fact4.value': 'Node.js, APIs, Banco de Dados, Auth',
    'about.fact5.label': 'Sistemas',
    'about.fact5.value': 'C, Python, Java — lógica e algoritmos',
    'about.fact6.label': 'Foco',
    'about.fact6.value': 'Full Stack & UI/UX Design',

    'projects.subtitle': 'O que fiz',
    'projects.title': 'Projetos',
    'projects.empty': 'Em breve, novos projetos estarão aqui.',

    'skills.subtitle': 'O que uso',
    'skills.title': 'Habilidades',

    'contact.subtitle': 'Entre em contato',
    'contact.title': 'Contato',
    'contact.email': 'E-mail',
    'contact.instagram': 'Instagram',
    'contact.whatsapp': 'WhatsApp',

    'footer.tagline': 'Desenvolvedor Full Stack em formação. Construindo experiências que impressionam.',
    'footer.nav': 'Navegação',
    'footer.connect': 'Conecte-se',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.about': 'Sobre',
    'footer.projects': 'Projetos',
    'footer.skills': 'Habilidades',
    'footer.contact': 'Contato',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',

    'hero.badge': 'Available for new projects',
    'hero.p1': '{b}IT{/b} student turning ideas into {g}creative code{/g} and interfaces that impress.',
    'hero.cta': 'View Projects',
    'hero.contact': 'Contact',
    'hero.scroll': 'Scroll down',

    'about.subtitle': 'Who I am',
    'about.title': 'About Me',
    'about.p1': "I'm {b}Vicenzo{/b}, a 1st-year high school student on a {b}technical IT{/b} course. I found in programming a way to turn imagination into reality — I love building interfaces that not only work, but impress.",
    'about.p2': "I work as a {b}Full Stack developer{/b}: on the front-end I craft fluid experiences with React, Next.js and TypeScript; on the back-end I build APIs, authentication and work with databases. In parallel, I'm finishing my foundation in the {b}C language{/b} and have started studying {b}Python{/b} and {b}Java{/b} to broaden my view of systems and algorithms.",
    'about.fact1.label': 'High School',
    'about.fact1.value': '1st Year · IT Technician',
    'about.fact2.label': 'Location',
    'about.fact2.value': 'Brazil · Remote',
    'about.fact3.label': 'Front-end',
    'about.fact3.value': 'React, Next.js, TypeScript, Tailwind',
    'about.fact4.label': 'Back-end',
    'about.fact4.value': 'Node.js, APIs, Databases, Auth',
    'about.fact5.label': 'Systems',
    'about.fact5.value': 'C, Python, Java — logic and algorithms',
    'about.fact6.label': 'Focus',
    'about.fact6.value': 'Full Stack & UI/UX Design',

    'projects.subtitle': "What I've built",
    'projects.title': 'Projects',
    'projects.empty': 'Coming soon — new projects will be here.',

    'skills.subtitle': 'What I use',
    'skills.title': 'Skills',

    'contact.subtitle': 'Get in touch',
    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.instagram': 'Instagram',
    'contact.whatsapp': 'WhatsApp',

    'footer.tagline': 'Full Stack developer in training. Building experiences that impress.',
    'footer.nav': 'Navigation',
    'footer.connect': 'Connect',
    'footer.rights': 'All rights reserved.',
    'footer.about': 'About',
    'footer.projects': 'Projects',
    'footer.skills': 'Skills',
    'footer.contact': 'Contact',
  },
};
