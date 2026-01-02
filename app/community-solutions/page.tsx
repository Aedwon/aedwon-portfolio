"use client";

import { useTheme } from "@/components/ThemeContext";
import SentimentChart from "@/components/SentimentChart";
import BotCard from "@/components/BotCard";
import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldAlert, Clock, Zap, ArrowRight, Bot, MessageSquare, Calendar, Headphones, Star, CheckCircle } from "lucide-react";
import Link from "next/link";

const VALUE_PROPS = [
    { icon: Clock, title: "20+ hrs/week saved", description: "on manual work" },
    { icon: Users, title: "3x engagement", description: "with proven systems" },
    { icon: ShieldAlert, title: "99.9% spam blocked", description: "smart auto-filtering" },
    { icon: Zap, title: "24/7 coverage", description: "bots + management" },
];

const BOT_CAPABILITIES = [
    {
        icon: Bot,
        title: "Custom Bot Development",
        description: "Tailored Discord bots built specifically for your community's needs: moderation, engagement, utility, or all three.",
    },
    {
        icon: ShieldAlert,
        title: "Autonomous Moderation",
        description: "Smart filters that handle spam, scam links, raids, and toxic behavior automatically, so your mods can focus on community building.",
    },
    {
        icon: TrendingUp,
        title: "Gamification & Leveling",
        description: "XP systems, leaderboards, and custom rewards that turn passive lurkers into active contributors. Proven to boost engagement by 200%+.",
    },
    {
        icon: MessageSquare,
        title: "Engagement Automation",
        description: "Welcome flows, auto-roles, reaction roles, and custom commands that create seamless onboarding and keep members coming back.",
    },
];

const MANAGEMENT_SERVICES = [
    "Event planning & execution (game nights, AMAs, watch parties)",
    "Server architecture & channel organization",
    "Community health monitoring & reporting",
    "Member conflict resolution",
    "Content moderation & quality control",
    "Growth strategy & member acquisition",
    "Partnership & collaboration management",
    "Regular community pulse checks",
];

const SERVICE_TIERS = [
    {
        tier: "Bot Development",
        tagline: "One-time build",
        description: "Custom Discord bot tailored to your specific needs, with full documentation and training.",
        features: [
            "Custom bot development",
            "Feature specification & planning",
            "Full deployment & setup",
            "Documentation & training",
            "30 days post-launch support",
        ],
        cta: "Build My Bot",
        popular: false,
    },
    {
        tier: "Full-Service Management",
        tagline: "Monthly retainer",
        description: "I become your community's dedicated manager, handling everything from events to moderation to growth.",
        features: [
            "Everything in Bot Development",
            "Ongoing community management",
            "Event planning & execution",
            "Member engagement programs",
            "Monthly health reports & insights",
            "Communication via Discord or your preferred platform",
            "Defined response times (agreed in contract)",
        ],
        cta: "Let's Talk",
        popular: true,
    },
];

