"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Users, Code, Sparkles } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./ThemeContext";

export default function HeroSection() {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col min-h-[calc(100vh-var(--nav-height))] w-full overflow-hidden bg-background transition-colors duration-300">

            {/* Personal Intro Section */}
            <div className={`
                flex flex-col items-center justify-center py-16 px-6 text-center z-10
                ${theme === 'neubrutalist' ? 'border-b-[3px] border-black bg-[#FFFDF5]' : 'border-b border-theme bg-background'}
            `}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={`
                        text-xl md:text-2xl font-bold mb-4 font-theme opacity-80
                        ${theme === 'discord' ? 'text-accent' : ''}
                    `}>
                        Hi, I'm Aedwon.
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-theme tracking-tight mb-6 max-w-4xl">
                        I engineer <span className="text-accent underline decoration-4 underline-offset-4">digital ecosystems</span> that actually work.
                    </h1>
                    <p className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto">
                        Stop settling for generic templates. I build high-performance web solutions and thriving automated communities tailored to your business goals.
                    </p>
                </motion.div>
            </div>

            {/* Split Service Section */}
            <div className="flex flex-col md:flex-row flex-grow w-full">

                {/* Acquisition / Web Solutions Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`
                        group relative flex-1 flex flex-col items-center justify-center px-6 py-12 md:px-12 md:py-20
                        bg-background text-foreground transition-colors duration-300
                        border-b md:border-b-0 md:border-r border-theme
                        ${theme === 'discord' ? 'bg-[#2f3136]' : ''}
                        hover:bg-accent/5
                    `}
                >
                    <div className="max-w-md flex flex-col items-start gap-6">
                        <div className={`
                            p-4 rounded-theme border border-theme bg-background shadow-theme
                            ${theme === 'discord' ? 'bg-[#36393f] border-none' : ''}
                        `}>
                            <Code className="w-8 h-8 text-accent" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight">
                            Web Development
                        </h2>

                        <p className="text-lg opacity-80 font-medium">
                            Speed, SEO, and Conversion. I build custom Next.js applications that turn visitors into customers.
                        </p>

                        <div className="flex flex-col gap-2 text-sm opacity-70">
                            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Pixel-perfect Designs</span>
                            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> &lt; 0.2s Load Times</span>
                        </div>

                        <Link href="/web-solutions">
                            <button className={`
                                flex items-center gap-2 px-8 py-4 text-base font-bold transition-all mt-4
                                ${theme === 'minimalist' ? 'bg-foreground text-background hover:opacity-90 rounded-none' : ''}
                                ${theme === 'neubrutalist' ? 'bg-accent text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] rounded-none' : ''}
                                ${theme === 'discord' ? 'bg-accent text-white hover:opacity-90 rounded-theme' : ''}
                            `}>
                                View Web Portfolio <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </motion.div>

                {/* Retention / Community Systems Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className={`
                        group relative flex-1 flex flex-col items-center justify-center px-6 py-12 md:px-12 md:py-20
                        bg-background text-foreground transition-colors duration-300
                        ${theme === 'discord' ? 'bg-[#36393f]' : ''}
                        hover:bg-accent/5
                    `}
                >
                    <div className="max-w-md flex flex-col items-start gap-6">
                        <div className={`
                            p-4 rounded-theme border border-theme bg-background shadow-theme
                            ${theme === 'discord' ? 'bg-[#2f3136] border-none' : ''}
                        `}>
                            <Users className="w-8 h-8 text-accent" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight">
                            Community Engineering
                        </h2>

                        <p className="text-lg opacity-80 font-medium">
                            Engagement automation. I build custom Discord bots and reputation systems that keep your community active.
                        </p>

                        <div className="flex flex-col gap-2 text-sm opacity-70">
                            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> 24/7 Automated Moderation</span>
                            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Gamified Verification Flows</span>
                        </div>

                        <Link href="/community-systems">
                            <button className={`
                                flex items-center gap-2 px-8 py-4 text-base font-bold transition-all mt-4
                                ${theme === 'minimalist' ? 'border border-theme hover:bg-accent-secondary rounded-none' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] rounded-none' : ''}
                                ${theme === 'discord' ? 'bg-[#4f545c] text-white hover:bg-[#5d6269] rounded-theme' : ''}
                            `}>
                                Explore Systems <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
