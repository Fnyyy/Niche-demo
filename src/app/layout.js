import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "NICHE | The FOMO Scent Discovery",
  description: "Find your signature scent with community trends, dupe logic, and age-appropriate guides.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorantGaramond.variable} ${inter.variable} font-sans antialiased bg-ivory text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
