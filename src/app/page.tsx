import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsSection from '../components/Projects/ProjectsSection';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
