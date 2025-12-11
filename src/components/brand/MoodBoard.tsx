import { motion } from "framer-motion";
import moodYacht from "@/assets/mood-yacht.jpg";
import moodDining from "@/assets/mood-dining.jpg";
import moodCove from "@/assets/mood-cove.jpg";
import moodVilla from "@/assets/mood-villa.jpg";

const moodImages = [
  { src: moodYacht, title: "Jedrenje i More", desc: "Sloboda na mediteranskim vodama", span: "md:col-span-2 md:row-span-2" },
  { src: moodDining, title: "Gastronomija", desc: "Kulinarska izvrsnost", span: "" },
  { src: moodCove, title: "Skrivene Uvale", desc: "Privatna otkrića", span: "" },
  { src: moodVilla, title: "Smeštaj", desc: "Ekskluzivna utočišta", span: "md:col-span-2" },
];

const MoodBoard = () => {
  return (
    <section id="moodboard" className="relative py-32 md:py-48 bg-background overflow-hidden">
      <div className="absolute top-20 left-0 font-display text-[20rem] md:text-[30rem] leading-none text-maestrale-navy/[0.02] font-light select-none pointer-events-none">05</div>

      <div className="container max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-center mb-24">
          <div className="chapter-indicator text-accent justify-center"><span>POGLAVLJE PET</span></div>
          <h2 className="heading-section text-primary mb-6">Tabla Inspiracije</h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">Vizuelne teme koje hvataju mediteransku eleganciju, prirodnu lepotu i intimni luksuz.</p>
        </motion.div>

        {/* Masonry Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-20">
          {moodImages.map((image, index) => (
            <motion.div key={image.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }} className={`group relative overflow-hidden ${image.span}`}>
              <div className="aspect-[4/3] sm:aspect-auto sm:h-full min-h-[200px] sm:min-h-[250px] overflow-hidden">
                <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-maestrale-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className="text-xl sm:text-2xl font-display text-mediterranean-cream mb-2">{image.title}</h3>
                  <p className="text-xs sm:text-sm text-mediterranean-cream/80">{image.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Color Grading & Style Notes */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="border-t border-border pt-16 sm:pt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
            {[
              { title: "Osvetljenje", desc: "Prirodno, toplo, dominira zlatni sat" },
              { title: "Tonovi", desc: "Topli, blago desaturisani, filmski" },
              { title: "Kompozicija", desc: "Prostrana, velikodušan negativni prostor" },
              { title: "Raspoloženje", desc: "Sofisticirano, spokojno, inspirativno" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h4 className="font-display text-xl text-primary mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoodBoard;
