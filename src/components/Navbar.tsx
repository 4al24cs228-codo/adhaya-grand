import { motion } from "motion/react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Signature", href: "#signature-dishes" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3 shadow-md" : "bg-transparent py-4 md:py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className={`text-2xl font-serif font-bold tracking-wider transition-colors ${scrolled || isOpen ? "text-earth" : "text-white"}`}>
              ADHYA <span className="text-gold">GRAND</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${scrolled ? "text-earth" : "text-white/90"}`}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+916360476260" className="btn-primary flex items-center gap-2 text-sm">
              <Phone size={16} /> Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 -mr-2 transition-colors ${scrolled || isOpen ? "text-earth" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cream border-b border-gold/10 absolute top-full left-0 w-full shadow-xl"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-earth hover:text-gold hover:bg-gold/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-4">
              <a href="tel:+916360476260" className="btn-primary w-full flex justify-center items-center gap-2 py-3 shadow-md">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
