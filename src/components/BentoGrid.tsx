import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  imageUrl: string;
  tags: string[];
  size: "large" | "medium" | "small";
}

interface BentoGridProps {
  projects: Project[];
}

const BentoGrid = ({ projects }: BentoGridProps) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-obsidian">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16">
          <span className="text-xs font-tech uppercase tracking-[0.2em] sm:tracking-[0.3em] text-metallic-gold">Featured Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium leading-tight mt-4">
            where <span className="text-gradient-gold italic">code</span> meets <br className="hidden sm:block" />
            creative vision
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px] sm:auto-rows-[280px]">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bento-card group cursor-pointer ${
                project.size === "large" 
                  ? "sm:col-span-2 sm:row-span-2" 
                  : project.size === "medium" 
                  ? "sm:col-span-1 sm:row-span-2" 
                  : ""
              }`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6">
                {/* Stat Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-obsidian/80 backdrop-blur-sm border border-metallic-gold/30 rounded-full px-2 sm:px-3 py-1">
                  <span className="text-xs sm:text-sm font-tech text-metallic-gold">{project.stat}</span>
                </div>

                {/* External Link Icon */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-metallic-gold" />
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-silk-silver group-hover:text-metallic-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-silk-silver/60 line-clamp-2">
                    {project.description}
                  </p>
                  <p className="mt-1 text-xs text-silk-silver/40">{project.statLabel}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 bg-silk-silver/5 border border-silk-silver/10 rounded text-silk-silver/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
