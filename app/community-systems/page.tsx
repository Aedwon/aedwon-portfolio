"use client";

import { useTheme } from "@/components/ThemeContext";
import SentimentChart from "@/components/SentimentChart";
import BotCard from "@/components/BotCard";
import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldAlert } from "lucide-react";

export default function CommunitySystems() {
    const { theme } = useTheme();

    return (
        <main className="min-h-screen px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24 bg-background transition-colors duration-300">

            {/* Header / Dashboard Title */}
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold font-theme tracking-tight mb-2">
                        Community Systems
                    </h1>
                    <p className="text-xl opacity-80 max-w-2xl font-theme">
                        Retention engines. I build the infrastructure that keeps communities alive, engaged, and safe.
                    </p>
                </div>
                <div className={`
             px-4 py-2 text-sm font-bold flex items-center gap-2
             ${theme === 'neubrutalist' ? 'bg-accent text-black border-2 border-black' : 'bg-accent-secondary rounded-full'}
        `}>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    System Operational
                </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

                {/* Column 1: Automated Moderation */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col gap-4"
                >
                    <h2 className="text-xl font-bold font-theme flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-accent" />
                        Automated Moderation
                    </h2>
                    <BotCard />
                    <div className={`p-4 text-sm ${theme === 'minimalist' ? 'text-foreground opacity-80' : 'opacity-80'}`}>
                        <p>Custom bot architectures designed for high-velocity chat environments.
                            Integrating OpenAI API for context-aware filtering.</p>
                    </div>
                </motion.section>

                {/* Column 2: Sentiment Analysis (Wide Span on mobile?) */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-4 lg:col-span-2"
                >
                    <h2 className="text-xl font-bold font-theme flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-accent" />
                        Sentiment Analysis Dashboard
                    </h2>
                    <div className="h-64 lg:h-80 w-full">
                        <SentimentChart />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className={`
                    p-6 flex flex-col gap-2
                    ${theme === 'minimalist' ? 'bg-accent-secondary' : ''}
                    ${theme === 'neubrutalist' ? 'bg-[#e5c07b] border-[3px] border-black shadow-[4px_4px_0px_#000] text-black' : ''}
                    ${theme === 'discord' ? 'bg-accent-secondary rounded-theme border-l-4 border-yellow-500' : ''}
                 `}>
                            <h4 className="font-bold uppercase text-xs opacity-70">Engagement Spike</h4>
                            <p className="text-2xl font-bold">+145%</p>
                            <p className="text-xs">Post-event retention rate</p>
                        </div>
                        <div className={`
                    p-6 flex flex-col gap-2
                    ${theme === 'minimalist' ? 'bg-accent-secondary' : ''}
                    ${theme === 'neubrutalist' ? 'bg-[#c678dd] border-[3px] border-black shadow-[4px_4px_0px_#000] text-black' : ''}
                    ${theme === 'discord' ? 'bg-accent-secondary rounded-theme border-l-4 border-purple-500' : ''}
                 `}>
                            <h4 className="font-bold uppercase text-xs opacity-70">Active Users</h4>
                            <p className="text-2xl font-bold">12.5k</p>
                            <p className="text-xs">Currently online</p>
                        </div>
                    </div>
                </motion.section>

                {/* Column 3 / Row 2: Gamification / Leveling */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-4 lg:col-span-3"
                >
                    <h2 className="text-xl font-bold font-theme flex items-center gap-2">
                        <Users className="w-5 h-5 text-accent" />
                        User Retention Engines (Gamification)
                    </h2>

                    <div className={`
                w-full p-8 flex flex-col md:flex-row items-center gap-8
                ${theme === 'minimalist' ? 'border-y border-theme' : ''}
                ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                ${theme === 'discord' ? 'bg-accent-secondary rounded-theme relative overflow-hidden' : ''}
            `}>
                        <div className="flex-shrink-0 text-center md:text-left">
                            <div className="text-sm uppercase opacity-70 mb-1">Current Level</div>
                            <div className="text-5xl font-bold font-theme text-accent">42</div>
                            <div className="text-xs mt-2">Top 1% of users</div>
                        </div>

                        <div className="flex-grow w-full max-w-2xl flex flex-col gap-2">
                            <div className="flex justify-between text-xs font-bold uppercase">
                                <span>Experience Points</span>
                                <span>7,500 / 10,000 XP</span>
                            </div>
                            <div className={`
                        w-full h-6 relative
                        ${theme === 'minimalist' ? 'bg-accent-secondary' : ''}
                        ${theme === 'neubrutalist' ? 'bg-white border-2 border-black' : ''}
                        ${theme === 'discord' ? 'bg-[#202225] rounded-full' : ''}
                     `}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "75%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className={`
                                h-full
                                ${theme === 'minimalist' ? 'bg-foreground' : ''}
                                ${theme === 'neubrutalist' ? 'bg-accent border-r-2 border-black' : ''}
                                ${theme === 'discord' ? 'bg-accent rounded-full shadow-[0_0_15px_#5865F2]' : ''}
                            `}
                                />
                            </div>
                            <div className="text-right text-xs opacity-60">Next reward: &quot;Super Fan&quot; Role</div>
                        </div>

                        <div className="hidden md:block text-right">
                            <button className={`
                        px-4 py-2 font-bold text-sm
                        ${theme === 'minimalist' ? 'border border-foreground hover:bg-foreground hover:text-background transition-colors' : ''}
                        ${theme === 'neubrutalist' ? 'bg-black text-white hover:opacity-80' : ''}
                        ${theme === 'discord' ? 'bg-accent text-white hover:opacity-90 rounded-sm' : ''}
                     `}>
                                View Leaderboard
                            </button>
                        </div>
                    </div>
                </motion.section>

            </div>
        </main>
    );
}
