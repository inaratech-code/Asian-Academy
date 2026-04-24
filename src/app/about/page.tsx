import PageHeader from "@/components/ui/PageHeader";

export default function AboutPage() {
  const sections = [
    { id: "about-us", title: "About Us", content: "The Asian Academy for Peace Research and Development is a premier institution bridging the gap between grassroots peacebuilding and high-level policy making." },
    { id: "mission-vision", title: "Mission & Vision", content: "Our mission is to foster sustainable peace in Asia through research, dialogue, and capacity building. We envision a region where conflicts are resolved through understanding and structural equity." },
    { id: "board-of-directors", title: "Board of Directors", content: "Our board consists of distinguished leaders and academics committed to regional peace and development." },
    { id: "advisor", title: "Advisors", content: "Guiding our strategic vision are internationally recognized peacebuilders and policy experts." },
    { id: "team-of-experts", title: "Team of Experts", content: "Our core team comprises researchers, conflict resolution specialists, and community organizers." },
    { id: "our-staff", title: "Our Staff", content: "The dedicated staff at our headquarters in Kathmandu ensuring the smooth operation of our programs." },
    { id: "strategic-partners", title: "Strategic Partners", content: "We collaborate with international bodies and regional governments to amplify our impact." },
    { id: "collaborators", title: "Collaborators", content: "Working hand-in-hand with local NGOs, academic institutions, and grassroots organizations." }
  ];

  return (
    <main className="min-h-screen bg-offwhite">
      <PageHeader 
        title="Our Institutional Philosophy" 
        category="About Us"
        description="We believe that true structural change requires both grassroots storytelling and high-level policy credibility."
      />
      
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="space-y-24">
          {sections.map((section, index) => (
            <div key={section.id} id={section.id} className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-12 bg-gold" />
                <h2 className="text-3xl md:text-4xl font-serif text-navy">{section.title}</h2>
              </div>
              <p className="text-lg leading-relaxed text-navy/80 font-sans pl-16 border-l border-navy/10">
                {section.content}
              </p>
              
              {/* Placeholders for future content like grids of team members or logos */}
              {["board-of-directors", "advisor", "team-of-experts", "our-staff"].includes(section.id) && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pl-16">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-navy/5 aspect-square rounded-lg flex items-center justify-center text-navy/40 font-serif">
                      Profile {item}
                    </div>
                  ))}
                </div>
              )}
              
              {["strategic-partners", "collaborators"].includes(section.id) && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pl-16">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white border border-navy/10 h-24 rounded-lg flex items-center justify-center text-navy/40 font-sans text-sm">
                      Logo {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
