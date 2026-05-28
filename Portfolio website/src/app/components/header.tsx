import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl">Portfolio</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-primary transition-colors"
          >
            Start
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-primary transition-colors"
          >
            O mnie
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-primary transition-colors"
          >
            Projekty
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-primary transition-colors"
          >
            Umiejętności
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary transition-colors"
          >
            Kontakt
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left hover:text-primary transition-colors"
            >
              Start
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left hover:text-primary transition-colors"
            >
              O mnie
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left hover:text-primary transition-colors"
            >
              Projekty
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-left hover:text-primary transition-colors"
            >
              Umiejętności
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left hover:text-primary transition-colors"
            >
              Kontakt
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
