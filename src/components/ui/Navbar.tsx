"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use a transparent navbar on the homepage, solid white on inner pages
  const isHome = pathname === "/";
  const navBg = scrolled || !isHome || mobileMenuOpen ? "bg-white border-b border-navy/10 text-navy" : "bg-transparent text-white";
  const logoColor = scrolled || !isHome || mobileMenuOpen ? "bg-navy" : "bg-gold";

  const links = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Expertise & Services" },
    { href: "/updates", label: "Updates" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center group z-50">
            <Image 
              src="/Asian Academy.png" 
              alt="Asian Academy for Peace Logo" 
              width={220} 
              height={50} 
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium tracking-wide uppercase">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="relative overflow-hidden group py-2"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
            <button className="px-6 py-2 ml-4 rounded-full border border-current hover:bg-navy hover:text-white transition-colors duration-300">
              Join
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center pt-24 pb-12 px-6"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-serif text-navy">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="px-8 py-3 mt-4 rounded-full bg-navy text-white font-sans text-sm tracking-wide uppercase">
                Join the Movement
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
