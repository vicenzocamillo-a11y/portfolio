"use client";
import { motion } from 'framer-motion';
import { useLang } from './LanguageProvider';
import Chevron from './Chevron';

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring' as const, bounce: 0, duration: 0.9, delay },
});

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="home" className="bg-bg pt-12">
      <div className="mx-auto max-w-page px-6 pt-20 text-center md:pt-28">
        <motion.h1 {...rise(0)} className="type-hero">
          Vicenzo.
        </motion.h1>

        <motion.p {...rise(0.08)} className="type-lead mx-auto mt-5 max-w-[700px] text-muted">
          {t('hero.lead')}
        </motion.p>

        <motion.div
          {...rise(0.16)}
          className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8"
        >
          <a href="#projects" className="btn-primary">
            {t('hero.cta')}
          </a>
          <a href="#contact" className="link-chevron text-[17px]">
            {t('hero.contact')}
            <Chevron />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', bounce: 0, duration: 1.2, delay: 0.25 }}
        className="mx-auto max-w-page px-6 pb-24 pt-16 md:pb-32 md:pt-20"
      >
        <div className="overflow-hidden rounded-tile bg-surface">
          <img
            src="images/vicenzo.jpg"
            alt="Vicenzo encostado em uma Ferrari vermelha em um showroom"
            width={1024}
            height={1024}
            className="aspect-square w-full object-cover sm:aspect-[4/3]"
            style={{ objectPosition: '50% 45%' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
