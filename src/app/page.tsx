import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { ExperienceTimeline } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero name="Your Name" title="Full Stack Developer" description="I build beautiful and functional web applications." />
      <Projects />
      <Skills />
      <ExperienceTimeline />
      <Contact />
      <Footer name="Your Name" email="your@email.com" />
    </main>
  );
}
