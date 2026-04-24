"use client";

import Hero from "@/components/home/Hero";
import Journey from "@/components/home/Journey";
import LiveVisitorCounter from "@/components/ui/LiveVisitorCounter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Journey />
      
      {/* Real Stories Preview */}
      <section className="py-32 bg-navy text-offwhite">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold tracking-widest uppercase text-sm mb-8 block">Voices of Impact</span>
            <h3 className="font-serif text-3xl md:text-5xl font-light italic leading-relaxed mb-12">
              "When we sit across from one another, the borders in our minds begin to dissolve long before the borders on the map."
            </h3>
            <p className="font-sans text-offwhite/60 uppercase tracking-widest text-sm">— Regional Dialogue Participant, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-offwhite text-navy text-center relative overflow-hidden">
        <div className="absolute top-12 right-12 hidden md:block">
          <LiveVisitorCounter variant="inner" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Be Part of the Movement</h2>
          <p className="text-lg text-navy/70 mb-12 max-w-xl mx-auto">
            Join a global network of peacebuilders, policymakers, and youth leaders committed to lasting structural change.
          </p>
          <button className="bg-navy text-white px-8 py-4 rounded-full font-sans tracking-wide hover:bg-gold hover:text-navy transition-colors duration-300">
            Explore Opportunities
          </button>
        </div>
      </section>
    </main>
  );
}
