"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function TrendRadar() {
  const [perfumes, setPerfumes] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/perfumes")
      .then((res) => res.json())
      .then((data) => setPerfumes(data));
  }, []);

  const trendingPerfumes = perfumes.filter(p => p.is_trending);
  const displayedPerfumes = filter === "All" 
    ? trendingPerfumes 
    : trendingPerfumes.filter(p => p.type === filter);

  return (
    <section id="trend-radar" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-secondary"
          >
            The Trend Radar
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-body max-w-2xl mx-auto"
          >
            Viral sensations and community favorites. Discover what everyone is wearing right now.
          </motion.p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-[#F9F9F9] p-1 border border-gray-100 rounded-sm">
            {["All", "Local", "Designer", "Niche"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-sm tracking-wider uppercase transition-colors ${
                  filter === cat 
                    ? "bg-white text-charcoal shadow-sm border border-gray-100" 
                    : "text-charcoal-light hover:text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedPerfumes.map((perfume) => (
            <ProductCard key={perfume.id} perfume={perfume} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
