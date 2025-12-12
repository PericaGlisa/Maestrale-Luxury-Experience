import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/maestrale-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { href: "#brand-story", label: "Priča" },
    { href: "#colors", label: "Boje" },
    { href: "#typography", label: "Tipografija" },
    { href: "#logo", label: "Logotip" },
    { href: "#moodboard", label: "Inspiracija" },
    { href: "#voice", label: "Glas" },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map(link => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop & Tablet Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-4 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-luxury border-b border-sardinian-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={logo}
                alt="Maestrale Luxury Experience"
                className={`h-20 sm:h-24 md:h-28 lg:h-24 xl:h-28 w-auto transition-all duration-500 ${
                  isScrolled ? "" : "brightness-0 invert drop-shadow-lg"
                }`}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 xl:px-4 py-2 text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                    isScrolled
                      ? activeSection === link.href.replace("#", "")
                        ? "text-accent"
                        : "text-foreground/70 hover:text-accent"
                      : activeSection === link.href.replace("#", "")
                        ? "text-sardinian-gold"
                        : "text-mediterranean-cream/80 hover:text-sardinian-gold"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-px bg-current"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white/10 group ${
                isScrolled ? "text-foreground" : "text-mediterranean-cream"
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 7 : 0,
                  }}
                  className="block h-0.5 w-full bg-current origin-center transition-all duration-300 rounded-full group-hover:scale-x-110"
                />
                <motion.span
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1, scaleX: isMobileMenuOpen ? 0 : 1 }}
                  className="block h-0.5 w-full bg-current transition-all duration-300 rounded-full group-hover:scale-x-110"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -7 : 0,
                  }}
                  className="block h-0.5 w-full bg-current origin-center transition-all duration-300 rounded-full group-hover:scale-x-110"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-gold origin-left"
          style={{
            scaleX: isScrolled ? 1 : 0,
            width: "100%",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-maestrale-navy/60 backdrop-blur-sm xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background shadow-2xl xl:hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-foreground hover:text-accent transition-all duration-300 rounded-full hover:bg-white/5"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" className="transition-transform duration-300 hover:rotate-90" />
                </svg>
              </button>

              <div className="flex flex-col h-full pt-20 pb-8 px-6 sm:px-8 overflow-y-auto">
                {/* Mobile Logo */}
                <div className="mb-8 sm:mb-12 flex-shrink-0">
                  <img src={logo} alt="Maestrale" className="h-20 sm:h-24 w-auto" />
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 min-h-0 overflow-y-auto">
                  <ul className="space-y-1 sm:space-y-2">
                    {navLinks.map((link, idx) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                      >
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className={`block py-3 sm:py-4 text-lg sm:text-xl font-display border-b border-border/50 transition-colors duration-300 ${
                            activeSection === link.href.replace("#", "")
                              ? "text-accent"
                              : "text-foreground hover:text-accent"
                          }`}
                        >
                          <span className="text-xs text-muted-foreground font-body mr-3 sm:mr-4">0{idx + 1}</span>
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="pt-8 border-t border-border">
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">Smernice Brenda</p>
                  <p className="text-xs text-muted-foreground mt-1">Verzija 1.0 — 2025</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
