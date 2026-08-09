"use client";
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import { FiExternalLink } from 'react-icons/fi';
import type { Project } from '../../lib/data';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;
    VanillaTilt.init(el, {
      max: 10,
      scale: 1.03,
      speed: 500,
      glare: true,
      'max-glare': 0.3,
      perspective: 1000,
    });
    return () => {
      (el as any).vanillaTilt?.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div ref={tiltRef} className="tilt-card backdrop-glass p-5 h-full group">
        <div className="tilt-inner">
          {/* Preview */}
          <div
            className={`relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br ${project.accent} mb-5`}
          >
            {/* Decorative code window */}
            <div className="absolute inset-0 bg-darkBg/40 backdrop-blur-[1px]" />
            <div className="absolute top-3 left-3 flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-7xl text-white/90 drop-shadow-lg">
                {project.glyph}
              </span>
            </div>
            <div className="absolute bottom-3 left-4 right-4 font-mono text-[10px] text-white/70 truncate">
              {'> '}coding{project.title.toLowerCase()}.tsx
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-darkBg/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-5 text-center">
              <p className="text-sm text-white/80 leading-relaxed">{project.long}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                <FiExternalLink /> Ver no GitHub
              </a>
            </div>

            <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-1 rounded-full bg-darkBg/60 text-white/80 border border-white/10">
              {project.category}
            </span>
          </div>

          {/* Info */}
          <h3 className="text-xl font-display font-semibold text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-white/60">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs font-mono text-white/80 rounded-md bg-white/5 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
