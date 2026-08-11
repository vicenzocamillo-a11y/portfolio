"use client";
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';
import SectionHeading from '../SectionHeading';

export default function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 max-w-7xl"
    >
      <SectionHeading subtitle="O que fiz" title="Projetos" />

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center">
          <p className="text-white/60">Em breve, novos projetos estarão aqui.</p>
        </div>
      )}
    </motion.div>
  );
}