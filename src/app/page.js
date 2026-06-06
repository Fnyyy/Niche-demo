import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendRadar from "@/components/TrendRadar";
import DupeLogic from "@/components/DupeLogic";
import ScentGuide from "@/components/ScentGuide";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrendRadar />
      <DupeLogic />
      <ScentGuide />
      
      {/* Simple Footer */}
      <footer className="bg-charcoal text-ivory py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl mb-4 tracking-widest">NICHE</h2>
            <p className="text-sm text-gray-400 max-w-xs">
              Bridging the gap between complex niche fragrances and everyday vibes.
            </p>
          </div>
          <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">TikTok</a>
            <a href="#" className="hover:text-gold transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
