import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/About/AboutSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import JourneySection from "@/components/Journey/JourneySection";
import ContactSection from "@/components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <JourneySection />
        <ContactSection />
      </main>
    </>
  );
}
