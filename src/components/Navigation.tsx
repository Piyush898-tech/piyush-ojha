import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["Experience", "Projects", "Skills"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileMenuOpen ? "bg-obsidian/95 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-display font-bold text-silk-silver hover:text-metallic-gold transition-colors"
          >
            P<span className="text-metallic-gold">.</span>O
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-tech text-silk-silver/60 hover:text-metallic-gold transition-colors uppercase tracking-wider"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* CTA - Hidden on very small screens */}
            <a
              href="mailto:piyush@example.com"
              className="hidden sm:block text-sm font-tech px-4 py-2 border border-metallic-gold/30 rounded-full text-metallic-gold hover:bg-metallic-gold hover:text-obsidian transition-all duration-300"
            >
              Contact
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-silk-silver/60 hover:text-metallic-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-6 space-y-4 border-t border-border/50">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-sm font-tech text-silk-silver/70 hover:text-metallic-gold transition-colors uppercase tracking-wider"
              >
                {item}
              </button>
            ))}
            <a
              href="mailto:piyush@example.com"
              className="block sm:hidden text-sm font-tech px-4 py-2 border border-metallic-gold/30 rounded-full text-metallic-gold text-center hover:bg-metallic-gold hover:text-obsidian transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
