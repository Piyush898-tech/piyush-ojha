import { TrendingUp, Users, Zap } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-obsidian relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16">
          <span className="text-xs font-tech uppercase tracking-[0.2em] sm:tracking-[0.3em] text-metallic-gold">Experience</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium leading-tight mt-4">
            building systems that <br className="hidden sm:block" />
            <span className="text-gradient-gold italic">transform</span> learning
          </h2>
        </div>

        {/* Experience Card */}
        <div className="bento-card p-6 sm:p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left - Role Info */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-metallic-gold animate-pulse" />
                <span className="text-sm font-tech text-silk-silver/50">2022 — Present</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-silk-silver mb-4">
                AI-Enabled Teaching System
              </h3>
              
              <p className="body-text text-base sm:text-lg mb-6 sm:mb-8">
                Spearheaded the development of an intelligent multimedia teaching platform 
                at the Indian Air Force, integrating computer vision and adaptive learning 
                algorithms to revolutionize training methodologies.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Python", "TensorFlow", "Computer Vision", "UI/UX Design"].map((skill) => (
                  <span key={skill} className="skill-badge-luxury text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Stats */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 sm:gap-8">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-metallic-gold" />
                </div>
                <p className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gradient-gold">40%</p>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-silk-silver/50 mt-2">Engagement Increase</p>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-metallic-gold" />
                </div>
                <p className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gradient-gold">25%</p>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-silk-silver/50 mt-2">Usability Boost</p>
              </div>
              
              <div className="text-center sm:text-left col-span-2">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-metallic-gold" />
                </div>
                <p className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gradient-gold">500+</p>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-silk-silver/50 mt-2">Personnel Trained</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
