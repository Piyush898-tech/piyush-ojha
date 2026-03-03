import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-obsidian border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Quote */}
        <div className="text-center mb-10 sm:mb-12">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-metallic-gold mx-auto mb-4" />
          <p className="text-xl sm:text-2xl md:text-3xl font-display italic text-silk-silver/80 max-w-2xl mx-auto px-4">
            "in the space between logic and aesthetics, 
            <span className="text-metallic-gold"> innovation</span> finds its voice"
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-metallic-gold/50 to-transparent mx-auto mb-10 sm:mb-12" />

        {/* Footer Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-silk-silver/40">
          <p>© {new Date().getFullYear()} Piyush Ojha. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Where design meets usability.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
