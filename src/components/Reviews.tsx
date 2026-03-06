import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Local Guide",
    text: "Excellent ambiance and very hygienic. The Kaju Masala is a must-try! Perfect for family dinners.",
    rating: 5
  },
  {
    name: "Anjali Hegde",
    role: "Customer",
    text: "Best Paneer Manchurian in Sirsi. The service is prompt even during peak hours. Highly recommended.",
    rating: 4
  },
  {
    name: "Suresh Bhat",
    role: "Traveler",
    text: "Stopped here while traveling to Yellapur. Ample parking and great South Indian meals. Very affordable.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">What Our Guests Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-cream p-10 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 text-gold/20" size={40} />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-earth/80 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-serif text-lg text-earth">{review.name}</p>
                <p className="text-xs text-earth/50 uppercase tracking-widest">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
