import { motion } from "motion/react";
import { Utensils, MapPin, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwerAL8_GmBTAg2lplGf2FwM-FLFXLbVgRcw1jwG_KrjHhwJPRdPfH_Q5tD36FdlbonzvoJKXCJbM1CUPbfur6L6iEZlMnHhIIl3Feo6In_Cz4k0CFFJCfx8c1zTvl8GBanqHFmCe12yXDoo=w1920"
          alt="Adhya Grand Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-gold font-medium tracking-[0.3em] uppercase mb-4 text-sm sm:text-base">
            Pure Vegetarian Excellence
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-6 leading-tight">
            Sirsi’s Finest <br />
            <span className="italic text-gold">Dining Experience</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Authentic flavors, premium ambiance, and a hygienic environment for you and your family.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#menu" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
              <Utensils size={20} /> View Menu
            </a>
            <a href="#contact" className="btn-secondary !text-white !border-white hover:!bg-white hover:!text-earth w-full sm:w-auto flex items-center justify-center gap-2">
              <MapPin size={20} /> Get Directions
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
      >
        <div className="w-px h-12 bg-white/20 mx-auto mb-2" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
}
