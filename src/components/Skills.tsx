"use client";
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 max-w-4xl"
    >
      <SectionHeading subtitle="O que uso" title="Habilidades" />

      <div className="space-y-6 mt-12">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-white">{s.name}</span>
              <span className="text-sm font-mono text-primary">{s.level}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: s.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
