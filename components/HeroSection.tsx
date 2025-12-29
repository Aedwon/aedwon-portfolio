"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Users } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./ThemeContext";

export default function HeroSection() {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col md:flex-row h-[calc(100vh-var(--nav-height))] w-full overflow-hidden">
            {/* Acquisition / Web Solutions Side */}
            <motion.div
                initial={{ flex: 1 }}
                whileHover={{ flex: 1.5 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`
          group relative flex w-full md:w-auto flex-col items-center justify-center px-6 py-12 md:px-12 md:py-20
          bg-background text-foreground transition-colors duration-300
          border-b md:border-b-0 md:border-r border-theme
          ${theme === 'discord' ? 'md:m-4 md:mr-2 rounded-theme bg-accent-secondary' : ''}
        `}
            >
                <div className="max-w-md flex flex-col items-start gap-6 z-10">
                    <div className={`
                p-4 rounded-theme border border-theme bg-background shadow-theme
                ${theme === 'discord' ? 'bg-accent-secondary border-none' : ''}
            `}>
                        <Globe className="w-8 h-8 text-accent" />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold font-theme tracking-tight">
                        Acquisition
                    </h1>

                    <p className="text-xl opacity-80 font-medium max-w-sm">
                        High-performance websites that convert.
                    </p>

                    <Link href="/web-solutions">
                        <button className={`
                    flex items-center gap-2 px-8 py-4 text-lg font-bold transition-all
                    ${theme === 'minimalist' ? 'bg-foreground text-background hover:opacity-90 rounded-none' : ''}
                    ${theme === 'neubrutalist' ? 'bg-accent text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] rounded-none' : ''}
                    ${theme === 'discord' ? 'bg-accent text-white hover:opacity-90 rounded-theme' : ''}
                `}>
                            Web Solutions <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </motion.div>

            {/* Retention / Community Systems Side */}
            <motion.div
                initial={{ flex: 1 }}
                whileHover={{ flex: 1.5 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`
          group relative flex w-full md:w-auto flex-col items-center justify-center px-6 py-12 md:px-12 md:py-20
          bg-background text-foreground transition-colors duration-300
          ${theme === 'discord' ? 'md:m-4 md:ml-2 rounded-theme bg-accent-secondary' : ''}
        `}
            >
                <div className="max-w-md flex flex-col items-start gap-6 z-10">
                    <div className={`
                p-4 rounded-theme border border-theme bg-background shadow-theme
                ${theme === 'discord' ? 'bg-accent-secondary border-none' : ''}
            `}>
                        <Users className="w-8 h-8 text-accent" />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold font-theme tracking-tight">
                        Retention
                    </h1>

                    <p className="text-xl opacity-80 font-medium max-w-sm">
                        Community ecosystems that engage.
                    </p>

                    <Link href="/community-systems">
                        <button className={`
                    flex items-center gap-2 px-8 py-4 text-lg font-bold transition-all
                    ${theme === 'minimalist' ? 'border border-theme hover:bg-accent-secondary rounded-none' : ''}
                    ${theme === 'neubrutalist' ? 'bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] rounded-none' : ''}
                    ${theme === 'discord' ? 'bg-[#4f545c] text-white hover:bg-[#5d6269] rounded-theme' : ''}
                `}>
                            Community Systems <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
