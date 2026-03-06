import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Is there ample parking available?",
    a: "Yes, we have a large dedicated parking area for both two-wheelers and four-wheelers, ensuring a hassle-free visit for our guests."
  },
  {
    q: "Do you offer AC dining?",
    a: "We provide both AC and Non-AC seating options to suit your comfort and preference."
  },
  {
    q: "What are your opening hours?",
    a: "We are open every day from 7:00 AM to 10:30 PM, serving breakfast, lunch, and dinner."
  },
  {
    q: "Do you have home delivery?",
    a: "Currently, we offer Dine-in and Takeaway services. Home delivery is not available at this moment."
  },
  {
    q: "Is the restaurant family-friendly?",
    a: "Absolutely! We pride ourselves on being a family-oriented restaurant with a hygienic environment and a menu that caters to all age groups."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">FAQ</span>
          <h2 className="text-4xl font-serif mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gold/10 rounded-2xl overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-cream transition-colors"
              >
                <span className="font-serif text-xl text-earth">{faq.q}</span>
                <ChevronDown 
                  className={`text-gold transition-transform duration-300 ${activeIndex === idx ? "rotate-180" : ""}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-earth/60 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
