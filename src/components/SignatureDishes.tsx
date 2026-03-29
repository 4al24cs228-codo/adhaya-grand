import { motion } from "motion/react";
import { Star, ChevronRight } from "lucide-react";

const signatureDishes = [
  {
    name: "Masala Dosa",
    image: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg",
    description: "Crispy South Indian dosa filled with spiced potato masala served with chutney and sambar.",
    isPopular: true,
  },
  {
    name: "Butter Masala Dosa",
    image: "https://thephotowali.wordpress.com/wp-content/uploads/2018/03/28951082_762440420612043_6461311111764377600_n.jpg",
    description: "A rich butter roasted dosa with flavorful potato filling.",
    isPopular: true,
  },
  {
    name: "Plain Dosa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nS8MRF9brXvvnjmCUQmuMWzspjtLRQrGpg&s",
    description: "Classic golden dosa served with chutney and sambar.",
    isPopular: false,
  },
  {
    name: "Rava Dosa",
    image: "https://i0.wp.com/www.tomatoblues.com/wp-content/uploads/2012/02/rava-onion-dosa-2-scaled.jpg?w=1440&ssl=1",
    description: "Crispy semolina dosa with spices and onions.",
    isPopular: false,
  },
  {
    name: "Onion Uttapam",
    image: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2018/02/onion-uthappam.jpg?fit=500%2C553&ssl=1",
    description: "Thick dosa topped with onions and spices.",
    isPopular: false,
  },
  {
    name: "Veg Biryani",
    image: "https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg",
    description: "Fragrant basmati rice cooked with vegetables and aromatic spices.",
    isPopular: true,
  },
  {
    name: "Paneer Biryani",
    image: "https://i0.wp.com/www.tomatoblues.com/wp-content/uploads/2022/09/paneer-biryani-1.jpg?resize=720%2C1087&ssl=1",
    description: "Flavorful biryani made with paneer cubes and rich spices.",
    isPopular: true,
  },
  {
    name: "Mushroom Biryani",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGsEn8zV7BcpK1eNkB8zmh-6evXjV7Ouqiw&s",
    description: "Spiced mushroom biryani cooked with basmati rice.",
    isPopular: false,
  },
  {
    name: "Veg Fried Rice",
    image: "https://x9s2d6a3.delivery.rocketcdn.me/wp-content/uploads/2020/12/Indo-chinese-fried-rice_1200x1200.jpg",
    description: "Indo-Chinese fried rice with vegetables and sauces.",
    isPopular: false,
  },
  {
    name: "Paneer Fried Rice",
    image: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2025/11/Paneer-Fried-Rice-Recipe.jpg?fit=1200%2C1200&ssl=1",
    description: "Delicious fried rice tossed with paneer cubes.",
    isPopular: false,
  },
  {
    name: "Hakka Noodles",
    image: "https://www.ohmyveg.co.uk/wp-content/uploads/2024/08/hakka-noodles.jpg",
    description: "Stir fried noodles with vegetables and sauces.",
    isPopular: false,
  },
  {
    name: "Paneer Manchurian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowoOKMhMA1sfmbasMdIxDjoXbcTVDdhOvUw&s",
    description: "Crispy paneer tossed in spicy Indo-Chinese sauce.",
    isPopular: true,
  },
  {
    name: "Gobi Manchurian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOA4pcGHxCJN3JpbTHScwHV0GDzLOJ5v_uPA&s",
    description: "Crispy cauliflower cooked in tangy manchurian sauce.",
    isPopular: true,
  },
  {
    name: "Baby Corn Manchurian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNEg8I-DR5Vlu9SlTQV-3LKyzBPHA7h_Wqw&s",
    description: "Fried baby corn tossed in spicy sauce.",
    isPopular: false,
  },
  {
    name: "Mushroom 65",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3BpGpk2wkGeg79ptpVveMe0opqjPNCuzrQ&s",
    description: "Crispy mushroom starter with aromatic spices.",
    isPopular: false,
  },
  {
    name: "Paneer Butter Masala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRQMKHs5qBBmBwVN6e7UTPlt3PpK2c6T8XA&s",
    description: "Rich creamy tomato gravy with paneer cubes.",
    isPopular: true,
  },
  {
    name: "Kaju Masala",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2021/07/Kaju-Masala-Kaju-Curry-500x500.jpg",
    description: "Cashew nut curry cooked in rich masala gravy.",
    isPopular: true,
  },
  {
    name: "Veg Kolhapuri",
    image: "https://vanitascorner.com/wp-content/uploads/2023/06/Veg-Kolhapuri-2.jpg",
    description: "Spicy vegetable curry with bold Indian spices.",
    isPopular: false,
  },
  {
    name: "Dal Tadka",
    image: "https://holycowvegan.net/wp-content/uploads/2022/04/dal-tadka-3.jpg",
    description: "Yellow lentils tempered with cumin, garlic, and red chilies for a smoky flavor.",
    isPopular: false,
  },
  {
    name: "Tomato Soup",
    image: "https://shwetainthekitchen.com/wp-content/uploads/2021/11/Creamy-Vegan-Tomato-Soup.jpg",
    description: "Classic creamy tomato soup served hot.",
    isPopular: false,
  },
];

export default function SignatureDishes() {
  return (
    <section id="signature-dishes" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Adhya Grand, Sirsi
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-deep-brown mb-4"
          >
            Top 20 Signature Dishes – Adhya Grand, Sirsi
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-earth/70 max-w-2xl mx-auto"
          >
            Experience the finest premium vegetarian dining with our handpicked signature delicacies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gold/5"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {dish.isPopular && (
                  <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
                    <Star size={12} fill="currentColor" />
                    Popular Choice
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-deep-brown mb-2 group-hover:text-gold transition-colors">
                  {dish.name}
                </h3>
                <p className="text-earth/60 text-sm leading-relaxed line-clamp-2">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="#menu" 
            className="inline-flex items-center gap-2 bg-deep-brown text-white px-8 py-4 rounded-full hover:bg-gold transition-colors duration-300 shadow-lg hover:shadow-gold/20"
          >
            View Full Menu <ChevronRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
