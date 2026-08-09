"use client";
import { motion } from 'framer-motion';

export default function SectionHeading({
  subtitle,
  title,
}: {
  subtitle: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-4"
    >
      <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-primary/80 mb-3">
        {subtitle}
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white">{title}</h2>
      <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-primary via-purple to-accent" />
    </motion.div>
  );
}
