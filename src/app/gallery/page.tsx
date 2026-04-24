"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryPage() {
  const categories = ["Picture Gallery", "Video Gallery"];
  
  return (
    <main className="w-full pt-32 pb-16 bg-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold tracking-widest uppercase text-sm mb-4 block">Our Visual Journey</span>
          <h1 className="font-serif text-5xl md:text-7xl text-navy mb-8">Gallery</h1>
          <p className="font-sans text-lg text-navy/70 max-w-2xl mx-auto">
            Explore moments of impact, community engagement, and peacebuilding initiatives across the region.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {categories.map((category, index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-navy/5 mb-6">
                <div className="absolute inset-0 flex items-center justify-center text-navy/20 font-serif text-2xl group-hover:scale-105 transition-transform duration-500">
                  {category} Image Placeholder
                </div>
              </div>
              <h3 className="text-2xl font-serif text-navy group-hover:text-gold transition-colors duration-300">
                {category}
              </h3>
              <div className="h-0.5 w-12 bg-gold mt-4 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
