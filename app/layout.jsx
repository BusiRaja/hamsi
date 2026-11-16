import { Cormorant_Garamond, Jost, Great_Vibes } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-cormorant" });
const body = Jost({ subsets: ["latin"], variable: "--font-jost" });
const script = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-vibes" });

export const metadata = {
  title: "House of Hamsi — Coming Soon",
  description: "A curated world of handloom, designer & custom-made fashion for women and kids. Be part of our beginning.",
  openGraph: { title: "House of Hamsi — Coming Soon", images: ["/images/hero.png"] },
};
export const viewport = { themeColor: "#2a0510" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body className="font-display text-cream antialiased">{children}</body>
    </html>
  );
}
