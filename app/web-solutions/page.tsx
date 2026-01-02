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

