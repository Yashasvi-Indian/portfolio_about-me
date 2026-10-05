import Hero from '@/components/Hero';
import About from '@/components/About';
import ThingsIDo from '@/components/ThingsIDo';
import Skills from '@/components/SkillsPlayground';
import ProjectShowcase from '@/components/ProjectShowcase';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <ThingsIDo />
      <Skills />
      <ProjectShowcase />
      <Contact />
    </main>
  );
}
