import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-offwhite/70 py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="mb-6">
            <Image 
              src="/Asian Academy.png" 
              alt="Asian Academy for Peace Logo" 
              width={200} 
              height={45} 
              className="object-contain grayscale brightness-200 opacity-80"
            />
          </div>
          <p className="max-w-sm font-sans font-light leading-relaxed mb-8">
            Building structural harmony through dialogue, policy, and empowering the next generation of peacebuilders across Asia.
          </p>
        </div>
        
        <div>
          <h5 className="text-white font-sans text-sm tracking-widest uppercase mb-6">Organization</h5>
          <ul className="space-y-4 font-sans text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Expertise & Services</Link></li>
            <li><Link href="/updates" className="hover:text-white transition-colors">Updates</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-white font-sans text-sm tracking-widest uppercase mb-6">Resources</h5>
          <ul className="space-y-4 font-sans text-sm">
            <li><Link href="/updates" className="hover:text-white transition-colors">News & Announcements</Link></li>
            <li><Link href="/about#strategic-partners" className="hover:text-white transition-colors">Partners</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
            <li><Link href="/admin" className="hover:text-gold transition-colors">Admin Login</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-sans">
        <p>&copy; {new Date().getFullYear()} Asian Academy for Peace. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
