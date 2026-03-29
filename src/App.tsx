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
      "telephone": "+910000000000",
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
        "latitude": 14.62,
        "longitude": 74.83
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
    </main>
  );
}
