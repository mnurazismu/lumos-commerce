import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { CartSheet } from "@/components/cart/cart-sheet";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://lumos.store"),
  title: "LUMOS | The Transparency Store",
  description:
    "Nothing to hide. Premium transparent tech accessories — keyboards, audio, peripherals & more.",
  openGraph: {
    siteName: "LUMOS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          "font-sans antialiased bg-black text-white selection:bg-cyan-500/30"
        )}
      >
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/20 via-black to-black pointer-events-none" />
        <Navbar />
        <CartSheet />
        {children}
        <Footer />
      </body>
    </html>
  );
}
