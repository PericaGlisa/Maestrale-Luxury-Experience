import { motion } from "framer-motion";
import logo from "@/assets/maestrale-logo.png";

const Footer = () => {
  return (
    <footer className="relative py-24 bg-gradient-cream border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-sardinian-gold/5 to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center text-center">
          <motion.img src={logo} alt="Maestrale" className="w-32 mb-8" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} />
          
          <p className="font-script text-4xl text-accent mb-4">Smernice Brenda</p>
          <p className="text-sm text-muted-foreground mb-12">Verzija 1.0 — Decembar 2025</p>
          
          <div className="divider-gold w-48 mb-12" />
          
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12">
            {[
              { href: "#brand-story", label: "Priča" },
              { href: "#colors", label: "Boje" },
              { href: "#typography", label: "Tipografija" },
              { href: "#logo", label: "Logo" },
              { href: "#moodboard", label: "Inspiracija" },
              { href: "#voice", label: "Glas" }
            ].map((link) => (
              <a key={link.href} href={link.href} className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors duration-500 tracking-widest uppercase">{link.label}</a>
            ))}
          </nav>
          
          <p className="text-xs text-muted-foreground">© 2025 Maestrale Luxury Experience. Sva prava zadržana.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
