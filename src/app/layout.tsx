import '../styles/globals.css';
import Navbar from '../components/Navbar';
import LanguageProvider from '../components/LanguageProvider';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Vicenzo · Portfólio',
  description: 'Portfólio de Vicenzo, estudante de Informática.',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