export default function CommunitySolutions() {
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
                                Community Solutions
                            </p>
                            <div className={`
                                px-3 py-1 text-xs font-bold flex items-center gap-2
                                ${theme === 'minimalist' ? 'bg-green-100 text-green-700 border border-green-300 rounded-full' : ''}
                                ${theme === 'neubrutalist' ? 'bg-[#57F287] text-black border-2 border-black shadow-[2px_2px_0px_#000]' : ''}
                                ${theme === 'discord' ? 'bg-[#57F287]/20 text-[#57F287] rounded-full' : ''}
                            `}>
                                <div className="w-2 h-2 rounded-full bg-[#57F287] animate-pulse"></div>
                                Available Now
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-theme tracking-tight mb-6">
                            Your Community,<br />
                            <span className={`${theme === 'discord' ? 'text-accent' : 'text-accent'}`}>Professionally Managed.</span>
                        </h1>
                        <p className="text-xl md:text-2xl opacity-80 leading-relaxed font-theme max-w-3xl mb-8">
                            From custom Discord bots to full-service community management, I help creators and brands
                            build thriving communities that run smoothly, engage deeply, and grow on autopilot.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <button className={`
                                    flex items-center gap-2 px-8 py-4 text-base font-bold transition-all
                                    ${theme === 'minimalist' ? 'bg-foreground text-background hover:opacity-90' : ''}
                                    ${theme === 'neubrutalist' ? 'bg-accent text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000]' : ''}
                                    ${theme === 'discord' ? 'bg-accent text-white hover:bg-accent/90 rounded-lg' : ''}
                                `}>
                                    Get Started <ArrowRight className="w-5 h-5" />
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

            {/* Service Tiers */}
            <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight mb-4">
                        Choose Your Level of Support
                    </h2>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">
                        Whether you need a custom bot or a dedicated community manager, I&apos;ve got you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {SERVICE_TIERS.map((service, i) => (
                        <motion.div
                            key={service.tier}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`
                                relative p-8 flex flex-col
                                ${theme === 'minimalist' ? `bg-background border ${service.popular ? 'border-foreground border-2' : 'border-theme'}` : ''}
                                ${theme === 'neubrutalist' ? `bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] ${service.popular ? 'bg-[#FFE66D]' : ''}` : ''}
                                ${theme === 'discord' ? `rounded-lg ${service.popular ? 'bg-accent/10 border-2 border-accent' : 'bg-[#2f3136]'}` : ''}
                            `}
                        >
                            {service.popular && (
                                <div className={`
                                    absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase
                                    ${theme === 'minimalist' ? 'bg-foreground text-background' : ''}
                                    ${theme === 'neubrutalist' ? 'bg-black text-white' : ''}
                                    ${theme === 'discord' ? 'bg-accent text-white rounded-full' : ''}
                                `}>
                                    <Star className="w-3 h-3 inline mr-1" /> Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">{service.tagline}</p>
                                <h3 className="text-2xl font-bold font-theme mb-2">{service.tier}</h3>
                                <p className={`text-sm ${theme === 'discord' ? 'text-gray-400' : 'opacity-70'}`}>
                                    {service.description}
                                </p>
                            </div>

                            <ul className="space-y-3 flex-grow mb-8">
                                {service.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-2 text-sm">
                                        <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${theme === 'discord' ? 'text-[#57F287]' : 'text-green-600'}`} />
                                        <span className="opacity-80">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/contact">
                                <button className={`
                                    w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all
                                    ${theme === 'minimalist' ? `${service.popular ? 'bg-foreground text-background' : 'border border-foreground hover:bg-foreground hover:text-background'}` : ''}
                                    ${theme === 'neubrutalist' ? 'bg-black text-white hover:opacity-80' : ''}
                                    ${theme === 'discord' ? `${service.popular ? 'bg-accent text-white' : 'bg-[#36393f] text-white hover:bg-[#40444b]'} rounded-lg` : ''}
                                `}>
                                    {service.cta} <ArrowRight className="w-4 h-4" />
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bot Capabilities Grid */}
            <section className={`
                px-6 py-16 md:px-12 md:py-24 lg:px-24
                ${theme === 'discord' ? 'bg-[#2f3136]' : 'bg-accent-secondary/10'}
            `}>
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight mb-4">
                        Bot Development Capabilities
                    </h2>
                    <p className="text-lg opacity-70 max-w-2xl">
                        Custom-built bots that do exactly what you need. No bloated features, no learning curve.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {BOT_CAPABILITIES.map((cap, i) => (
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

            {/* Community Management Services */}
            <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <div className="flex items-center gap-2 mb-4">
                            <Headphones className="w-6 h-6 text-accent" />
                            <p className={`text-sm font-bold uppercase tracking-widest ${theme === 'discord' ? 'text-accent' : 'opacity-60'}`}>
                                Full-Service Management
                            </p>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight mb-4">
                            More Than Just Bots.<br />
                            <span className="text-accent">A Dedicated Community Partner</span>
                        </h2>
                        <p className="text-lg opacity-70 max-w-2xl">
                            Need someone to actually run your community? I handle everything: from daily moderation
                            to monthly events to growth strategy, so you can focus on your content and business.
                        </p>
                    </div>

                    <div className={`
                        p-8 grid grid-cols-1 md:grid-cols-2 gap-4
                        ${theme === 'minimalist' ? 'border border-theme' : ''}
                        ${theme === 'neubrutalist' ? 'bg-[#B8F2E6] border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                        ${theme === 'discord' ? 'bg-[#2f3136] rounded-lg' : ''}
                    `}>
                        {MANAGEMENT_SERVICES.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-3"
                            >
                                <Calendar className={`w-4 h-4 mt-1 shrink-0 ${theme === 'discord' ? 'text-accent' : 'text-accent'}`} />
                                <span className={`text-sm ${theme === 'neubrutalist' ? 'text-black' : theme === 'discord' ? 'text-gray-300' : 'opacity-80'}`}>
                                    {service}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard Preview */}
            <section className={`
                px-6 py-16 md:px-12 md:py-24 lg:px-24
                ${theme === 'discord' ? 'bg-[#2f3136]' : 'bg-accent-secondary/10'}
            `}>
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight mb-4">
                        Data-Driven Community Management
                    </h2>
                    <p className="text-lg opacity-70 max-w-2xl">
                        Every decision backed by real data. Here&apos;s what your community dashboard could look like:
                    </p>
                </div>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: "Active Members", value: "12.5k", change: "+18%", positive: true },
                        { label: "Messages/Day", value: "3,240", change: "+25%", positive: true },
                        { label: "Avg. Response", value: "4.2min", change: "-32%", positive: true },
                        { label: "Churn Rate", value: "2.1%", change: "-15%", positive: true },
                    ].map((metric, i) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className={`
                                p-4 text-center
                                ${theme === 'minimalist' ? 'border border-theme' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                                ${theme === 'discord' ? 'bg-[#36393f] rounded-lg' : ''}
                            `}
                        >
                            <p className="text-xs uppercase opacity-60 mb-1">{metric.label}</p>
                            <p className="text-2xl font-bold font-theme">{metric.value}</p>
                            <p className={`text-xs font-medium ${metric.positive ? 'text-[#57F287]' : 'text-[#ED4245]'}`}>
                                {metric.change} this month
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Column 1: Bot Status + Moderation Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <h3 className="text-lg font-bold font-theme flex items-center gap-2">
                            <ShieldAlert className="w-5 h-5 text-accent" />
                            Moderation Bot
                        </h3>
                        <BotCard />

                        {/* Moderation Stats */}
                        <div className={`
                            p-4 space-y-3
                            ${theme === 'minimalist' ? 'border border-theme' : ''}
                            ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                            ${theme === 'discord' ? 'bg-[#36393f] rounded-lg' : ''}
                        `}>
                            <p className="text-xs uppercase opacity-60 font-bold">This Week</p>
                            {[
                                { label: "Spam Blocked", value: "847", icon: "🛡️" },
                                { label: "Scam Links", value: "124", icon: "🔗" },
                                { label: "Warnings Issued", value: "23", icon: "⚠️" },
                                { label: "Timeouts", value: "8", icon: "⏱️" },
                            ].map((stat) => (
                                <div key={stat.label} className="flex items-center justify-between text-sm">
                                    <span className="opacity-70">{stat.icon} {stat.label}</span>
                                    <span className="font-bold">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 2: Sentiment Chart + Trending Topics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-4 lg:col-span-2"
                    >
                        <h3 className="text-lg font-bold font-theme flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-accent" />
                            Community Sentiment Over Time
                        </h3>
                        <div className="h-48 lg:h-56 w-full">
                            <SentimentChart />
                        </div>

                        {/* Sentiment Breakdown + Topics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Sentiment Breakdown */}
                            <div className={`
                                p-4
                                ${theme === 'minimalist' ? 'border border-theme' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                                ${theme === 'discord' ? 'bg-[#36393f] rounded-lg' : ''}
                            `}>
                                <p className="text-xs uppercase opacity-60 font-bold mb-3">Sentiment Breakdown</p>
                                <div className="space-y-2">
                                    {[
                                        { label: "Positive", percent: 68, color: "#57F287" },
                                        { label: "Neutral", percent: 24, color: "#5865F2" },
                                        { label: "Negative", percent: 8, color: "#ED4245" },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-center gap-3">
                                            <div className="w-16 text-xs opacity-70">{item.label}</div>
                                            <div className={`flex-grow h-2 rounded-full ${theme === 'discord' ? 'bg-[#202225]' : 'bg-accent-secondary'}`}>
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${item.percent}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, delay: 0.2 }}
                                                    className="h-full rounded-full"
                                                    style={{ backgroundColor: item.color }}
                                                />
                                            </div>
                                            <span className="text-xs font-bold w-8">{item.percent}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trending Topics */}
                            <div className={`
                                p-4
                                ${theme === 'minimalist' ? 'border border-theme' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                                ${theme === 'discord' ? 'bg-[#36393f] rounded-lg' : ''}
                            `}>
                                <p className="text-xs uppercase opacity-60 font-bold mb-3">Trending Topics</p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { topic: "Season 2 release", count: 342, hot: true },
                                        { topic: "Game night ideas", count: 218, hot: true },
                                        { topic: "Server events", count: 156, hot: false },
                                        { topic: "New features", count: 89, hot: false },
                                        { topic: "Collabs", count: 67, hot: false },
                                    ].map((item) => (
                                        <span
                                            key={item.topic}
                                            className={`
                                                inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full
                                                ${theme === 'discord'
                                                    ? item.hot ? 'bg-accent/20 text-accent' : 'bg-[#202225] text-gray-400'
                                                    : item.hot ? 'bg-accent/20 text-accent' : 'bg-accent-secondary opacity-70'
                                                }
                                            `}
                                        >
                                            {item.hot && <span className="text-[10px]">🔥</span>}
                                            {item.topic}
                                            <span className="opacity-60">({item.count})</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Engagement Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { label: "Peak Hours", value: "8-11 PM", sublabel: "Most active time" },
                                { label: "Top Channel", value: "#general", sublabel: "1.2k msgs/day" },
                                { label: "Avg. Session", value: "24 min", sublabel: "Per member" },
                            ].map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className={`
                                        p-4 text-center
                                        ${theme === 'minimalist' ? 'border border-theme' : ''}
                                        ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                                        ${theme === 'discord' ? 'bg-[#36393f] rounded-lg' : ''}
                                    `}
                                >
                                    <p className="text-xs uppercase opacity-60">{stat.label}</p>
                                    <p className="text-xl font-bold font-theme text-accent">{stat.value}</p>
                                    <p className="text-xs opacity-50">{stat.sublabel}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
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
                        Ready to Transform Your Community?
                    </h2>
                    <p className={`
                        text-lg mb-8
                        ${theme === 'minimalist' ? 'opacity-80' : 'text-white/80'}
                    `}>
                        Whether you need a custom bot or full community management, let&apos;s talk about what your community needs.
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


