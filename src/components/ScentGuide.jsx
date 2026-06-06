"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ScentGuide() {
  const [age, setAge] = useState("");
  const [vibe, setVibe] = useState("");

  const handleMatch = (e) => {
    e.preventDefault();
    // Logic can be connected here
    alert(`Matching scents for ${age} with a ${vibe} vibe...`);
  };

  return (
    <section id="scent-guide" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
        <h2 className="font-serif text-[20rem] leading-none text-charcoal transform rotate-90 origin-top-right">
          NICHE
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4"
          >
            Age & Vibe Profiler
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-secondary"
          >
            Find Your Signature
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-body max-w-xl"
          >
            Tell us about your lifestyle and aura. We will curate a selection of fragrances tailored specifically to your chemistry and occasion.
          </motion.p>
        </div>

        <form onSubmit={handleMatch} className="bg-[#FAF9F6] p-8 md:p-12 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <label className="block font-serif text-2xl text-charcoal mb-6">1. Select Your Age Group</label>
              <div className="flex flex-wrap gap-4">
                {["Teens", "20s", "30s", "40s+"].map(a => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAge(a)}
                    className={`px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300 border ${
                      age === a 
                        ? "bg-charcoal text-white border-charcoal" 
                        : "bg-transparent text-charcoal border-gray-200 hover:border-charcoal"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-serif text-2xl text-charcoal mb-6">2. Desired Vibe</label>
              <div className="flex flex-wrap gap-4">
                {["Office Professional", "Night Out", "Clean Girl", "Edgy Minimalist"].map(v => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVibe(v)}
                    className={`px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300 border ${
                      vibe === v 
                        ? "bg-charcoal text-white border-charcoal" 
                        : "bg-transparent text-charcoal border-gray-200 hover:border-charcoal"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={!age || !vibe}
            className={`w-full py-5 text-sm uppercase tracking-[0.2em] transition-colors duration-300 ${
              age && vibe 
                ? "bg-gold text-white hover:bg-charcoal" 
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Reveal My Matches
          </button>
        </form>
      </div>
    </section>
  );
}
