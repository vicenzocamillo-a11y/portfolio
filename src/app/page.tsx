import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsSection from '../components/Projects/ProjectsSection';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>
      <section id="about" className="py-20">
        <About />
      </section>
      <section id="projects" className="py-20">
        <ProjectsSection />
      </section>
      <section id="skills" className="py-20">
        <Skills />
      </section>
      <section id="contact" className="py-20">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
