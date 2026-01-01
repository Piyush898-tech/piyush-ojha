import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import BentoGrid from "@/components/BentoGrid";
import SkillsMarquee from "@/components/SkillsMarquee";
import Footer from "@/components/Footer";

// Import project images
import projectAttendance from "@/assets/project-attendance.jpg";
import projectIpl from "@/assets/project-ipl.jpg";
import projectGan from "@/assets/project-gan.jpg";

const Index = () => {
  const projects = [
    {
      title: "Smart Attendance System",
      description: "AI-powered facial recognition system for automated attendance tracking with real-time verification.",
      stat: "98% Accuracy",
      statLabel: "Face Recognition Precision",
      imageUrl: projectAttendance,
      tags: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
      size: "large" as const,
    },
    {
      title: "IPL Prediction Model",
      description: "Machine learning model predicting match outcomes using historical data and player statistics.",
      stat: "92% Accuracy",
      statLabel: "Prediction Rate",
      imageUrl: projectIpl,
      tags: ["Python", "Scikit-learn", "Data Analysis"],
      size: "medium" as const,
    },
    {
      title: "Image Generation GAN",
      description: "Generative adversarial network for creating photorealistic images from textual descriptions.",
      stat: "Novel Architecture",
      statLabel: "Custom DCGAN Implementation",
      imageUrl: projectGan,
      tags: ["PyTorch", "GANs", "Computer Vision"],
      size: "small" as const,
    },
  ];

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
