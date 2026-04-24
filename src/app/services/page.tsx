import PageHeader from "@/components/ui/PageHeader";

const programs = [
  {
    title: "Regional Dialogue Frameworks",
    category: "Diplomacy",
    description: "Structured environments for cross-border conversations that build trust and dismantle long-held prejudices.",
  },
  {
    title: "Inclusive Education Curriculums",
    category: "Youth & Education",
    description: "Designing educational materials that foster empathy and understanding from a young age across diverse Asian demographics.",
  },
  {
    title: "Policy Translation Initiative",
    category: "Research",
    description: "A specialized task force converting localized peacebuilding successes into actionable national and international policy recommendations.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-offwhite">
      <PageHeader 
        title="Expertise & Services" 
        category="What We Do"
        description="Structured, impactful, and scalable methodologies for establishing lasting peace across Asia."
      />
      
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
              <span className="text-teal text-xs font-bold uppercase tracking-widest mb-4">
                {program.category}
              </span>
              <h3 className="text-2xl font-serif text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                {program.title}
              </h3>
              <p className="text-navy/70 font-sans flex-grow">
                {program.description}
              </p>
              <div className="mt-8 pt-6 border-t border-navy/5">
                <a href="#" className="text-sm font-semibold text-navy uppercase tracking-widest hover:text-teal transition-colors flex items-center gap-2">
                  Learn More <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
