import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Products", href: "#products" },
  { name: "Pricing", href: "#pricing" },
  { name: "Industries", href: "#who-we-serve" },
  { name: "Founder", href: "#about-founder" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center gap-2 sm:gap-4">
        {/* Logo */}
        <a href="#" className="text-xl sm:text-2xl font-black text-foreground tracking-tight justify-self-start">
          CORAH
        </a>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 justify-self-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs xl:text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block justify-self-end">
          <a
            href="#dashboard"
            className="px-4 xl:px-6 py-2 xl:py-2.5 bg-primary text-primary-foreground rounded-full text-xs xl:text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full border border-border bg-card/80 backdrop-blur-sm justify-self-end col-span-2"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-border mt-2 mx-4 sm:mx-6 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-3 sm:p-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-xl transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#dashboard"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-xl text-sm font-medium text-center"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
