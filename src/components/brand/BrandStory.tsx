import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from "@/assets/maestrale-logo.png";

const values = [
  { title: "Autentičnost", desc: "Prava Sardinija, ne turistička verzija", icon: "◈" },
  { title: "Ekskluzivnost", desc: "Privatna iskustva, daleko od gužve", icon: "◇" },
  { title: "Pažnja", desc: "Personalizovana briga u svakom detalju", icon: "○" },
  { title: "Nasleđe", desc: "Poštovanje lokalne kulture i tradicije", icon: "△" },
  { title: "Elegancija", desc: "Nenametljiv, prirodni luksuz", icon: "□" },
];

const BrandStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="brand-story" ref={sectionRef} className="relative py-32 md:py-48 bg-gradient-cream overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div 
        style={{ y: parallaxY }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-sardinian-gold/5 blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-40 left-10 w-64 h-64 rounded-full bg-maestrale-navy/5 blur-3xl"
      />

      {/* Large decorative number */}
      <div className="absolute top-20 left-0 md:left-10 font-display text-[20rem] md:text-[30rem] leading-none text-maestrale-navy/[0.02] font-light select-none pointer-events-none">
        01
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <div className="chapter-indicator text-accent justify-center">
            <span>POGLAVLJE JEDAN</span>
          </div>
          <h2 className="heading-section text-primary mb-6">Priča Brenda</h2>
          <div className="divider-gold w-24 mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          {/* Logo Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-sardinian-gold/20 -z-10" />
            <div className="absolute -inset-8 border border-sardinian-gold/10 -z-10" />
            
            <div className="relative aspect-square bg-mediterranean-cream p-16 flex items-center justify-center shadow-luxury">
              {/* Inner golden glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-sardinian-gold/5 via-transparent to-sardinian-gold/5" />
              
              <motion.img
                src={logo}
                alt="Maestrale Logo"
                className="w-full max-w-sm relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              />

              {/* Corner ornaments */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-sardinian-gold/40" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-sardinian-gold/40" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-sardinian-gold/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-sardinian-gold/40" />
            </div>

            {/* Floating accent */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold opacity-20"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <h3 className="heading-subsection text-primary leading-tight">
              Vetar Maestrale
            </h3>
            
            <div className="space-y-6 text-body-lg text-muted-foreground">
              <p>
                <span className="font-script text-4xl text-accent mr-2">M</span>
                <strong className="text-foreground">aestrale</strong> — severozapadni mediteranski vetar, 
                poznat po tome što donosi vedro nebo i savršene uslove za plovidbu. On šapuće o 
                avanturi, slobodi i bezvremenskoj privlačnosti mora.
              </p>
              <p>
                Baš kao što ovaj legendarni vetar vodi mornare do skrivenih uvala i netaknutih obala, 
                Maestrale Luxury Experience vodi pronicljive putnike do najekskluzivnijih tajni Sardinije 
                — mesta poznatih samo onima koji zaista razumeju dušu ostrva.
              </p>
            </div>

            {/* Stats with elegant dividers */}
            <div className="pt-10 border-t border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                <div className="relative">
                  <p className="text-tagline text-accent mb-3">Osnovano</p>
                  <p className="font-display text-5xl md:text-6xl text-primary font-light">2025</p>
                </div>
                <div className="relative">
                  <p className="text-tagline text-accent mb-3">Ciljana Lokacija</p>
                  <p className="font-display text-5xl md:text-6xl text-primary font-light">Sardinija</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Values - Premium Cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-tagline text-accent text-center mb-12">Osnovne Vrednosti</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 auto-rows-fr">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col"
              >
                <div className="relative text-center p-8 bg-background border border-border hover:border-sardinian-gold/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-luxury flex flex-col flex-1">
                  {/* Icon */}
                  <span className="inline-block text-2xl text-sardinian-gold mb-4 group-hover:scale-110 transition-transform duration-500">
                    {value.icon}
                  </span>
                  
                  <h4 className="font-display text-xl text-primary mb-2">{value.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{value.desc}</p>
                  
                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-gold group-hover:w-3/4 transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
