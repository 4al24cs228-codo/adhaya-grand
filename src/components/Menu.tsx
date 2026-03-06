import { motion } from "motion/react";
import { Download } from "lucide-react";

const menuCategories = [
  {
    title: "Breakfast Specials",
    description: "Start your day with our fresh morning delights.",
    items: [
      { name: "Masala Dosa", price: "₹60", image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep9yzcUbPNLpJWzg1ijHb5jcQVfNf_ysfJ9SG-o3j_rOFXn4RQjbwvoR0O0J1PfBp9qmeSwtdVl4_FQm2RMXc-HSOHVVqq8Pz-n-iA-GKDgZaCscQITg4pAqHlPtpAJqq9HL5c_Jj8C3Y8=w1000" },
      { name: "Idli Vada", price: "₹50", image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo1dQquKMpGbzjn8Q85oUyNpitxdowI-nQyF3TcJq01ijiOXhq-lAM8g-ctqLnMIOtWPyQoNg-g7xdcIxaoGgs6ulrhSPedC6tee_nE5eWDs0USio6NhIh3xVA4MNYvpq1NUPzQdQqbBoZj=w1000" },
    ]
  },
  {
    title: "South Indian Meals",
    description: "Authentic Karnataka style thali experience.",
    items: [
      { name: "Full South Indian Meal", price: "₹120", image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer9LeWWTJkEOqss9LgMKJyT9hpe9ZahHvj8z9T15acJb_SFpfdUufM7Njm98_WD2gwCgZdHDsiA3TcQ0EkSw-fdd_IfDi8y8fQEm5WfYM1MvI5Hj5-PU-AGW_qHl-yhI_ARCLUs=w1000" },
      { name: "Special Veg Biryani", price: "₹150", image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerf477msoJRIJp15W1Ju4f7SVJpDRkbiS_y2PKBS5v-VbRIPhf8OAfdkoCdpsiszy7xrwie7Mkqso4B0TdejACq9C1IQ3ogiN5GAYST3DWx-DVGpd6ZxItx-nAtJ7vs2sCru4cUIB9MOSCW=w1000" },
    ]
  },
  {
    title: "North Indian Delicacies",
    description: "Rich and flavorful dishes from the North.",
    items: [
      { name: "Kaju Masala", price: "₹180", image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqFm3XEN-DEBiaLfWZt2l5JBYkZNYwKtaPdfxWwspow_j3zZIVzb-AaR6NGGewVgLg_tmrIEsKhTVKxqBojulbGOf1-f5_nvc6j5RuWoA4Q9dFp8juP0GitA0EG1TlaEvPfoFp3HdSoNg7e=w1000" },
      { name: "Paneer Manchurian", price: "₹160", image: "https://lh3.googleusercontent.com/gps-proxy/ALd4DhFo9aS75U3uHQIe54yFV8fIbF4IMNome0I5om3PY1FXfpZNm23bewa5d1JtqPhGvghiVsiGEHRk_r202uEYUvE7gufFqWUxID-tvzVwZyJBNSfjwul4ZW19QUZsIOlV6X5AFqTguCpMqoNZNyOAbqZjHqarPFV0qG4dw19W1BuFAtSFbIFQoYgW=w1000" },
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
