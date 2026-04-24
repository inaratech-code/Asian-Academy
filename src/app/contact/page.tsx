"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="w-full pt-32 pb-16 bg-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h1 className="font-serif text-5xl md:text-7xl text-navy mb-8">Contact Us</h1>
          <p className="font-sans text-lg text-navy/70 max-w-2xl mx-auto">
            Connect with the Asian Academy for Peace Research and Development. We welcome inquiries, collaborations, and partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 rounded-2xl shadow-sm border border-navy/5"
          >
            <h3 className="font-serif text-3xl text-navy mb-8">Reach Out</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-navy text-lg mb-1">Headquarters</h4>
                  <p className="text-navy/60 leading-relaxed">
                    ASIAN ACADEMY: FOR PEACE RESEARCH AND DEVELOPMENT<br />
                    Thapa Gaun, New Baneshwor<br />
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-navy text-lg mb-1">Email</h4>
                  <a href="mailto:asianacademy11@gmail.com" className="text-navy/60 hover:text-gold transition-colors">
                    asianacademy11@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-navy text-lg mb-1">Phone</h4>
                  <a href="tel:+97715244060" className="text-navy/60 hover:text-gold transition-colors">
                    +977-1-5244060
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-navy/70 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-navy/70 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy/70 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy/70 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy/70 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="button"
                className="w-full bg-navy text-white py-4 rounded-lg font-sans tracking-wide hover:bg-gold hover:text-navy transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
