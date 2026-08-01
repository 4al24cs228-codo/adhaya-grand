import { motion } from "motion/react";
import { Utensils, MapPin, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/4al24cs228-codo/adhaya-grand/main/images/adhyagrandfront.jpg"
          alt="Adhya Grand Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-gold font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 text-xs sm:text-sm md:text-base">
            Pure Vegetarian Excellence
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-4 sm:mb-6 leading-tight">
            Sirsi’s Finest <br />
            <span className="italic text-gold">Dining Experience</span>
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto font-light px-2">
            Authentic flavors, premium ambiance, and a hygienic environment for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <a href="#menu" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 py-3 sm:py-2">
              <Utensils size={20} /> View Menu
            </a>
            <a href="#contact" className="btn-secondary !text-white !border-white hover:!bg-white hover:!text-earth w-full sm:w-auto flex items-center justify-center gap-2 py-3 sm:py-2">
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
