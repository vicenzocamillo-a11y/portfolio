"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { FiGithub, FiMail, FiInstagram, FiPhone } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-10">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div>
            <Link href="#home" className="flex items-center gap-2.5 mb-3">
              <Logo size={32} />
              <span className="font-display text-xl font-bold text-gradient">Vicenzo.</span>
            </Link>
            <p className="text-sm text-white/50 max-w-xs">
              Desenvolvedor Full Stack em formação. Construindo experiências que impressionam.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#about" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projetos</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Habilidades</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Conecte-se</h4>
            <div className="flex gap-3">
              <a
                href="mailto:vicenzocamillo@gmail.com"
                className="w-10 h-10 rounded-xl backdrop-glass flex items-center justify-center text-white/70 hover:text-primary hover:scale-110 transition-all"
                aria-label="E-mail"
              >
                <FiMail />
              </a>
              <a
                href="https://instagram.com/vicenzo25camillo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl backdrop-glass flex items-center justify-center text-white/70 hover:text-primary hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
              <a
                href="https://wa.me/555197016902"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl backdrop-glass flex items-center justify-center text-white/70 hover:text-primary hover:scale-110 transition-all"
                aria-label="WhatsApp"
              >
                <FiPhone />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Vicenzo. Todos os direitos reservados.</span>
          <span className="font-mono"></span>
        </div>
      </div>
    </footer>
  );
}
