import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-sardinia-new.jpg";
import logo from "@/assets/maestrale-logo.png";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src={heroImage}
          alt="Luksuzna jahta plovi kristalno čistim vodama Sardinije"
          className="w-full h-full object-cover"
        />
        {/* Premium Multi-layer Gradient Overlay - Darkened for readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-maestrale-navy/60 via-maestrale-teal/50 to-maestrale-navy/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-maestrale-navy/50 via-transparent to-maestrale-navy/50" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </motion.div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-sardinian-gold/30" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-sardinian-gold/30" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-sardinian-gold/30" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-sardinian-gold/30" />

      {/* Content */}
      <motion.div className="relative z-10 text-center px-6 max-w-6xl mx-auto" style={{ opacity }}>
        {/* Floating Logo with enhanced visibility */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 mt-20"
        >
          <motion.div
            className="relative inline-block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 blur-3xl bg-sardinian-gold/30 scale-150" />
            <img
              src={logo}
              alt="Maestrale Luxury Experience"
              className="relative w-44 md:w-64 lg:w-80 mx-auto brightness-0 invert drop-shadow-[0_0_30px_rgba(201,169,98,0.5)]"
            />
          </motion.div>
        </motion.div>

        {/* Tagline with line animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mb-8"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-sardinian-gold origin-left"
          />
          <p className="text-tagline text-sardinian-champagne">
            Smernice Brenda i Vizuelni Identitet
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-sardinian-gold origin-right"
          />
        </motion.div>

        {/* Main Heading */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="heading-hero text-mediterranean-ivory"
          >
            Prepustite se vetru!
          </motion.h1>
        </div>


        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-body-lg text-mediterranean-cream/80 max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          Otkrijte Sardiniju onako kako je vide oni koji je istinski poznaju — kroz pažljivo odabrane,
          privatne trenutke luksuza koji ostaju urezani u sećanje.
        </motion.p>

        {/* CTA Button and Scroll Indicator Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6 md:gap-8"
        >
          {/* CTA Button with shimmer effect */}
          <a 
            href="#brand-story" 
            className="group relative inline-flex items-center justify-center h-16 px-14 overflow-hidden"
          >
            {/* Button background with animated border */}
            <span className="absolute inset-0 border border-sardinian-gold/60 transition-all duration-700 group-hover:border-sardinian-gold" />
            <span className="absolute inset-0 bg-sardinian-gold/0 transition-all duration-700 group-hover:bg-sardinian-gold/10" />
            
            {/* Shimmer effect on hover */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-sardinian-gold/20 to-transparent" />
            
            <span className="relative font-body uppercase tracking-[0.2em] text-xs text-sardinian-gold group-hover:text-sardinian-champagne transition-colors duration-500">
              Istraži brend
            </span>
          </a>

          {/* Scroll Indicator - positioned below CTA button on all devices */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center gap-4 text-mediterranean-cream/50"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-light mr-[-0.4em]">Skroluj za više</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-px h-16"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-sardinian-gold to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
