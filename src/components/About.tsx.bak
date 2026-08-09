"use client";
import { motion } from 'framer-motion';
import { FiMapPin, FiBookOpen, FiCode, FiZap, FiServer, FiDatabase } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const facts = [
  { icon: FiBookOpen, label: 'Ensino Médio', value: '1º Ano · Técnico em Informática' },
  { icon: FiMapPin, label: 'Localização', value: 'Brasil · Remoto' },
  { icon: FiCode, label: 'Front-end', value: 'React, Next.js, TypeScript, Tailwind' },
  { icon: FiServer, label: 'Back-end', value: 'Node.js, APIs, Banco de Dados, Auth' },
  { icon: FiDatabase, label: 'Sistemas', value: 'C, Python, Java — lógica e algoritmos' },
  { icon: FiZap, label: 'Foco', value: 'Full Stack & UI/UX Design' },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <SectionHeading subtitle="Quem sou" title="Sobre Mim" />

      <div className="grid md:grid-cols-5 gap-10 items-center mt-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <div className="relative aspect-square rounded-2xl backdrop-glass overflow-hidden bg-gradient-to-br from-primary/10 to-purple/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple/5" />
            <div className="relative z-10 w-72 h-72 mx-auto">
              <img
                src="/images/vicenzo-photo.png"
                alt="Vicenzo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/30" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/30" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/30" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/30" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3 space-y-5"
        >
          <p className="text-lg text-white/70 leading-relaxed">
            Sou <span className="text-white font-medium">Vicenzo</span>, estudante do 1º ano do
            ensino médio com curso técnico em <span className="text-white font-medium">Informática</span>.
            Descobri na programação uma forma de transformar imaginação em realidade — gosto de
            construir interfaces que não apenas funcionam, mas causam impressão.
          </p>
          <p className="text-white/60 leading-relaxed">
            Atuo como <span className="text-white font-medium">desenvolvedor Full Stack</span>:
            no front-end crio experiências fluidas com React, Next.js e TypeScript; no back-end
            construo APIs, autenticação e trabalho com bancos de dados. Paralelamente, estou
            finalizando a base em <span className="text-white font-medium">linguagem C</span> e
            já iniciei estudos em <span className="text-white font-medium">Python</span> e
            <span className="text-white font-medium">Java</span> para expandir minha visão de
            sistemas e algoritmos.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            {facts.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="backdrop-glass p-4 flex items-start gap-3"
              >
                <f.icon className="text-primary text-xl shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wide">{f.label}</div>
                  <div className="text-sm text-white/85 font-medium">{f.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}