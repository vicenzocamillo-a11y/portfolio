"use client";
import { motion } from 'framer-motion';
import { FiMail, FiInstagram, FiPhone } from 'react-icons/fi';

const contacts = [
  {
    icon: FiMail,
    label: 'E-mail',
    value: 'vicenzocamillo@gmail.com',
    href: 'mailto:vicenzocamillo@gmail.com',
  },
  {
    icon: FiInstagram,
    label: 'Instagram',
    value: '@vicenzo25camillo',
    href: 'https://instagram.com/vicenzo25camillo',
  },
  {
    icon: FiPhone,
    label: 'WhatsApp',
    value: '+55 51 9701-6902',
    href: 'https://wa.me/555197016902',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-primary/80 mb-3">
            Entre em contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Contato</h2>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-primary via-purple to-accent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="group flex items-center gap-4 backdrop-glass p-4 rounded-xl transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <c.icon className="text-primary text-xl" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wide">{c.label}</div>
                  <div className="text-white/90 font-medium group-hover:text-accent transition-colors">
                    {c.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}