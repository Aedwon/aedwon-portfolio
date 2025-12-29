import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import Navbar from "@/components/Navbar";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

import Footer from "@/components/Footer";
import ConsoleEffect from "@/components/ConsoleEffect";

export const metadata: Metadata = {
  title: "The Living Lab",
  description: "A chameleon portfolio showcasing Web Solutions and Community Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable}`}>
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground font-theme transition-colors duration-300 flex flex-col">
            <ConsoleEffect />
            <Navbar />
            <main className="pt-[var(--nav-height)] flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
