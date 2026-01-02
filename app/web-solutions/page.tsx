"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { useTheme } from "@/components/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Shield, Clock } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["All", "E-Commerce", "Corporate", "SaaS"];

const PROJECTS = [
    {
        id: 1,
        title: "EcoStyle Fashion",
        description: "Sustainable fashion brand losing sales to a slow, clunky Shopify theme. I rebuilt their entire storefront with a custom Next.js frontend: lightning fast, story-driven, and optimized for mobile checkout.",
        metric: "+35% Conversion Rate",
        tags: ["Next.js", "Shopify Headless", "Tailwind"],
        image: "/placeholder-1.jpg",
        category: "E-Commerce",
    },
    {
        id: 2,
        title: "Apex Finance Dashboard",
        description: "High-frequency trading firm needed real-time data visualization that could handle millions of data points without lag. Delivered a sub-400ms load time with enterprise-grade security.",
        metric: "<0.4s Load Time",
        tags: ["React", "D3.js", "WebSockets"],
        image: "/placeholder-2.jpg",
        category: "Corporate",
    },
    {
        id: 3,
        title: "TaskFlow Pro",
        description: "Creative agency SaaS struggling with user retention. Redesigned and rebuilt the entire UX with real-time collaboration, drag-and-drop kanban, and seamless team workflows.",
        metric: "+15% User Retention",
        tags: ["Next.js", "Supabase", "WebSockets"],
        image: "/placeholder-3.jpg",
        category: "SaaS",
    },
    {
        id: 4,
        title: "Urban Sneakers",
        description: "Hype drop platform that crashed every release. Architected an edge-first solution that handles 100k+ concurrent users during limited drops. Zero downtime, zero lost sales.",
        metric: "100% Uptime on Drops",
        tags: ["Vercel Edge", "Redis", "Next.js"],
        image: "/placeholder-4.jpg",
        category: "E-Commerce",
    },
];

const VALUE_PROPS = [
    {
        icon: Zap,
        title: "Performance-Obsessed",
        description: "Every site scores 90+ on Core Web Vitals. Fast sites rank higher on Google and convert better.",
    },
    {
        icon: TrendingUp,
        title: "Built to Convert",
        description: "Strategic UX design backed by data. Every layout decision is optimized for your bottom line.",
    },
    {
        icon: Shield,
        title: "Compliant & Secure",
        description: "Need GDPR, CCPA, or WCAG 2.1 compliance? I offer it as an add-on to ensure your site meets international standards.",
    },
    {
        icon: Clock,
        title: "On-Time, Every Time",
        description: "100% on-time delivery record. Fixed pricing with no scope creep surprises.",
    },
];

const TRUST_BADGES = [
    "GDPR Compliant*",
    "WCAG 2.1 AA*",
    "SSL/HTTPS",
    "Mobile-First",
    "SEO Optimized",
    "Core Web Vitals 90+",
];

