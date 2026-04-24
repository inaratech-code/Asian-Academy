"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-offwhite flex pt-24">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-navy text-white min-h-full flex flex-col p-6 fixed left-0 top-24 bottom-0">
        <div className="mb-10 text-sm font-sans tracking-widest uppercase text-gold">
          Admin Dashboard
        </div>
        <nav className="flex flex-col gap-4 font-sans">
          <Link href="/admin" className={`px-4 py-2 rounded-lg transition-colors ${pathname === '/admin' ? 'bg-white/10 text-teal' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>
            Overview
          </Link>
          <Link href="/admin/programs" className={`px-4 py-2 rounded-lg transition-colors ${pathname === '/admin/programs' ? 'bg-white/10 text-teal' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>
            Programs
          </Link>
          <Link href="/admin/publications" className={`px-4 py-2 rounded-lg transition-colors ${pathname === '/admin/publications' ? 'bg-white/10 text-teal' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>
            Publications
          </Link>
          <Link href="/admin/events" className={`px-4 py-2 rounded-lg transition-colors ${pathname === '/admin/events' ? 'bg-white/10 text-teal' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>
            Events
          </Link>
        </nav>
        <div className="mt-auto pt-8 border-t border-white/10">
          <button className="text-white/50 hover:text-white text-sm w-full text-left flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 block" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Admin Main Content */}
      <main className="flex-1 ml-64 p-12">
        {children}
      </main>
    </div>
  );
}
