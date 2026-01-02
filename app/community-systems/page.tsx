"use client";

import { useTheme } from "@/components/ThemeContext";
import SentimentChart from "@/components/SentimentChart";
import BotCard from "@/components/BotCard";
import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldAlert, Clock, Zap, ArrowRight, Bot, MessageSquare } from "lucide-react";
import Link from "next/link";

const VALUE_PROPS = [
    { icon: Clock, title: "20+ hrs/week saved", description: "on manual moderation" },
    { icon: Users, title: "3x engagement", description: "with gamification systems" },
    { icon: ShieldAlert, title: "99.9% spam blocked", description: "smart auto-filtering" },
    { icon: Zap, title: "24/7 uptime", description: "your bot never sleeps" },
];

const CAPABILITIES = [
    {
        icon: Bot,
        title: "Autonomous Moderation",
        description: "Custom bots that handle spam, raids, and toxic behavior automatically—so your mods can focus on community building, not babysitting.",
    },
    {
        icon: TrendingUp,
        title: "Gamification & Leveling",
        description: "XP systems, leaderboards, and custom rewards that turn passive lurkers into active contributors. Proven to boost engagement by 200%+.",
    },
    {
        icon: MessageSquare,
        title: "Smart Engagement Tools",
        description: "Welcome flows, auto-roles, reaction roles, and custom commands that create seamless onboarding and keep members coming back.",
    },
    {
        icon: ShieldAlert,
        title: "Sentiment Analysis",
        description: "Real-time dashboards that track community health, flag potential issues, and give you data-driven insights into what your members actually want.",
    },
];