export default function WebSolutions() {
    const { theme } = useTheme();
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

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
                        <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${theme === 'discord' ? 'text-accent' : 'opacity-60'}`}>
                            Web Development Services
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-theme tracking-tight mb-6">
                            Websites That <span className={`${theme === 'discord' ? 'text-accent' : 'text-accent'}`}>Actually</span> Grow Your Business
                        </h1>
                        <p className="text-xl md:text-2xl opacity-80 leading-relaxed font-theme max-w-3xl mb-8">
                            Your website should be your hardest-working salesperson. I build blazing-fast,
                            conversion-optimized experiences that meet international standards for accessibility,
                            privacy, and performance.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8 w-full md:w-auto">
                            <Link href="/contact" className="w-full md:w-auto">
                                <button className={`
                                    w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-bold transition-all
                                    ${theme === 'minimalist' ? 'bg-foreground text-background hover:opacity-90' : ''}
                                    ${theme === 'neubrutalist' ? 'bg-accent text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000]' : ''}
                                    ${theme === 'discord' ? 'bg-accent text-white hover:bg-accent/90 rounded-lg' : ''}
                                `}>
                                    Start a Project <ArrowRight className="w-5 h-5" aria-hidden="true" />
                                </button>
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-3">
                            {TRUST_BADGES.map((badge) => (
                                <span
                                    key={badge}
                                    className={`
                                        text-xs font-medium px-3 py-1.5 rounded-full
                                        ${theme === 'minimalist' ? 'bg-accent-secondary border border-theme' : ''}
                                        ${theme === 'neubrutalist' ? 'bg-white border-2 border-black' : ''}
                                        ${theme === 'discord' ? 'bg-[#2f3136] text-gray-300' : ''}
                                    `}
                                >
                                    ✓ {badge}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Value Props */}
            <section className={`
                px-6 py-12 md:px-12 lg:px-24 border-y border-theme
                ${theme === 'discord' ? 'bg-[#2f3136]' : 'bg-accent-secondary/20'}
            `}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {VALUE_PROPS.map((prop, i) => (
                        <motion.div
                            key={prop.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-4"
                        >
                            <div className={`
                                p-3 rounded-lg shrink-0
                                ${theme === 'discord' ? 'bg-accent/20' : 'bg-accent/10'}
                            `}>
                                <prop.icon className={`w-5 h-5 ${theme === 'discord' ? 'text-accent' : 'text-accent'}`} />
                            </div>
                            <div>
                                <h3 className="font-bold font-theme mb-1">{prop.title}</h3>
                                <p className="text-sm opacity-70">{prop.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight mb-4">
                        Real Problems. Real Solutions. Real Results.
                    </h2>
                    <p className="text-lg opacity-70 max-w-2xl">
                        Every project starts with a business problem. Here&apos;s how I solved them.
                    </p>
                </div>

                {/* Filter Controls */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
                                px-6 py-2 text-sm font-bold transition-all relative
                                ${theme === 'minimalist'
                                    ? activeCategory === cat ? 'text-foreground underline underline-offset-4' : 'opacity-60 hover:opacity-100'
                                    : ''}
                                ${theme === 'neubrutalist'
                                    ? `border-[3px] border-black shadow-[4px_4px_0px_#000] hover:-translate-y-1 ${activeCategory === cat ? 'bg-accent text-black' : 'bg-white text-black'}`
                                    : ''}
                                ${theme === 'discord'
                                    ? `rounded-full ${activeCategory === cat ? 'bg-accent text-white' : 'bg-accent-secondary text-gray-400 hover:bg-[#40444b] hover:text-white'}`
                                    : ''}
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                {...project}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>



            {/* Investment Section */}
            <section className={`
                px-6 py-16 md:px-12 md:py-24 lg:px-24
                ${theme === 'discord' ? 'bg-[#2f3136]' : 'bg-accent-secondary/5'}
            `}>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-theme tracking-tight mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">
                        High-impact results with no hidden fees. Choose the tier that matches your stage of growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto items-start">
                    {/* Tier 1: The Foundation (Strategy & Audit) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`
                            p-6 flex flex-col relative h-full
                            ${theme === 'minimalist' ? 'bg-background border border-theme' : ''}
                            ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                            ${theme === 'discord' ? 'bg-[#36393f] rounded-lg' : ''}
                        `}
                    >
                        <div className="mb-6">
                            <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">Start With A Plan</p>
                            <h3 className="text-xl font-bold font-theme mb-2">The Foundation</h3>
                            <div className="text-3xl font-bold font-theme mb-4 text-accent">$250 - $500</div>
                            <p className={`text-sm ${theme === 'discord' ? 'text-gray-400' : 'opacity-70'}`}>
                                Perfect for businesses that need direction before spending big. We map out exactly what you need.
                            </p>
                        </div>
                        <ul className="space-y-3 flex-grow mb-8">
                            {[
                                "Digital Audit (Review presence)",
                                "Technical Roadmap",
                                "Visual Wireframes (Blueprints)",
                                "Competitor Analysis",
                                "Clear Next Steps"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                    <span className="text-green-500">✓</span> {feature}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className="w-full mt-auto">
                            <button className={`
                                w-full py-3 font-bold transition-all
                                ${theme === 'minimalist' ? 'border border-foreground hover:bg-foreground hover:text-background' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-2 border-black hover:bg-gray-100' : ''}
                                ${theme === 'discord' ? 'bg-[#5865F2] text-white hover:bg-[#4752c4] rounded-md' : ''}
                            `}>
                                Start Strategy
                            </button>
                        </Link>
                    </motion.div>

                    {/* Tier 2: The Build (Development) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`
                            p-8 flex flex-col relative transform lg:-translate-y-4 z-10
                            ${theme === 'minimalist' ? 'bg-background border-2 border-foreground' : ''}
                            ${theme === 'neubrutalist' ? 'bg-[#FFE66D] border-[3px] border-black shadow-[6px_6px_0px_#000]' : ''}
                            ${theme === 'discord' ? 'bg-accent/10 border-2 border-accent rounded-lg shadow-lg' : ''}
                        `}
                    >
                        <div className={`
                            absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase whitespace-nowrap
                            ${theme === 'minimalist' ? 'bg-foreground text-background' : ''}
                            ${theme === 'neubrutalist' ? 'bg-black text-white' : ''}
                            ${theme === 'discord' ? 'bg-accent text-white rounded-full' : ''}
                        `}>
                            Most Popular
                        </div>

                        <div className="mb-6">
                            <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">Your Professional Site</p>
                            <h3 className="text-2xl font-bold font-theme mb-2">The Build</h3>
                            <div className="text-3xl font-bold font-theme mb-4 text-accent">Starting at $1,800</div>
                            <p className={`text-sm ${theme === 'discord' ? 'text-gray-400' : 'opacity-70'}`}>
                                A stunning, fast website that establishes your brand. No templates, no bloat, just results.
                            </p>
                        </div>
                        <ul className="space-y-3 flex-grow mb-8">
                            {[
                                "Custom Static Sites (Fast & Secure)",
                                "Mobile-First Design",
                                "SEO Ready (Built for Google)",
                                "Web Applications [Custom Quote]",
                                "Secure & Accessibility Focused",
                                "Easy Content Management"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                    <span className="text-green-500">✓</span> {feature}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className="w-full mt-auto">
                            <button className={`
                                w-full py-3 font-bold transition-all
                                ${theme === 'minimalist' ? 'bg-foreground text-background hover:opacity-90' : ''}
                                ${theme === 'neubrutalist' ? 'bg-black text-white hover:opacity-80' : ''}
                                ${theme === 'discord' ? 'bg-accent text-white hover:opacity-90 rounded-md' : ''}
                            `}>
                                Build My Site
                            </button>
                        </Link>
                    </motion.div>

                    {/* Tier 3: The Care Plan (Maintenance) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`
                            p-6 flex flex-col relative h-full
                            ${theme === 'minimalist' ? 'bg-background border border-theme' : ''}
                            ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                            ${theme === 'discord' ? 'bg-[#36393f] rounded-lg' : ''}
                        `}
                    >
                        <div className="mb-6">
                            <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">We Keep The Lights On</p>
                            <h3 className="text-xl font-bold font-theme mb-2">The Care Plan</h3>
                            <div className="text-3xl font-bold font-theme mb-4 text-accent">Starting at $150<span className="text-base text-gray-500 font-normal">/mo</span></div>
                            <p className={`text-sm ${theme === 'discord' ? 'text-gray-400' : 'opacity-70'}`}>
                                Focus on your business, not updates. We handle the technical side so you never have to worry.
                            </p>
                        </div>
                        <ul className="space-y-3 flex-grow mb-8">
                            {[
                                "Managed Hosting (Domains & Servers)",
                                "Unlimited Content Updates",
                                "Daily Security & Backups",
                                "Monthly Health Report",
                                "Priority Support"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                    <span className="text-green-500">✓</span> {feature}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className="w-full mt-auto">
                            <button className={`
                                w-full py-3 font-bold transition-all
                                ${theme === 'minimalist' ? 'border border-foreground hover:bg-foreground hover:text-background' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-2 border-black hover:bg-gray-100' : ''}
                                ${theme === 'discord' ? 'bg-[#5865F2] text-white hover:bg-[#4752c4] rounded-md' : ''}
                            `}>
                                Get Care Plan
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs opacity-50 italic">
                        * Prices are estimated starting points based on typical project scope. Final quotes provided after The Blueprint phase.
                    </p>
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
                        Ready to Upgrade Your Web Presence?
                    </h2>
                    <p className={`
                        text-lg mb-8
                        ${theme === 'minimalist' ? 'opacity-80' : 'text-white/80'}
                    `}>
                        Let&apos;s chat about your project. 15-minute call, no pitch, just honest advice.
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

