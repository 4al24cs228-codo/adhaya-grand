import { motion } from "motion/react";
import { Calendar, Users, Clock, Send } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-earth rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 text-white">
            <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">Reservations</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Table</h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Planning a family gathering or a special celebration? Reserve your table in advance to ensure a seamless dining experience.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest">Available</p>
                  <p className="font-serif text-lg">Daily: 7:00 AM - 10:30 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest">Capacity</p>
                  <p className="font-serif text-lg">Groups up to 50+ guests</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-cream p-12 lg:p-20">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-serif mb-4">Request Sent!</h3>
                <p className="text-earth/60">We'll contact you shortly to confirm your reservation.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-earth/50 mb-2">Full Name</label>
                    <input type="text" required className="w-full bg-white border border-gold/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-earth/50 mb-2">Phone Number</label>
                    <input type="tel" required className="w-full bg-white border border-gold/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-earth/50 mb-2">Date</label>
                    <input type="date" required className="w-full bg-white border border-gold/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-earth/50 mb-2">Guests</label>
                    <select className="w-full bg-white border border-gold/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors">
                      <option>2 People</option>
                      <option>4 People</option>
                      <option>6+ People</option>
                      <option>Large Group (10+)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-earth/50 mb-2">Special Requests</label>
                  <textarea rows={3} className="w-full bg-white border border-gold/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
