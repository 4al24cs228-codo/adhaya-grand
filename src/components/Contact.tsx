import { motion } from "motion/react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Visit Adhya Grand</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Address</h4>
                  <p className="text-earth/60 leading-relaxed">
                    Aadhya Grand, Opp. Sirsi - Yellapur Road, <br />
                    Shanthi Nagar, Sirsi, Karnataka – 581402
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Call Us</h4>
                  <p className="text-earth/60 mb-4">For reservations and takeaway orders</p>
                  <div className="flex flex-wrap gap-4">
                    <a href="tel:+910000000000" className="btn-primary !py-2 !px-4 text-sm flex items-center gap-2">
                      <Phone size={16} /> Call Now
                    </a>
                    <a href="https://wa.me/910000000000" className="btn-secondary !py-2 !px-4 text-sm flex items-center gap-2">
                      <MessageCircle size={16} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Opening Hours</h4>
                  <p className="text-earth/60">Opens daily at 7:00 AM</p>
                  <p className="text-earth/60">Closes at 10:30 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white"
          >
            {/* Placeholder for Google Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.658742546415!2d74.83!3d14.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM3JzEyLjAiTiA3NMKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
