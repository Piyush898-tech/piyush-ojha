const skills = [
  { name: "Figma", icon: "🎨" },
  { name: "Adobe XD", icon: "✨" },
  { name: "Python", icon: "🐍" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Computer Vision", icon: "👁️" },
  { name: "UI/UX Design", icon: "💎" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Photoshop", icon: "🖼️" },
  { name: "After Effects", icon: "🎬" },
  { name: "Premiere Pro", icon: "🎥" },
];

const SkillsMarquee = () => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="py-12 sm:py-16 bg-card overflow-hidden border-y border-border">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 mx-1 sm:mx-2 whitespace-nowrap group"
          >
            <span className="text-lg sm:text-2xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="text-sm sm:text-lg font-tech text-silk-silver/60 group-hover:text-metallic-gold transition-colors duration-300">
              {skill.name}
            </span>
            <span className="text-metallic-gold/30 text-lg sm:text-2xl">•</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMarquee;
