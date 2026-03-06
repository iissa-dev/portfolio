import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faCode, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "motion/react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setIsOpen(false);

    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const offset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 10);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "py-4 glass-panel border-b-0 bg-background/80 backdrop-blur-md"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollTo("#home")}
        >
          <FontAwesomeIcon
            icon={faCode}
            className="w-8 h-8 text-primary group-hover:neon-text transition-all duration-300 font-bold text-2xl"
          />
          <span className="font-display font-bold text-3xl tracking-tight text-white">
            Issa<span className="text-primary">.dev</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-200"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="px-5 py-2.5 rounded-lg font-medium text-sm bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(10,102,194,0.15)] hover:shadow-[0_0_25px_rgba(10,102,194,0.4)]"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none"
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className="w-6 h-6 text-primary"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="w-full py-4 text-lg font-medium text-muted-foreground hover:text-primary transition-colors border-b border-white/5"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full mt-4 px-5 py-4 rounded-xl font-bold text-primary bg-primary/10 border border-primary/30"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
