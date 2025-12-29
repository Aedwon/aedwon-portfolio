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
                    <p className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto mb-8">
                        Freelance Web Developer & Community Architect. I build high-performance E-Commerce sites, SaaS platforms, and automated Discord systems that drive real growth.
                    </p>

                    {/* Tech Ticker / Capabilities */}
                    <div className={`
                        inline-flex items-center gap-6 px-6 py-3 rounded-full text-sm font-bold opacity-60
                        ${theme === 'minimalist' ? 'border border-theme' : ''}
                        ${theme === 'neubrutalist' ? 'bg-white border-2 border-black text-black opacity-100' : ''}
                        ${theme === 'discord' ? 'bg-[#2f3136] text-gray-400' : ''}
                    `}>
                        <span>Next.js</span>
                        <span>•</span>
                        <span>React</span>
                        <span>•</span>
                        <span>TypeScript</span>
                        <span>•</span>
                        <span>Node.js</span>
                        <span>•</span>
                        <span>Discord.js</span>
                    </div>
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

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight mb-2">
                                Web Development
                            </h2>
                            <div className="text-sm font-bold uppercase opacity-60 tracking-wider">Acquisition & Conversion</div>
                        </div>

                        <p className="text-lg opacity-80 font-medium">
                            I build custom, high-speed applications for E-Commerce and SaaS. No bloat, just performance that converts visitors into customers.
                        </p>

                        <div className="flex flex-col gap-2 text-sm opacity-70">
                            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Next.js & Shopify Solutions</span>
                            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> &lt; 0.2s Load Times (SEO Optimized)</span>
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

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight mb-2">
                                Community Engineering
                            </h2>
                            <div className="text-sm font-bold uppercase opacity-60 tracking-wider">Retention & Engagement</div>
                        </div>

                        <p className="text-lg opacity-80 font-medium">
                            I architect autonomous Discord bots and gamification systems that keep your community active 24/7 without manual moderation.
                        </p>

                        <div className="flex flex-col gap-2 text-sm opacity-70">
                            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Custom Bot Development</span>
                            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Automated Sentiment Analysis</span>
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
