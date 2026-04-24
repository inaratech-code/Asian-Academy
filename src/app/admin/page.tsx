"use client";

import { useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: "120",
    countries: "24",
    impacted: "50,000",
  });
  
  const [editing, setEditing] = useState<string | null>(null);

  const handleSave = (field: string, value: string) => {
    setStats({ ...stats, [field]: value });
    setEditing(null);
  };

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-serif text-navy mb-8">Platform Overview</h1>
      
      <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm mb-12">
        <h2 className="text-lg font-sans font-semibold text-navy mb-6 border-b border-navy/10 pb-4">
          Impact Statistics (Live on Homepage)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { key: "projects", label: "Projects Launched", value: stats.projects },
            { key: "countries", label: "Countries Reached", value: stats.countries },
            { key: "impacted", label: "People Impacted", value: stats.impacted },
          ].map((stat) => (
            <div key={stat.key} className="p-6 bg-offwhite rounded-xl border border-navy/5 relative group">
              <span className="text-sm text-navy/60 font-sans tracking-wide block mb-2">{stat.label}</span>
              
              {editing === stat.key ? (
                <div className="flex items-center gap-2 mt-2">
                  <input 
                    type="text" 
                    defaultValue={stat.value}
                    className="w-full bg-white border border-navy/20 rounded px-3 py-1 font-serif text-2xl text-navy outline-none focus:border-teal"
                    onBlur={(e) => handleSave(stat.key, e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSave(stat.key, (e.target as HTMLInputElement).value)}
                    autoFocus
                  />
                </div>
              ) : (
                <div className="flex justify-between items-end">
                  <h3 className="text-4xl font-serif text-gold">{stat.value}</h3>
                  <button 
                    onClick={() => setEditing(stat.key)}
                    className="text-xs font-semibold text-teal uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
        <div className="flex justify-between items-center border-b border-navy/10 pb-4 mb-6">
          <h2 className="text-lg font-sans font-semibold text-navy">
            Recent Content Updates
          </h2>
          <button className="text-sm bg-navy text-white px-4 py-2 rounded hover:bg-gold hover:text-navy transition-colors">
            + New Entry
          </button>
        </div>
        
        <table className="w-full text-left font-sans text-sm text-navy">
          <thead className="text-navy/50 uppercase tracking-widest text-xs border-b border-navy/5">
            <tr>
              <th className="pb-4 font-normal">Type</th>
              <th className="pb-4 font-normal">Title</th>
              <th className="pb-4 font-normal">Status</th>
              <th className="pb-4 font-normal">Last Modified</th>
              <th className="pb-4 font-normal text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            <tr>
              <td className="py-4 text-teal font-semibold">Event</td>
              <td className="py-4">Kathmandu Peace Forum</td>
              <td className="py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Published</span></td>
              <td className="py-4 text-navy/60">2 hours ago</td>
              <td className="py-4 text-right"><button className="text-navy hover:text-teal font-medium">Edit</button></td>
            </tr>
            <tr>
              <td className="py-4 text-teal font-semibold">Publication</td>
              <td className="py-4">Youth Inclusion Index 2025</td>
              <td className="py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Published</span></td>
              <td className="py-4 text-navy/60">1 day ago</td>
              <td className="py-4 text-right"><button className="text-navy hover:text-teal font-medium">Edit</button></td>
            </tr>
            <tr>
              <td className="py-4 text-teal font-semibold">Program</td>
              <td className="py-4">Regional Dialogue Frameworks</td>
              <td className="py-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Draft</span></td>
              <td className="py-4 text-navy/60">3 days ago</td>
              <td className="py-4 text-right"><button className="text-navy hover:text-teal font-medium">Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
