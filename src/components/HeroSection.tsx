import GoldDustCanvas from "./GoldDustCanvas";
import ShimmerText from "./ShimmerText";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <GoldDustCanvas />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/50 to-obsidian pointer-events-none z-10" />
      
      <div className="relative z-20 max-w-6xl mx-auto py-20 text-center">
        {/* Pre-title */}
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 animate-[fade-in_0.8s_ease-out_0.2s_both]">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-metallic-gold" />
          <span className="text-xs sm:text-sm font-tech uppercase tracking-[0.2em] sm:tracking-[0.3em] text-silk-silver/60">
            UI/UX Designer & Multimedia Specialist
          </span>
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-metallic-gold" />
        </div>

        {/* Main Title */}
        <h1 className="animate-[fade-in_0.8s_ease-out_0.4s_both]">
          <ShimmerText 
            text="PIYUSH OJHA" 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold tracking-tight"
          />
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light text-silk-silver/70 leading-relaxed animate-[fade-in_0.8s_ease-out_0.6s_both] px-4">
          where <span className="text-metallic-gold italic">artificial intelligence</span> whispers to design,
          and pixels learn to dream. crafting interfaces that think, 
          experiences that <span className="text-metallic-gold">remember</span>.
        </p>

        {/* Current/Previous Role */}
        <div className="mt-8 sm:mt-10 animate-[fade-in_0.8s_ease-out_0.8s_both]">
          <p className="text-xs sm:text-sm font-tech uppercase tracking-widest text-silk-silver/40 mb-2">Worked at</p>
          <p className="text-lg sm:text-xl font-display text-silk-silver/90">
            Indian Air Force
          </p>
          <p className="text-xs sm:text-sm text-silk-silver/50 mt-1">
            Design‑oriented multimedia roles & AI systems (project work)
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-10 sm:mt-12 animate-[fade-in_0.8s_ease-out_1s_both]">
          <a href="https://github.com/Piyush898-tech/" className="gold-icon p-2" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/piyush-ojha-79225b252" className="gold-icon p-2" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:officialpiyush90@gmail.com" className="gold-icon p-2" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom of section */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 animate-[fade-in_0.8s_ease-out_1.2s_both] hidden sm:block">
        <div className="w-6 h-10 rounded-full border border-silk-silver/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-metallic-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
