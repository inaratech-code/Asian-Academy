"use client";

import PageHeader from "@/components/ui/PageHeader";

const updates = [
  {
    date: "June 25, 2020",
    title: "Capacity Building programme",
    category: "News & Events",
    description: "Asian Academy for Peace, Research and Development organized training for staffs and alliance partner of Mahila Shakti Bikas Kendra in Kathmandu.",
    link: "#"
  },
  {
    date: "June 25, 2020",
    title: "Participation in Asian peace builders Forum 2017",
    category: "News & Events",
    description: "Our team participated in the Asian Peace Builders Forum to discuss regional strategies.",
    link: "#"
  },
  {
    date: "June 25, 2020",
    title: "Vacancy Announcement",
    category: "Announcement",
    description: "We are looking for dedicated individuals to join our team in Kathmandu.",
    link: "#"
  },
  {
    date: "June 4, 2020",
    title: "Expression of interest for Research",
    category: "Announcement",
    description: "Call for expression of interest for peace research and development projects.",
    link: "#"
  }
];

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-offwhite">
      <PageHeader 
        title="News & Announcements" 
        category="Updates"
        description="Stay informed about our latest capacity building programs, research, and institutional news."
      />
      
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col gap-8">
          {updates.map((update, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-2xl border border-navy/5 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 shrink-0 border-b md:border-b-0 md:border-r border-navy/10 pb-6 md:pb-0 md:pr-6">
                <span className="text-teal font-serif text-xl block mb-2">
                  {update.date}
                </span>
                <span className="inline-block px-3 py-1 bg-navy/5 text-navy/70 text-xs tracking-widest uppercase rounded-full">
                  {update.category}
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-serif text-navy mb-4 group-hover:text-gold transition-colors">
                  {update.title}
                </h3>
                <p className="text-navy/70 font-sans leading-relaxed mb-6">
                  {update.description}
                </p>
                <a href={update.link} className="text-sm font-semibold text-navy uppercase tracking-widest hover:text-teal transition-colors flex items-center gap-2">
                  Read More <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
