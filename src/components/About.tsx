"use client";
import { motion } from 'framer-motion';
import { FiMapPin, FiBookOpen, FiCode, FiZap, FiServer, FiDatabase } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import T from './T';
import { useLang } from './LanguageProvider';

const facts = [
  { icon: FiBookOpen, labelKey: 'about.fact1.label', valueKey: 'about.fact1.value' },
  { icon: FiMapPin, labelKey: 'about.fact2.label', valueKey: 'about.fact2.value' },
  { icon: FiCode, labelKey: 'about.fact3.label', valueKey: 'about.fact3.value' },
  { icon: FiServer, labelKey: 'about.fact4.label', valueKey: 'about.fact4.value' },
  { icon: FiDatabase, labelKey: 'about.fact5.label', valueKey: 'about.fact5.value' },
  { icon: FiZap, labelKey: 'about.fact6.label', valueKey: 'about.fact6.value' },
];

export default function About() {
  const { t } = useLang();
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <SectionHeading subtitle={t('about.subtitle')} title={t('about.title')} />

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
                src="images/vicenzo-photo.png"
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
            <T k="about.p1" />
          </p>
          <p className="text-white/60 leading-relaxed">
            <T k="about.p2" />
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
                  <div className="text-xs text-white/40 uppercase tracking-wide">{t(f.labelKey)}</div>
                  <div className="text-sm text-white/85 font-medium">{t(f.valueKey)}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}