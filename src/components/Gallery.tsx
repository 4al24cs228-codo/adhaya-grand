import { motion } from "motion/react";

const images = [
  "https://picsum.photos/seed/food1/800/600",
  "https://picsum.photos/seed/food2/800/600",
  "https://picsum.photos/seed/food3/800/600",
  "https://picsum.photos/seed/food4/800/600",
  "https://picsum.photos/seed/food5/800/600",
  "https://picsum.photos/seed/food6/800/600",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Glimpses of Adhya Grand</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
