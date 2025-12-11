import { motion } from "framer-motion";
import logo from "@/assets/maestrale-logo.png";

const LogoGuidelines = () => {
  return (
    <section id="logo" className="relative py-32 md:py-48 bg-gradient-cream overflow-hidden">
      {/* Large decorative number */}
      <div className="absolute top-20 right-0 md:right-10 font-display text-[20rem] md:text-[30rem] leading-none text-maestrale-navy/[0.02] font-light select-none pointer-events-none">
        04
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-sardinian-gold/30 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-40 bg-gradient-to-b from-sardinian-gold/30 to-transparent" />

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
            <span>POGLAVLJE ČETIRI</span>
          </div>
          <h2 className="heading-section text-primary mb-6">Smernice za Logo</h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            Logo kombinuje dve elegantne jedrilice u harmoničnom pokretu, 
            predstavljajući putovanje Maestral vetra preko mediteranskih voda.
          </p>
        </motion.div>

        {/* Logo Anatomy - Premium Display */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h3 className="text-tagline text-primary mb-12 text-center">Anatomija Logotipa</h3>
          <div className="relative bg-background p-12 md:p-20 shadow-luxury">
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-sardinian-gold/10 pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="flex justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <img src={logo} alt="Maestrale Logo" className="w-full max-w-md" />
              </motion.div>
              <div className="space-y-8">
                {[
                  { num: "01", title: "Kružni Okvir", desc: "Simbolizuje putovanje, celovitost i cikličnu prirodu vetra", color: "bg-maestrale-navy" },
                  { num: "02", title: "Prepletena Jedra", desc: "Mornarsko plava i zlatna jedra u fluidnom pokretu, evociraju vetar i talase", color: "bg-sardinian-gold" },
                  { num: "03", title: "Logotip", desc: "Elegantna serifna tipografija sa razmaknutim sloganom za sofisticiranost", color: "bg-maestrale-teal" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <span className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-mediterranean-cream text-sm font-body font-medium shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      {item.num}
                    </span>
                    <div>
                      <h4 className="font-display text-2xl text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logo Versions - Luxurious Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-32"
        >
          <h3 className="text-tagline text-primary mb-12 text-center">Verzije Logotipa</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { bg: "bg-mediterranean-cream", label: "Pun Kolor", sublabel: "Na svetlim pozadinama", filter: "" },
              { bg: "bg-maestrale-navy", label: "Tamna Pozadina", sublabel: "Premium primene", filter: "brightness-0 invert" },
              { bg: "bg-sardinian-sand", label: "Teksturirana Površina", sublabel: "Štampani materijali", filter: "" },
            ].map((version, idx) => (
              <motion.div
                key={version.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <div className={`${version.bg} p-8 md:p-12 shadow-luxury flex flex-col items-center relative overflow-hidden group-hover:-translate-y-2 transition-all duration-700`}>
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-sardinian-gold/0 group-hover:bg-sardinian-gold/5 transition-colors duration-700" />
                  
                  <img 
                    src={logo} 
                    alt={`Logo ${version.label}`} 
                    className={`w-32 md:w-40 mb-6 relative z-10 ${version.filter}`} 
                  />
                  <p className={`text-tagline text-center ${version.filter ? 'text-mediterranean-cream' : 'text-primary'}`}>{version.label}</p>
                  <p className={`text-xs mt-1 text-center ${version.filter ? 'text-mediterranean-cream/70' : 'text-muted-foreground'}`}>{version.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clear Space & Minimum Size */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Clear Space */}
            <div>
              <h3 className="text-tagline text-primary mb-8">Čist Prostor</h3>
              <div className="bg-background p-12 shadow-luxury border border-border/50 aspect-square flex items-center justify-center relative">
                <div className="absolute inset-8 border border-dashed border-accent/30" />
                <div className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-accent font-mono">x</div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-1/2 text-xs text-accent font-mono">x</div>
                <div className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs text-accent font-mono">x</div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 translate-x-1/2 text-xs text-accent font-mono">x</div>
                <img src={logo} alt="Clear Space" className="w-1/2" />
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Zona isključenja osigurava čitljivost i uticaj logotipa.
              </p>
            </div>

            {/* Minimum Size */}
            <div>
              <h3 className="text-tagline text-primary mb-8">Minimalna Veličina</h3>
              <div className="bg-background p-12 shadow-luxury border border-border/50 h-full flex flex-col justify-center">
                <div className="space-y-8">
                  {[
                    { label: "Primarni Logo (Štampa)", value: "50mm širina" },
                    { label: "Samo Simbol (Digitalno)", value: "32px" },
                    { label: "Samo Simbol (Štampa)", value: "10mm" },
                  ].map((spec) => (
                    <div key={spec.label} className="flex justify-between items-center py-4 border-b border-border">
                      <span className="text-sm text-foreground">{spec.label}</span>
                      <span className="font-mono text-sm text-accent">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Do's and Don'ts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-tagline text-primary mb-12 text-center">Smernice za Upotrebu</h3>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-10">
            {/* Do's */}
            <div className="relative bg-background p-10 shadow-luxury border-t-4 border-olive-grove overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-olive-grove/5 blur-3xl" />
              <h4 className="font-display text-2xl text-olive-grove mb-8 flex items-center gap-3 relative">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Da
              </h4>
              <ul className="space-y-4 text-muted-foreground relative">
                {[
                  "Koristite logo samo u definisanim verzijama",
                  "Održavajte čist prostor oko logotipa",
                  "Koristite odobrene kombinacije boja",
                  "Obezbedite dovoljnu veličinu za čitljivost",
                  "Postavite na kontrastne pozadine",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-olive-grove mt-1">◈</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts */}
            <div className="relative bg-background p-10 shadow-luxury border-t-4 border-sunset-coral overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sunset-coral/5 blur-3xl" />
              <h4 className="font-display text-2xl text-sunset-coral mb-8 flex items-center gap-3 relative">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Ne
              </h4>
              <ul className="space-y-4 text-muted-foreground relative">
                {[
                  "Razvlačiti ili distorzirati proporcije",
                  "Postavljati logo preblizu drugim elementima",
                  "Proizvoljno menjati boje logotipa",
                  "Koristiti ispod minimalne veličine",
                  "Postavljati na pretrpane pozadine bez prekrivanja",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-sunset-coral mt-1">◇</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoGuidelines;
