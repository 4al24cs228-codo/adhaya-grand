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
    image: "data:image/jpeg;base64,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",
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
