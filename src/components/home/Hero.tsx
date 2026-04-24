"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LiveVisitorCounter from "@/components/ui/LiveVisitorCounter";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const opacity2 = useTransform(scrollYProgress, [0.1, 0.3, 0.4], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.1, 0.3, 0.4], [50, 0, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [50, 0, -50]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh] bg-navy-dark text-offwhite overflow-hidden"
    >
      {/* Background gradients that subtly shift */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy via-navy-dark to-black opacity-80" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[150px]" />

        {/* Scene 1: Minimal Start */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <span className="text-gold/80 tracking-[0.2em] uppercase text-sm mb-6 font-sans">
            Asian Academy for Peace
          </span>
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
        </motion.div>

        {/* Scene 2: The Core Concept */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
            Building Peace <br className="hidden md:block" />
            <span className="italic text-gold">Through Dialogue</span>
          </h1>
        </motion.div>

        {/* Scene 3: The Full Message */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
            Policy & <span className="italic">People</span>.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-offwhite/70 font-sans max-w-2xl font-light">
            A global institution fostering resilience, understanding, and structural harmony across Asia.
          </p>
        </motion.div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <span className="text-xs uppercase tracking-widest font-sans">Explore</span>
          <div className="w-[1px] h-12 bg-offwhite/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-offwhite"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </div>

        {/* Live Visitor Counter */}
        <div className="absolute bottom-12 right-12 hidden md:block">
          <LiveVisitorCounter variant="hero" />
        </div>
      </div>
    </section>
  );
}
