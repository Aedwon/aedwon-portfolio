"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Code, Sparkles } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./ThemeContext";
import DiscordHeroSection from "./DiscordHeroSection";

export default function HeroSection() {
    const { theme } = useTheme();

    // Render Discord-specific layout
    if (theme === 'discord') {
        return <DiscordHeroSection />;
    }

    return (
        <div className="flex flex-col min-h-[calc(100vh-var(--nav-height))] w-full overflow-hidden bg-background transition-colors duration-300">

            {/* Personal Intro Section */}
            <div className={`
                flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center z-10
                ${theme === 'neubrutalist' ? 'border-b-[3px] border-black bg-[#FFFDF5]' : 'border-b border-theme bg-background'}
            `}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xl md:text-2xl font-bold mb-4 font-theme opacity-80">
                        Hey, I&apos;m Aedwon
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-theme tracking-tight mb-6 max-w-4xl">
                        I turn ideas into<br />
                        <span className="text-accent underline decoration-4 underline-offset-4">revenue-generating</span><br />
                        digital products.
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl opacity-70 max-w-2xl mx-auto mb-8 px-4 md:px-0">
                        Trusted by startups and creators to ship fast, scalable web apps and automated community systems that grow businesses on autopilot.
                    </p>

                    {/* Tech Ticker / Capabilities */}
                    <div className={`
                        inline-flex items-center gap-3 md:gap-6 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold opacity-60 flex-wrap justify-center
                        ${theme === 'minimalist' ? 'border border-theme' : ''}
                        ${theme === 'neubrutalist' ? 'bg-white border-2 border-black text-black opacity-100' : ''}
                    `}>
                        <span>Next.js</span>
                        <span className="hidden sm:inline">•</span>
                        <span>React</span>
                        <span className="hidden sm:inline">•</span>
                        <span>TypeScript</span>
                        <span className="hidden md:inline">•</span>
                        <span className="hidden md:inline">Node.js</span>
                        <span className="hidden md:inline">•</span>
                        <span className="hidden md:inline">Discord.js</span>
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
                        hover:bg-accent/5
                    `}
                >
                    <div className="max-w-md flex flex-col items-start gap-6">
                        <div className="p-4 rounded-theme border border-theme bg-background shadow-theme">
                            <Code className="w-8 h-8 text-accent" />
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight mb-2">
                                Web That Sells
                            </h2>
                            <div className="text-sm font-bold uppercase opacity-60 tracking-wider">Acquire • Convert • Scale</div>
                        </div>

                        <p className="text-lg opacity-80 font-medium">
                            Your website should be your best salesperson. I build blazing-fast storefronts and SaaS platforms that turn visitors into paying customers.
                        </p>

                        <div className="flex flex-col gap-2 text-sm opacity-70">
                            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> 100/100 Lighthouse Scores</span>
                            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Built for SEO & Conversions</span>
                        </div>

                        <Link href="/web-solutions" className="w-full md:w-auto">
                            <button className={`
                                w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-bold transition-all mt-4
                                ${theme === 'minimalist' ? 'bg-foreground text-background hover:opacity-90 rounded-none' : ''}
                                ${theme === 'neubrutalist' ? 'bg-accent text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] rounded-none' : ''}
                            `}>
                                See What I&apos;ve Built <ArrowRight className="w-5 h-5" aria-hidden="true" />
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
                        hover:bg-accent/5
                    `}
                >
                    <div className="max-w-md flex flex-col items-start gap-6">
                        <div className="p-4 rounded-theme border border-theme bg-background shadow-theme">
                            <Users className="w-8 h-8 text-accent" />
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight mb-2">
                                Communities That Thrive
                            </h2>
                            <div className="text-sm font-bold uppercase opacity-60 tracking-wider">Engage • Retain • Monetize</div>
                        </div>

                        <p className="text-lg opacity-80 font-medium">
                            Stop babysitting your Discord. I build intelligent bots and systems that keep members engaged, reduce churn, and run your community while you sleep.
                        </p>

                        <div className="flex flex-col gap-2 text-sm opacity-70">
                            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> 24/7 Autonomous Moderation</span>
                            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Gamification & Loyalty Systems</span>
                        </div>

                        <Link href="/community-solutions" className="w-full md:w-auto">
                            <button className={`
                                w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-bold transition-all mt-4
                                ${theme === 'minimalist' ? 'border border-theme hover:bg-accent-secondary rounded-none' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] rounded-none' : ''}
                            `}>
                                See It In Action <ArrowRight className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
