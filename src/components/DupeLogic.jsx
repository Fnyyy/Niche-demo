"use client";
import { motion } from "framer-motion";
import { ArrowsLeftRight } from "@phosphor-icons/react";

export default function DupeLogic() {
  return (
    <section id="dupe-logic" className="py-32 px-6 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-secondary"
          >
            The Dupe Logic
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-body max-w-2xl mx-auto"
          >
            Sophisticated alternatives to the world's most exclusive niche fragrances. Uncover the smart matches based on shared olfactory notes.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 md:p-12 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative overflow-hidden">
          
          {/* Expensive Side */}
          <div className="w-full md:w-2/5 text-center flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-charcoal-light mb-6 block">
              The Inspiration (Niche)
            </span>
            <div className="w-48 h-48 mb-6 overflow-hidden bg-[#F9F9F9]">
              <img 
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop" 
                alt="Baccarat Rouge 540" 
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            <span className="text-xs uppercase tracking-widest text-charcoal-light mb-2">Maison Francis Kurkdjian</span>
            <h4 className="font-serif text-3xl mb-2 text-charcoal">Baccarat Rouge 540</h4>
            <span className="text-sm text-charcoal-light mb-4">$$$$ (Rp 5.000.000+)</span>
          </div>

          {/* Bridge */}
          <div className="w-full md:w-1/5 flex flex-col items-center justify-center py-12 md:py-0 relative z-10">
            <div className="bg-white p-4 rounded-full shadow-sm border border-gray-100 mb-4 text-gold">
              <ArrowsLeftRight size={32} weight="light" />
            </div>
            <span className="font-serif text-3xl text-gold mb-2">95%</span>
            <span className="text-[10px] uppercase tracking-widest text-charcoal font-medium">Match Score</span>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-200 to-transparent my-4 hidden md:block"></div>
            <span className="text-[10px] uppercase tracking-widest text-charcoal-light text-center">
              Shared Notes:<br/>Saffron, Amberwood
            </span>
          </div>

          {/* Affordable Side */}
          <div className="w-full md:w-2/5 text-center flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-gold mb-6 block font-medium">
              The Smart Dupe (Local)
            </span>
            <div className="w-48 h-48 mb-6 overflow-hidden bg-[#F9F9F9]">
              <img 
                src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=800&auto=format&fit=crop" 
                alt="HMNS Unpatched" 
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            <span className="text-xs uppercase tracking-widest text-charcoal-light mb-2">HMNS</span>
            <h4 className="font-serif text-3xl mb-2 text-charcoal">Unpatched</h4>
            <span className="text-sm text-gold mb-4 font-medium">$$ (Rp 400.000)</span>
          </div>

        </div>
      </div>
    </section>
  );
}
