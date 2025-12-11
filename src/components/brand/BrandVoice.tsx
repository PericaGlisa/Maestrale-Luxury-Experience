import { motion } from "framer-motion";

const BrandVoice = () => {
  return (
    <section id="voice" className="relative py-32 md:py-48 bg-maestrale-navy text-mediterranean-cream overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      <div className="absolute top-20 right-0 font-display text-[20rem] md:text-[30rem] leading-none text-mediterranean-cream/[0.02] font-light select-none pointer-events-none">06</div>

      <div className="container max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-center mb-24">
          <div className="chapter-indicator text-sardinian-champagne justify-center"><span>POGLAVLJE ŠEST</span></div>
          <h2 className="heading-section mb-6">Glas Brenda</h2>
        </motion.div>

        {/* Brand Promise */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24 max-w-5xl mx-auto">
          <p className="text-tagline text-sardinian-gold mb-10">Obećanje Brenda</p>
          <blockquote className="quote-luxury">
            Otkrijte Sardiniju onako kako je vide oni koji je istinski poznaju — kroz pažljivo odabrane, privatne trenutke luksuza koji ostaju urezani u sećanje.
          </blockquote>
        </motion.div>

        {/* Personality Spectrum */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24 max-w-3xl mx-auto">
          <h3 className="text-tagline text-sardinian-gold mb-12 text-center">Ličnost Brenda</h3>
          <div className="space-y-8">
            {[
              { left: "Sofisticiran", right: "Ležeran", position: 15 },
              { left: "Ekskluzivan", right: "Dostupan", position: 20 },
              { left: "Topao", right: "Hladan", position: 35 },
              { left: "Tradicionalan", right: "Moderan", position: 50 },
            ].map((scale) => (
              <div key={scale.left} className="flex items-center gap-3 sm:gap-6">
                <span className="text-xs sm:text-sm w-20 sm:w-32 text-right font-medium">{scale.left}</span>
                <div className="flex-1 h-1 bg-mediterranean-cream/10 rounded-full relative">
                  <motion.div initial={{ left: "50%" }} whileInView={{ left: `${scale.position}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="absolute top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 bg-sardinian-gold rounded-full shadow-gold" />
                </div>
                <span className="text-xs sm:text-sm w-20 sm:w-32 text-mediterranean-cream/50">{scale.right}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tone Examples */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-mediterranean-cream/5 p-10 border border-mediterranean-cream/10">
            <h4 className="font-display text-2xl text-olive-grove mb-8 flex items-center gap-3">✓ Piši ovako</h4>
            <ul className="space-y-4 text-sm">
              {["Kada budete spremni, vaša Sardinija vas čeka.", "Tirkizna uvala gde su jedini zvuk talasi.", "Detalji koji čine trenutke nezaboravnim."].map((t, i) => (
                <li key={i} className="flex gap-3"><span className="text-olive-grove">◈</span><span className="italic">"{t}"</span></li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-mediterranean-cream/5 p-10 border border-mediterranean-cream/10">
            <h4 className="font-display text-2xl text-sunset-coral mb-8 flex items-center gap-3">✗ Izbegavaj ovo</h4>
            <ul className="space-y-4 text-sm text-mediterranean-cream/60">
              {["Rezervišite odmah! Ograničena ponuda!", "Najluksuznije iskustvo na svetu!", "Neverovatna plaža! Neverovatan pogled!"].map((t, i) => (
                <li key={i} className="flex gap-3"><span className="text-sunset-coral">◇</span><span className="italic line-through">"{t}"</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandVoice;
