import { Instagram, Facebook, Twitter, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-earth text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-serif font-bold text-gold tracking-wider mb-6 block">
              ADHYA <span className="text-white">GRAND</span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Experience the finest pure vegetarian dining in Sirsi. We combine tradition with taste to bring you an unforgettable culinary journey.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/adhyagrand?igsh=MW8xbzluMTVuYnY0bQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/adhya.grand/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Our Menu</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Our Menu</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>South Indian Meals</li>
              <li>North Indian Dishes</li>
              <li>Kaju Masala</li>
              <li>Paneer Manchurian</li>
              <li>Veg Biryani</li>
              <li>Tomato Soup</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6">Subscribe to get updates on special offers and events.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-gold w-full"
              />
              <button className="bg-gold p-2 rounded-xl hover:bg-gold/90 transition-colors">
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs uppercase tracking-widest">
            © 2024 Adhya Grand. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-white/30 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
