"use client";

import { motion } from "framer-motion";

const journeySteps = [
  {
    id: "conflict",
    title: "Understanding Conflict",
    description: "Acknowledging the root causes of instability through grassroots listening.",
    align: "left"
  },
  {
    id: "dialogue",
    title: "Facilitating Dialogue",
    description: "Creating safe spaces where opposing narratives can find common ground.",
    align: "right"
  },
  {
    id: "policy",
    title: "Shaping Policy",
    description: "Translating human narratives into structural and institutional changes.",
    align: "left"
  },
  {
    id: "impact",
    title: "Lasting Impact",
    description: "Measuring success by the resilience of communities over time.",
    align: "right"
  }
];

export default function Journey() {
  return (
    <section className="py-32 bg-offwhite text-navy relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-serif">The Peace Journey</h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-6" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-navy/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24 md:space-y-40">
            {journeySteps.map((step, index) => (
              <div 
                key={step.id}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  step.align === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.8 }}
                  className={`flex-1 text-center ${step.align === "left" ? "md:text-right" : "md:text-left"}`}
                >
                  <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-2 block">
                    Phase 0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-serif mb-4">{step.title}</h3>
                  <p className="text-navy/70 font-sans text-lg max-w-md ml-auto mr-auto md:mx-0 inline-block">
                    {step.description}
                  </p>
                </motion.div>

                {/* Center Node */}
                <div className="hidden md:flex flex-col items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-navy rounded-full ring-8 ring-offwhite" />
                </div>

                {/* Visual Depth placeholder (Glassmorphic card) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 w-full"
                >
                  <div className="aspect-[4/3] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] rounded-2xl border border-navy/5 flex items-center justify-center overflow-hidden relative group">
                     {/* Subtle gradient blob for abstract visual depth */}
                     <div className="absolute inset-0 bg-gradient-to-br from-beige to-white" />
                     <div className="w-32 h-32 rounded-full bg-teal/10 blur-3xl absolute top-1/4 left-1/4 group-hover:scale-150 transition-transform duration-1000" />
                     <div className="w-40 h-40 rounded-full bg-gold/10 blur-3xl absolute bottom-1/4 right-1/4 group-hover:scale-150 transition-transform duration-1000" />
                     
                     <span className="relative z-10 font-serif text-3xl italic text-navy/20">
                       {step.title.split(' ')[1] || step.title}
                     </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
