"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

export default function LiveVisitorCounter({
  variant = "hero",
}: {
  variant?: "hero" | "inner";
}) {
  const [visitorCount, setVisitorCount] = useState(1);
  const [isSimulated, setIsSimulated] = useState(false);

  useEffect(() => {
    // Generate a random session ID for this user
    const sessionId = Math.random().toString(36).substring(2, 15);
    
    // Check if we are using the placeholder credentials
    if (process.env.NEXT_PUBLIC_SUPABASE_URL === undefined) {
      setIsSimulated(true);
      // Simulate live visitors for visual effect
      setVisitorCount(Math.floor(Math.random() * 50) + 120);
      
      const interval = setInterval(() => {
        setVisitorCount(prev => {
          const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
          return Math.max(100, prev + change);
        });
      }, 5000);
      
      return () => clearInterval(interval);
    }

    // Real Supabase Presence implementation
    const channel = supabase.channel('online-visitors', {
      config: {
        presence: {
          key: sessionId,
        },
      },
    });

    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        // Count unique keys in the presence state
        const count = Object.keys(state).length;
        setVisitorCount(count > 0 ? count : 1);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({ online_at: new Date().toISOString() });
        }
      });

    return () => {
      channel.unsubscribe();
    };
  }, []);

  const text = variant === "hero" ? "people exploring peace right now" : "active readers";

  return (
    <div className={`inline-flex items-center gap-3 backdrop-blur-md px-4 py-2 rounded-full border ${variant === 'hero' ? 'bg-white/5 border-white/10 text-offwhite/80' : 'bg-navy/5 border-navy/10 text-navy/80'}`}>
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-teal"></span>
      </div>
      <span className="text-sm font-sans tracking-wide">
        <motion.strong 
          key={visitorCount}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className={variant === 'hero' ? 'text-white' : 'text-navy'}
        >
          {visitorCount}
        </motion.strong>{" "}
        {text}
        {isSimulated && <span className="text-[10px] ml-1 opacity-50">(Simulated)</span>}
      </span>
    </div>
  );
}
