import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import Skills from '@/react-app/components/Skills';
import Projects from '@/react-app/components/Projects';
import TechStackSection from '@/react-app/components/TechStackSection';
import AcademicJourney from '@/react-app/components/AcademicJourney';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <TechStackSection />
      <AcademicJourney />
      <Contact />
      <Footer />
    </div>
  );
}
