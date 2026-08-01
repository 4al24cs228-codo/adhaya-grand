/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import SignatureDishes from "./components/SignatureDishes";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

import { MessageCircle } from "lucide-react";

export default function App() {
  useEffect(() => {
    // Schema.org markup for LocalBusiness
    const schema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Adhya Grand",
      "image": "https://picsum.photos/seed/restaurant/800/600",
      "@id": "",
      "url": window.location.href,
      "telephone": "+916360476260",
      "priceRange": "₹200-₹400",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Opp. Sirsi - Yellapur Road, Shanthi Nagar",
        "addressLocality": "Sirsi",
        "addressRegion": "Karnataka",
        "postalCode": "581402",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 14.634505,
        "longitude": 74.845267
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "07:00",
        "closes": "22:30"
      },
      "servesCuisine": "Pure Vegetarian, South Indian, North Indian",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.0",
        "reviewCount": "100"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Menu />
      <SignatureDishes />
      <Gallery />
      <Reservation />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/916360476260" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </a>
    </main>
  );
}
