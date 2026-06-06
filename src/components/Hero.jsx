"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop" 
          alt="Minimalist Perfume Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ivory/70 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block text-xs md:text-sm uppercase tracking-[0.3em] text-charcoal-light mb-6 font-medium"
        >
          Scent-to-Vibe Intelligence
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="heading-primary mb-8"
        >
          Curated Fragrances for <br />
          <span className="italic font-light">The Modern Aesthete</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-body max-w-2xl mx-auto mb-12"
        >
          Discover your signature aura. From viral community favorites to sophisticated alternatives of the world's most luxurious niche houses.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#trend-radar" className="btn-primary inline-block">
            The Trend Radar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
