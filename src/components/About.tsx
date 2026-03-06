import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "One of the finest pure veg restaurants in Sirsi",
    "Excellent ambiance (AC & Non-AC dining)",
    "Hygienic and well-maintained premises",
    "Ideal for families, groups, and celebrations",
    "Affordable pricing with a premium experience",
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/food-plate/800/1000"
                alt="Delicious Vegetarian Food"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-white font-serif text-4xl mb-1">4.0</p>
              <p className="text-white/80 text-xs uppercase tracking-widest">Google Rating</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              A Tradition of Taste & <br />
              <span className="italic">Pure Vegetarian Hospitality</span>
            </h2>
            <p className="text-earth/70 text-lg mb-8 leading-relaxed">
              Located in the heart of Sirsi, Adhya Grand is more than just a restaurant. It's a destination for food lovers who appreciate the art of pure vegetarian cuisine. We blend traditional Karnataka flavors with modern culinary excellence.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={20} />
                  <span className="text-earth/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-serif text-earth">7:00 AM</p>
                <p className="text-xs text-earth/50 uppercase tracking-widest">Opens Daily</p>
              </div>
              <div className="w-px h-10 bg-gold/20" />
              <div>
                <p className="text-2xl font-serif text-earth">₹200 - ₹400</p>
                <p className="text-xs text-earth/50 uppercase tracking-widest">Price Range</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
