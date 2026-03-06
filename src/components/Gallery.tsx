import { motion } from "motion/react";

const images = [
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerAL8_GmBTAg2lplGf2FwM-FLFXLbVgRcw1jwG_KrjHhwJPRdPfH_Q5tD36FdlbonzvoJKXCJbM1CUPbfur6L6iEZlMnHhIIl3Feo6In_Cz4k0CFFJCfx8c1zTvl8GBanqHFmCe12yXDoo=w1000",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepszbgPQ9tm1K8VFq-Y0cmfT08w0I_7bSQ5YG6kiQBVYE-rVGAdJobHerBLAYuz8oBNIIlqyobp53iZm3NkQHaMey2vTdxxiqRuZQgOFfclGT-DGjAw0QTijLskNxJWe2uuMKjVKqURBU0t=w1000",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepS9e8FitCn4O4QX_-2ng4bLr-4CNEMYnIeZ4ISvq_Qk556YhgSK7XQ9FzblTxjlpfIHxObMqO0Yp7_JbozmFYVRi1kK_E_RG3LnFHn33tFOoVmT4YUVsyc0niAT0IWmdBMcDAN=w1000",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerg3x57dFXv51SCQ2Uuj4iVcG9v-R8zHGi-K0b_n92Kv-Wy8OdQXKvw2CdZMa2915r8T8WeULnpMBfxHayMl5c-v2N86BUnBTqU4Px8PFded8AhgYgJpJ13siL1rOk7HkDs2001U4VriSdX=w1000",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerg3x57dFXv51SCQ2Uuj4iVcG9v-R8zHGi-K0b_n92Kv-Wy8OdQXKvw2CdZMa2915r8T8WeULnpMBfxHayMl5c-v2N86BUnBTqU4Px8PFded8AhgYgJpJ13siL1rOk7HkDs2001U4VriSdX=w1000",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerLIUdPe4PqH9jgQBXIGcbVoFg0hvBFdJAXHk3G-TsUUNWCkDFSixNoV6S1g4qFNlfR5lljPvxbhDYhFATWo1S28kcKwFRsg4dx-IEWBNnb7UJcz5hLkqO_SYSd25DdmbWWlK4Cng=w1000",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Glimpses of Adhya Grand</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
