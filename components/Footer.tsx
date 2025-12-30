"use client";

import { useTheme } from "./ThemeContext";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

import Logo from "./Logo";

export default function Footer() {
    const { theme } = useTheme();

    return (
        <footer className={`
            w-full transition-colors duration-300
            ${theme === 'minimalist' ? 'bg-background border-t border-theme py-12' : ''}
            ${theme === 'neubrutalist' ? 'bg-black text-white py-12 border-t-[3px] border-black' : ''}
            ${theme === 'discord' ? 'bg-[#2f3136] py-8 border-t border-[#202225]' : ''}
        `}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Brand / Logo Area */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <div className="flex items-center gap-2">
                        <Logo className="w-8 h-8" />
                        <h3 className={`
                            text-lg font-bold font-theme tracking-tight
                            ${theme === 'neubrutalist' ? 'uppercase tracking-widest text-accent' : ''}
                        `}>
                            The Living Lab
                        </h3>
                    </div>
                    <p className={`
                        text-sm opacity-60 flex items-center gap-1
                         ${theme === 'discord' ? 'text-xs uppercase font-bold text-accent' : ''}
                    `}>
                        {theme === 'minimalist' && "Designed & Built by Aedwon"}
                        {theme === 'neubrutalist' && "NO TEMPLATES // ALL CODE"}
                        {theme === 'discord' && <> <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Aedwon is online</>}
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <Link href="https://github.com/Aedwon" target="_blank" className="hover:text-accent transition-colors">
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link href="https://linkedin.com/in/aedwon" target="_blank" className="hover:text-accent transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="https://twitter.com/aedwon" target="_blank" className="hover:text-accent transition-colors">
                        <Twitter className="w-5 h-5" />
                    </Link>
                </div>

                {/* Technical / Credits */}
                <div className={`
                    text-xs opacity-50 font-theme text-center md:text-right
                    ${theme === 'neubrutalist' ? 'opacity-80 font-bold' : ''}
                `}>
                    <p>&copy; {new Date().getFullYear()} Aedwon. All rights reserved.</p>
                    {theme === 'minimalist' && <p>Made with Next.js & Tailwind</p>}
                    {theme === 'neubrutalist' && <p>MADE IN VS CODE</p>}
                    {theme === 'discord' && <p className="flex items-center gap-1 justify-end">v1.0.0 <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Stable</p>}
                </div>
            </div>
        </footer>
    );
}
