"use client";

import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingCart, Bot, Gauge } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        icon: ShoppingCart,
        category: "E-Commerce",
        title: "EcoStyle Fashion Storefront",
        problem: "Slow Shopify theme killing conversions",
        solution: "Custom Next.js headless storefront",
        result: "+35% conversion rate in 30 days",
        href: "/web-solutions",
    },
    {
        icon: Bot,
        category: "Community Systems",
        title: "Alpha Gaming Discord Bot",
        problem: "Mods overwhelmed, engagement dropping",
        solution: "24/7 autonomous moderation + gamification",
        result: "20hrs/week saved, 3x engagement",
        href: "/community-systems",
    },
    {
        icon: Gauge,
        category: "SaaS Platform",
        title: "Apex Finance Dashboard",
        problem: "Legacy codebase, frequent crashes",
        solution: "Full TypeScript rewrite with monitoring",
        result: "99.9% uptime, 2x faster load",
        href: "/web-solutions",
    },
];

export default function FeaturedProjects() {
    const { theme } = useTheme();

    return (
        <section className={`
            py-20 px-6 border-b border-theme transition-colors duration-300
            ${theme === 'minimalist' ? 'bg-accent-secondary/10' : ''}
            ${theme === 'neubrutalist' ? 'bg-[#B8F2E6] border-b-[3px] border-black' : ''}
            ${theme === 'discord' ? 'bg-[#2f3136]' : ''}
        `}>
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-theme tracking-tight mb-4">
                        Real Results, Real Clients
                    </h2>
                    <p className="opacity-70 text-lg max-w-2xl mx-auto">
                        Every project starts with a problem. Here&apos;s how I solved them.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`
                                group relative p-6 flex flex-col gap-4 transition-all
                                ${theme === 'minimalist' ? 'bg-background border border-theme hover:border-foreground' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000]' : ''}
                                ${theme === 'discord' ? 'bg-[#36393f] rounded-theme hover:bg-[#40444b]' : ''}
                            `}
                        >
                            <div className="flex items-center justify-between">
                                <div className={`
                                    p-3 rounded-theme
                                    ${theme === 'minimalist' ? 'bg-accent-secondary' : ''}
                                    ${theme === 'neubrutalist' ? 'bg-accent border-2 border-black' : ''}
                                    ${theme === 'discord' ? 'bg-accent/20' : ''}
                                `}>
                                    <project.icon className={`w-5 h-5 ${theme === 'discord' ? 'text-accent' : ''}`} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider opacity-50">
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold font-theme">
                                {project.title}
                            </h3>

                            <div className="space-y-2 text-sm flex-grow">
                                <div className="flex gap-2">
                                    <span className="font-bold opacity-50 w-16 shrink-0">Problem</span>
                                    <span className="opacity-80">{project.problem}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="font-bold opacity-50 w-16 shrink-0">Solution</span>
                                    <span className="opacity-80">{project.solution}</span>
                                </div>
                                <div className={`
                                    flex gap-2 font-bold
                                    ${theme === 'discord' ? 'text-green-400' : 'text-green-600'}
                                `}>
                                    <span className="opacity-50 w-16 shrink-0">Result</span>
                                    <span>{project.result}</span>
                                </div>
                            </div>

                            <Link href={project.href} className="mt-2">
                                <span className={`
                                    inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all
                                    ${theme === 'discord' ? 'text-accent' : 'text-foreground'}
                                `}>
                                    View Details <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