export default function CommunitySystems() {
    const { theme } = useTheme();

    return (
        <main className="min-h-screen bg-background transition-colors duration-300">

            {/* Hero Section */}
            <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <p className={`text-sm font-bold uppercase tracking-widest ${theme === 'discord' ? 'text-accent' : 'opacity-60'}`}>
                                Discord Bot Development
                            </p>
                            <div className={`
                                px-3 py-1 text-xs font-bold flex items-center gap-2
                                ${theme === 'minimalist' ? 'bg-green-100 text-green-700 border border-green-300 rounded-full' : ''}
                                ${theme === 'neubrutalist' ? 'bg-[#57F287] text-black border-2 border-black shadow-[2px_2px_0px_#000]' : ''}
                                ${theme === 'discord' ? 'bg-[#57F287]/20 text-[#57F287] rounded-full' : ''}
                            `}>
                                <div className="w-2 h-2 rounded-full bg-[#57F287] animate-pulse"></div>
                                Systems Online
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-theme tracking-tight mb-6">
                            Stop Babysitting Your Discord.<br />
                            <span className={`${theme === 'discord' ? 'text-accent' : 'text-accent'}`}>Start Growing It.</span>
                        </h1>
                        <p className="text-xl md:text-2xl opacity-80 leading-relaxed font-theme max-w-3xl mb-8">
                            Your community should run itself. I build intelligent Discord bots and automation systems
                            that keep members engaged, slash moderation workload, and scale with you—24/7, on autopilot.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <button className={`
                                    flex items-center gap-2 px-8 py-4 text-base font-bold transition-all
                                    ${theme === 'minimalist' ? 'bg-foreground text-background hover:opacity-90' : ''}
                                    ${theme === 'neubrutalist' ? 'bg-accent text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000]' : ''}
                                    ${theme === 'discord' ? 'bg-accent text-white hover:bg-accent/90 rounded-lg' : ''}
                                `}>
                                    Build My Bot <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Value Props Strip */}
            <section className={`
                px-6 py-8 md:px-12 lg:px-24 border-y border-theme
                ${theme === 'discord' ? 'bg-[#2f3136]' : 'bg-accent-secondary/20'}
            `}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {VALUE_PROPS.map((prop, i) => (
                        <motion.div
                            key={prop.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3"
                        >
                            <div className={`p-2 rounded-lg ${theme === 'discord' ? 'bg-accent/20' : 'bg-accent/10'}`}>
                                <prop.icon className={`w-5 h-5 ${theme === 'discord' ? 'text-accent' : 'text-accent'}`} />
                            </div>
                            <div>
                                <div className="font-bold font-theme text-sm">{prop.title}</div>
                                <div className="text-xs opacity-60">{prop.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Live Dashboard Demo */}
            <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight mb-4">
                        See What Your Dashboard Could Look Like
                    </h2>
                    <p className="text-lg opacity-70 max-w-2xl">
                        Real-time analytics, automated moderation, and member insights—all in one place.
                    </p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

                    {/* Column 1: Bot Status */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-4"
                    >
                        <h3 className="text-lg font-bold font-theme flex items-center gap-2">
                            <ShieldAlert className="w-5 h-5 text-accent" />
                            AI Moderation Bot
                        </h3>
                        <BotCard />
                        <div className={`
                            p-4 text-sm rounded-lg
                            ${theme === 'discord' ? 'bg-[#2f3136] border-l-4 border-l-accent' : 'bg-accent-secondary/50'}
                        `}>
                            <p className="font-medium mb-2">What it does:</p>
                            <ul className="space-y-1 opacity-80">
                                <li>• Blocks spam & scam links instantly</li>
                                <li>• Detects raid attempts automatically</li>
                                <li>• Context-aware toxic content filtering</li>
                                <li>• Custom keyword and regex rules</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Column 2: Sentiment Analysis */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-4 lg:col-span-2"
                    >
                        <h3 className="text-lg font-bold font-theme flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-accent" />
                            Community Health Dashboard
                        </h3>
                        <div className="h-64 lg:h-80 w-full">
                            <SentimentChart />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className={`
                                p-6 flex flex-col gap-2
                                ${theme === 'minimalist' ? 'bg-accent-secondary' : ''}
                                ${theme === 'neubrutalist' ? 'bg-[#57F287] border-[3px] border-black shadow-[4px_4px_0px_#000] text-black' : ''}
                                ${theme === 'discord' ? 'bg-[#2f3136] rounded-lg border-l-4 border-[#57F287]' : ''}
                            `}>
                                <h4 className="font-bold uppercase text-xs opacity-70">Engagement Boost</h4>
                                <p className="text-3xl font-bold">+145%</p>
                                <p className="text-xs opacity-80">After implementing gamification</p>
                            </div>
                            <div className={`
                                p-6 flex flex-col gap-2
                                ${theme === 'minimalist' ? 'bg-accent-secondary' : ''}
                                ${theme === 'neubrutalist' ? 'bg-accent border-[3px] border-black shadow-[4px_4px_0px_#000] text-black' : ''}
                                ${theme === 'discord' ? 'bg-[#2f3136] rounded-lg border-l-4 border-accent' : ''}
                            `}>
                                <h4 className="font-bold uppercase text-xs opacity-70">Mod Hours Saved</h4>
                                <p className="text-3xl font-bold">23 hrs/week</p>
                                <p className="text-xs opacity-80">Automated instead of manual</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Gamification Section */}
            <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-lg font-bold font-theme flex items-center gap-2 mb-6">
                        <Users className="w-5 h-5 text-accent" />
                        Gamification That Actually Works
                    </h3>

                    <div className={`
                        w-full p-8 flex flex-col md:flex-row items-center gap-8
                        ${theme === 'minimalist' ? 'border border-theme' : ''}
                        ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                        ${theme === 'discord' ? 'bg-[#2f3136] rounded-lg' : ''}
                    `}>
                        <div className="flex-shrink-0 text-center md:text-left">
                            <div className="text-sm uppercase opacity-70 mb-1">Member Level</div>
                            <div className="text-5xl font-bold font-theme text-accent">42</div>
                            <div className={`text-xs mt-2 px-2 py-1 rounded-full inline-block ${theme === 'discord' ? 'bg-accent/20 text-accent' : 'bg-accent/10 text-accent'}`}>
                                Top 1% of all members
                            </div>
                        </div>

                        <div className="flex-grow w-full max-w-2xl flex flex-col gap-3">
                            <div className="flex justify-between text-xs font-bold uppercase">
                                <span>Experience Points</span>
                                <span>7,500 / 10,000 XP</span>
                            </div>
                            <div className={`
                                w-full h-6 relative overflow-hidden
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
                            <div className="flex justify-between text-xs opacity-60">
                                <span>🎯 Messages sent, reactions received, voice activity...</span>
                                <span>Next: &quot;Super Fan&quot; role</span>
                            </div>
                        </div>
                    </div>

                    <p className={`mt-6 text-sm max-w-2xl ${theme === 'discord' ? 'text-gray-400' : 'opacity-60'}`}>
                        <strong>Why it works:</strong> Members who engage with leveling systems stay 3x longer and contribute
                        5x more content. Custom XP rules let you reward exactly the behaviors you want to encourage.
                    </p>
                </motion.div>
            </section>

            {/* Capabilities Grid */}
            <section className={`
                px-6 py-16 md:px-12 md:py-24 lg:px-24
                ${theme === 'discord' ? 'bg-[#2f3136]' : 'bg-accent-secondary/10'}
            `}>
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight mb-4">
                        Everything Your Community Needs
                    </h2>
                    <p className="text-lg opacity-70 max-w-2xl">
                        From moderation to engagement, I build complete systems tailored to your community&apos;s goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {CAPABILITIES.map((cap, i) => (
                        <motion.div
                            key={cap.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`
                                p-6 flex gap-4
                                ${theme === 'minimalist' ? 'bg-background border border-theme' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                                ${theme === 'discord' ? 'bg-[#36393f] rounded-lg border-l-4 border-l-accent' : ''}
                            `}
                        >
                            <div className={`p-3 rounded-lg shrink-0 h-fit ${theme === 'discord' ? 'bg-accent/20' : 'bg-accent/10'}`}>
                                <cap.icon className={`w-6 h-6 ${theme === 'discord' ? 'text-accent' : 'text-accent'}`} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-theme mb-2">{cap.title}</h3>
                                <p className={`text-sm ${theme === 'discord' ? 'text-gray-400' : 'opacity-70'}`}>
                                    {cap.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className={`
                px-6 py-16 md:px-12 md:py-24 lg:px-24 text-center
                ${theme === 'minimalist' ? 'bg-foreground text-background' : ''}
                ${theme === 'neubrutalist' ? 'bg-accent border-t-[3px] border-black' : ''}
                ${theme === 'discord' ? 'bg-accent' : ''}
            `}>
                <div className="max-w-2xl mx-auto">
                    <h2 className={`
                        text-3xl md:text-4xl font-bold font-theme tracking-tight mb-4
                        ${theme === 'neubrutalist' || theme === 'discord' ? 'text-white' : ''}
                    `}>
                        Ready to Automate Your Community?
                    </h2>
                    <p className={`
                        text-lg mb-8
                        ${theme === 'minimalist' ? 'opacity-80' : 'text-white/80'}
                    `}>
                        Tell me about your community—I&apos;ll show you exactly how to save 20+ hours a week.
                    </p>
                    <Link href="/contact">
                        <button className={`
                            inline-flex items-center gap-2 px-8 py-4 text-base font-bold transition-all
                            ${theme === 'minimalist' ? 'bg-background text-foreground hover:opacity-90' : ''}
                            ${theme === 'neubrutalist' ? 'bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000]' : ''}
                            ${theme === 'discord' ? 'bg-white text-accent hover:bg-gray-100 rounded-lg' : ''}
                        `}>
                            Book a Free Call <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </section>

        </main>
    );
}

