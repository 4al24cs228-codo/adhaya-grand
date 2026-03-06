import { motion } from "motion/react";
import { Download } from "lucide-react";

const menuCategories = [
  {
    title: "Breakfast Specials",
    description: "Start your day with our fresh morning delights.",
    items: [
      { name: "Masala Dosa", price: "₹60", image: "https://picsum.photos/seed/dosa/400/300" },
      { name: "Idli Vada", price: "₹50", image: "https://picsum.photos/seed/idli/400/300" },
    ]
  },
  {
    title: "South Indian Meals",
    description: "Authentic Karnataka style thali experience.",
    items: [
      { name: "Full South Indian Meal", price: "₹120", image: "https://picsum.photos/seed/thali/400/300" },
      { name: "Special Veg Biryani", price: "₹150", image: "https://picsum.photos/seed/biryani/400/300" },
    ]
  },
  {
    title: "North Indian Delicacies",
    description: "Rich and flavorful dishes from the North.",
    items: [
      { name: "Kaju Masala", price: "₹180", image: "https://picsum.photos/seed/kaju/400/300" },
      { name: "Paneer Manchurian", price: "₹160", image: "https://picsum.photos/seed/paneer/400/300" },
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Signature Highlights</h2>
          <p className="text-earth/60 max-w-2xl mx-auto">
            From traditional South Indian breakfasts to rich North Indian curries, explore our handpicked favorites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gold/5 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-serif mb-2">{category.title}</h3>
              <p className="text-earth/50 text-sm mb-8">{category.description}</p>
              
              <div className="space-y-6">
                {category.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-medium text-earth">{item.name}</h4>
                        <span className="text-gold font-serif">{item.price}</span>
                      </div>
                      <div className="h-px w-full bg-gold/10" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary flex items-center gap-2 mx-auto">
            <Download size={20} /> Download Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
