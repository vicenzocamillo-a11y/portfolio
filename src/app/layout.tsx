import '../styles/globals.css';
import Navbar from '../components/Navbar';
import LoadingScreen from '../components/LoadingScreen';
import CustomCursor from '../components/CustomCursor';
import ScrollProgress from '../components/ScrollProgress';
import LanguageProvider from '../components/LanguageProvider';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Vicenzo · Portfólio',
  description: 'Portfólio de projetos de TI de Vicenzo — estudante de Informática.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-darkBg text-white min-h-screen flex flex-col relative">
        <LanguageProvider>
          <div className="bg-aurora" />
          <div className="grid-overlay" />
          <CustomCursor />
          <ScrollProgress />
          <LoadingScreen />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
