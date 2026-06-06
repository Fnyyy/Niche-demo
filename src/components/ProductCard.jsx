"use client";
import { motion } from "framer-motion";

export default function ProductCard({ perfume }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer bg-white overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100/50"
    >
      <div className="relative h-80 w-full overflow-hidden bg-[#F9F9F9]">
        <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-charcoal font-medium">
          {perfume.type}
        </span>
        {perfume.is_trending && (
          <span className="absolute top-4 right-4 z-10 bg-gold text-white px-3 py-1 text-[10px] uppercase tracking-widest font-medium">
            Trending
          </span>
        )}
        <img 
          src={perfume.image_url} 
          alt={perfume.name}
          className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-widest text-charcoal-light">
            {perfume.brand}
          </span>
          <span className="text-[10px] bg-[#F4F4F4] px-2 py-1 uppercase tracking-wider text-charcoal rounded-sm">
            {perfume.age_group}
          </span>
        </div>
        
        <h3 className="font-serif text-2xl mb-4 text-charcoal group-hover:text-gold transition-colors">
          {perfume.name}
        </h3>
        
        <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 mt-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Vibe</p>
            <p className="text-sm text-charcoal">{perfume.vibe}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Key Notes</p>
            <p className="text-sm text-charcoal truncate">{perfume.notes.join(", ")}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
