import { motion } from "framer-motion";

const Typography = () => {
  return (
    <section id="typography" className="relative py-32 md:py-48 bg-gradient-navy text-mediterranean-cream overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Large decorative number */}
      <div className="absolute top-20 left-0 md:left-10 font-display text-[20rem] md:text-[30rem] leading-none text-mediterranean-cream/[0.02] font-light select-none pointer-events-none">
        03
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-px h-64 bg-gradient-to-b from-sardinian-gold/0 via-sardinian-gold/30 to-sardinian-gold/0" />
      <div className="absolute bottom-1/4 left-10 w-px h-64 bg-gradient-to-b from-sardinian-gold/0 via-sardinian-gold/30 to-sardinian-gold/0" />

      <div className="container max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <div className="chapter-indicator text-sardinian-champagne justify-center">
            <span>POGLAVLJE TRI</span>
          </div>
          <h2 className="heading-section mb-6">Tipografija</h2>
          <p className="text-body-lg text-mediterranean-cream/60 max-w-3xl mx-auto">
            Harmoničan spoj elegantnog serifnog i prefinjenog sans-serif fonta
            koji oličava sofisticiranost i čitljivost.
          </p>
        </motion.div>

        {/* Font Showcase Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 mb-20 md:mb-32">
          {/* Display Font */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 sm:space-y-10"
          >
            <div>
              <p className="text-tagline text-sardinian-gold mb-4 sm:mb-6">Primarno — Naslovi</p>
              <motion.h3 
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-4 sm:mb-6 leading-[0.9]"
                whileHover={{ letterSpacing: "0.02em" }}
                transition={{ duration: 0.5 }}
              >
                Cormorant<br />Garamond
              </motion.h3>
              <p className="text-mediterranean-cream/50 text-sm leading-relaxed max-w-md">
                Elegantan serif sa prelepim kontrastom između debelih i tankih linija.
                Koristi se za naslove, citate i istaknuti tekst.
              </p>
            </div>

            <div className="font-display space-y-3 sm:space-y-4 border-t border-mediterranean-cream/10 pt-6 sm:pt-10">
              <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-gradient-gold">Aa</p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.1em] sm:tracking-[0.2em] break-all">A B C Č Ć D Đ E F G H I J K L M N O P R S Š T U V Z Ž</p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl break-all">a b c č ć d đ e f g h i j k l m n o p r s š t u v z ž</p>
              <p className="text-sm sm:text-base md:text-lg text-mediterranean-cream/60">1234567890 !@#$%&*()</p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 border-t border-mediterranean-cream/10 pt-6 sm:pt-8">
              <div>
                <p className="font-display text-lg sm:text-xl md:text-2xl font-light mb-1">Light 300</p>
                <p className="text-[10px] sm:text-xs text-mediterranean-cream/40">Naslovi, Veliki tekst</p>
              </div>
              <div>
                <p className="font-display text-lg sm:text-xl md:text-2xl font-normal mb-1">Regular 400</p>
                <p className="text-[10px] sm:text-xs text-mediterranean-cream/40">Podnaslovi</p>
              </div>
              <div>
                <p className="font-display text-lg sm:text-xl md:text-2xl font-semibold mb-1">SemiBold 600</p>
                <p className="text-[10px] sm:text-xs text-mediterranean-cream/40">Isticanje</p>
              </div>
              <div>
                <p className="font-display text-lg sm:text-xl md:text-2xl font-bold mb-1">Bold 700</p>
                <p className="text-[10px] sm:text-xs text-mediterranean-cream/40">Jako isticanje</p>
              </div>
            </div>
          </motion.div>

          {/* Body Font */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 sm:space-y-10"
          >
            <div>
              <p className="text-tagline text-sardinian-gold mb-4 sm:mb-6">Sekundarno — Tekst i UI</p>
              <motion.h3 
                className="font-body text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 tracking-tight leading-[0.95]"
                whileHover={{ letterSpacing: "0.01em" }}
                transition={{ duration: 0.5 }}
              >
                Montserrat
              </motion.h3>
              <p className="text-mediterranean-cream/50 text-sm leading-relaxed max-w-md">
                Čist, geometrijski sans-serif za osnovni tekst, navigaciju, dugmad
                i sve elemente korisničkog interfejsa. Odlična čitljivost u svim veličinama.
              </p>
            </div>

            <div className="font-body space-y-3 sm:space-y-4 border-t border-mediterranean-cream/10 pt-6 sm:pt-10">
              <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light">Aa</p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.1em] sm:tracking-[0.15em] break-all">A B C Č Ć D Đ E F G H I J K L M N O P R S Š T U V Z Ž</p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl break-all">a b c č ć d đ e f g h i j k l m n o p r s š t u v z ž</p>
              <p className="text-sm sm:text-base md:text-lg text-mediterranean-cream/60">1234567890 !@#$%&*()</p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 border-t border-mediterranean-cream/10 pt-6 sm:pt-8">
              <div>
                <p className="font-body text-base sm:text-lg md:text-xl font-light mb-1">Light 300</p>
                <p className="text-[10px] sm:text-xs text-mediterranean-cream/40">Osnovni tekst</p>
              </div>
              <div>
                <p className="font-body text-base sm:text-lg md:text-xl font-normal mb-1">Regular 400</p>
                <p className="text-[10px] sm:text-xs text-mediterranean-cream/40">Podrazumevani tekst</p>
              </div>
              <div>
                <p className="font-body text-base sm:text-lg md:text-xl font-medium mb-1">Medium 500</p>
                <p className="text-[10px] sm:text-xs text-mediterranean-cream/40">Navigacija</p>
              </div>
              <div>
                <p className="font-body text-base sm:text-lg md:text-xl font-semibold mb-1">SemiBold 600</p>
                <p className="text-[10px] sm:text-xs text-mediterranean-cream/40">Dugmad, Oznake</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Script Font Accent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24 md:mb-32 py-10 sm:py-16 border-t border-b border-mediterranean-cream/10"
        >
          <p className="text-tagline text-sardinian-gold mb-4 sm:mb-8">Akcentni Font — Posebne Primene</p>
          <p className="font-script text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-sardinian-champagne px-4">
            Pinyon Script
          </p>
          <p className="text-xs sm:text-sm text-mediterranean-cream/40 mt-4 sm:mt-6">Koristi se za inicijale, monograme i posebne pozivnice</p>
        </motion.div>

        {/* Type Scale */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-tagline text-sardinian-gold mb-8 sm:mb-12 md:mb-16 text-center">Skala Fontova</h3>
          <div className="space-y-0">
            {[
              { label: "H1 Heroj", size: "72-96px", example: "Maestrale", font: "font-display", textClass: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-light" },
              { label: "H2 Sekcija", size: "48-56px", example: "Luksuzno Iskustvo", font: "font-display", textClass: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" },
              { label: "H3 Podsekcija", size: "32-40px", example: "Privatne Ture", font: "font-display", textClass: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium" },
              { label: "Slogan", size: "12-14px", example: "KUDA VETAR VODI", font: "font-body", textClass: "text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.3em]" },
              { label: "Veliki Tekst", size: "18-20px", example: "Otkrijte skrivena blaga Sardinije.", font: "font-body", textClass: "text-sm sm:text-base md:text-lg lg:text-xl font-light" },
              { label: "Tekst", size: "16px", example: "Savršen spoj avanture i elegancije.", font: "font-body", textClass: "text-xs sm:text-sm md:text-base" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 md:gap-6 lg:gap-8 py-4 sm:py-6 border-b border-mediterranean-cream/10 hover:bg-mediterranean-cream/5 transition-colors duration-500 px-2 sm:px-4 -mx-2 sm:-mx-4"
              >
                <div className="flex items-center gap-2 sm:gap-0 sm:block">
                  <span className="text-[10px] sm:text-xs text-mediterranean-cream/30 sm:w-24 md:w-28 shrink-0 group-hover:text-sardinian-gold transition-colors duration-500">{item.label}</span>
                  <span className="text-[10px] sm:text-xs text-mediterranean-cream/20 sm:hidden font-mono">({item.size})</span>
                </div>
                <span className="hidden sm:block text-[10px] md:text-xs text-mediterranean-cream/20 w-16 md:w-20 shrink-0 font-mono">{item.size}</span>
                <span className={`${item.font} ${item.textClass} group-hover:text-sardinian-champagne transition-colors duration-500 break-words`}>{item.example}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Typography;
