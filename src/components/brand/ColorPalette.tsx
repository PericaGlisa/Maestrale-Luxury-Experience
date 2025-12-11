import { motion } from "framer-motion";
import { useState } from "react";

const primaryColors = [
  { name: "Maestrale Teget", hex: "#1B4B5A", rgb: "27, 75, 90", cmyk: "90, 55, 40, 35", pantone: "7477 C", desc: "Primarna boja brenda" },
  { name: "Duboka Tirkizna", hex: "#0D3D4A", rgb: "13, 61, 74", cmyk: "95, 60, 45, 50", pantone: "7476 C", desc: "Tamna varijanta" },
  { name: "Sardinijsko Zlatna", hex: "#C9A962", rgb: "201, 169, 98", cmyk: "20, 30, 65, 5", pantone: "7407 C", desc: "Primarni akcenat" },
  { name: "Šampanjac Zlatna", hex: "#D4C28E", rgb: "212, 194, 142", cmyk: "15, 20, 50, 0", pantone: "7502 C", desc: "Svetli akcenat" },
];

const secondaryColors = [
  { name: "Mediteranski Krem", hex: "#F7F4EE", rgb: "247, 244, 238", desc: "Pozadina" },
  { name: "Topla Slonovača", hex: "#FFFEF9", rgb: "255, 254, 249", desc: "Svetla pozadina" },
  { name: "Sardinijski Pesak", hex: "#E8E0D0", rgb: "232, 224, 208", desc: "Sekundarna površina" },
  { name: "Duboki Ugalj", hex: "#2D2D2D", rgb: "45, 45, 45", desc: "Boja teksta" },
];

const accentColors = [
  { name: "Kosta Tirkizna", hex: "#40B5AD", usage: "Akcenti, sekundarna grafika" },
  { name: "Zalazak Koralna", hex: "#E07B54", usage: "Ograničeno, specijalne kampanje" },
  { name: "Maslinjak", hex: "#7A8B5C", usage: "Priroda, gastronomija" },
  { name: "Terakota", hex: "#C4784A", usage: "Kulturno nasleđe" },
];

const ColorSwatch = ({ 
  color, 
  large = false,
  showDetails = false
}: { 
  color: { name: string; hex: string; rgb?: string; cmyk?: string; pantone?: string; desc?: string; usage?: string }; 
  large?: boolean;
  showDetails?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCopy}
    >
      <div className="relative">
        <motion.div
          className={`${large ? 'h-48 md:h-56' : 'h-32 md:h-40'} rounded-sm mb-5 shadow-luxury relative overflow-hidden`}
          style={{ backgroundColor: color.hex }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hover overlay */}
          <motion.div 
            className="absolute inset-0 bg-background/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-tagline text-primary">
              {copied ? "Kopirano!" : "Klikni za kopiranje"}
            </span>
          </motion.div>

          {/* Inner glow for gold colors */}
          {color.hex.includes('C9A') || color.hex.includes('D4C') ? (
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
          ) : null}
        </motion.div>
      </div>

      <h4 className="font-display text-xl text-primary mb-1">{color.name}</h4>
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">{color.hex}</p>
      
      {showDetails && color.rgb && (
        <div className="space-y-1 text-xs text-muted-foreground">
          <p>RGB: {color.rgb}</p>
          {color.cmyk && <p>CMYK: {color.cmyk}</p>}
          {color.pantone && <p className="text-accent">{color.pantone}</p>}
        </div>
      )}
      
      {color.desc && <p className="text-xs text-muted-foreground mt-1">{color.desc}</p>}
      {color.usage && <p className="text-xs text-muted-foreground mt-1">{color.usage}</p>}
    </motion.div>
  );
};

const ColorPalette = () => {
  return (
    <section id="colors" className="relative py-32 md:py-48 bg-background overflow-hidden">
      {/* Large decorative number */}
      <div className="absolute top-20 right-0 md:right-10 font-display text-[20rem] md:text-[30rem] leading-none text-maestrale-navy/[0.02] font-light select-none pointer-events-none">
        02
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
            <span>POGLAVLJE DVA</span>
          </div>
          <h2 className="heading-section text-primary mb-6">Paleta Boja</h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            Prefinjena paleta inspirisana sardinijskim morima, zlatnim zalascima sunca i toplim tonovima
            mediteranske arhitekture.
          </p>
        </motion.div>

        {/* Primary Palette */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
            <h3 className="text-tagline text-primary">Primarna Paleta</h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {primaryColors.map((color) => (
              <ColorSwatch key={color.hex} color={color} large showDetails />
            ))}
          </div>
        </div>

        {/* Secondary Palette */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
            <h3 className="text-tagline text-primary">Sekundarna Paleta</h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {secondaryColors.map((color) => (
              <ColorSwatch key={color.hex} color={color} />
            ))}
          </div>
        </div>

        {/* Accent Palette */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
            <h3 className="text-tagline text-primary">Akcentna Paleta — Inspirisana Sardinijom</h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {accentColors.map((color) => (
              <ColorSwatch key={color.hex} color={color} />
            ))}
          </div>
        </div>

        {/* Color Combinations - Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-sardinian-gold/20 via-transparent to-sardinian-gold/20 blur-xl" />
          <div className="relative bg-mediterranean-cream p-10 md:p-16 shadow-luxury">
            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-sardinian-gold/30" />
            <div className="absolute top-4 right-4 w-12 h-12 border-r border-t border-sardinian-gold/30" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-l border-b border-sardinian-gold/30" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-sardinian-gold/30" />

            <h3 className="text-tagline text-primary mb-12 text-center">Preporučene Kombinacije</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { colors: [{ c: "bg-maestrale-navy", w: "40%" }, { c: "bg-sardinian-gold", w: "20%" }, { c: "bg-mediterranean-cream", w: "40%" }], label: "Teget + Zlatna + Krem", desc: "Primarna komunikacija brenda" },
                { colors: [{ c: "bg-maestrale-navy", w: "30%" }, { c: "bg-mediterranean-cream", w: "70%" }], label: "Teget + Krem", desc: "Minimalistička elegancija" },
                { colors: [{ c: "bg-sardinian-gold", w: "25%" }, { c: "bg-mediterranean-cream", w: "75%" }], label: "Zlatna + Krem", desc: "Suptilni luksuz" },
              ].map((combo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="space-y-4"
                >
                  <div className="flex h-20 rounded-sm overflow-hidden shadow-elegant">
                    {combo.colors.map((c, i) => (
                      <div key={i} className={`${c.c}`} style={{ width: c.w }} />
                    ))}
                  </div>
                  <div>
                    <p className="font-display text-lg text-primary">{combo.label}</p>
                    <p className="text-xs text-muted-foreground">{combo.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ColorPalette;
