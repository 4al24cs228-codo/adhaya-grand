import { motion } from "motion/react";
import { Star, ParkingCircle, Snowflake, ShieldCheck, Users, Banknote } from "lucide-react";

const features = [
  {
    icon: <Star className="text-gold" size={32} />,
    title: "4.0 Rated",
    desc: "Loved by 100+ customers on Google"
  },
  {
    icon: <ParkingCircle className="text-gold" size={32} />,
    title: "Ample Parking",
    desc: "Spacious parking for cars and bikes"
  },
  {
    icon: <Snowflake className="text-gold" size={32} />,
    title: "AC & Non-AC",
    desc: "Comfortable dining options for everyone"
  },
  {
    icon: <ShieldCheck className="text-gold" size={32} />,
    title: "Clean & Hygienic",
    desc: "Strict adherence to safety standards"
  },
  {
    icon: <Users className="text-gold" size={32} />,
    title: "Family Friendly",
    desc: "Perfect for groups and celebrations"
  },
  {
    icon: <Banknote className="text-gold" size={32} />,
    title: "Affordable Pricing",
    desc: "Premium experience at great value"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-earth text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">Why Adhya Grand?</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">The Finest Dining in Sirsi</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="text-center group"
            >
              <div className="mb-6 inline-block p-4 rounded-2xl bg-white/5 group-hover:bg-gold/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
