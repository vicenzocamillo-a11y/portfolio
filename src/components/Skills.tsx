"use client";
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import SectionHeading from './SectionHeading';
import { useLang } from './LanguageProvider';

export default function Skills() {
  const { t } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 max-w-4xl"
    >
      <SectionHeading subtitle={t('skills.subtitle')} title={t('skills.title')} />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
        {skills.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-8 transition-colors hover:border-white/25 hover:bg-white/10"
            >
              <Icon
                className="text-5xl transition-transform duration-300 group-hover:scale-110"
                style={{ color: s.color }}
                aria-hidden
              />
              <span className="font-medium text-white">{s.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
