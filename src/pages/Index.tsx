import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import BentoGrid from "@/components/BentoGrid";
import SkillsMarquee from "@/components/SkillsMarquee";
import Footer from "@/components/Footer";

// Projects are maintained in a separate module so you only need to update one file when adding/removing work.
import { projects } from "@/lib/projects";

const Index = () => {
  // the list is imported above; edit `src/lib/projects.ts` to make changes
  // you can also pass additional fields like `link` to render clickable cards

  return (
    <div className="min-h-screen bg-obsidian">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="skills">
        <SkillsMarquee />
      </div>
      <div id="projects">
        <BentoGrid projects={projects} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
