"use client";

import { useTheme } from "@/components/ThemeContext";
import { motion } from "framer-motion";
import { Search, FileText, Code2, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const STEPS = [
    {
        id: 1,
        title: "The Diagnostic",
        subtitle: "Technical Health Check",
        description: "Before we write code or post announcements, I conduct a deep-dive audit of your existing infrastructure. I identify security vulnerabilities in your verification flows, engagement bottlenecks in your user journey, and opportunities for automation.",
        outcome: "You get a clear report on why your community isn't growing or staying safe.",
        icon: Search,
    },
    {
        id: 2,
        title: "The Blueprint",
        subtitle: "Strategy & Scope",
        description: "We define the destination. I deliver a comprehensive roadmap that separates the Build Phase (creating custom bots, dashboards, and integrations) from the Run Phase (engagement strategy and moderation).",
        outcome: "We lock in requirements upfront so you know exactly what you're paying for and when it will be delivered.",
        icon: FileText,
    },
    {
        id: 3,
        title: "The Build",
        subtitle: "Agile Development",
        description: "I develop your custom tools in a secure Staging Environment, ensuring zero disruption to your live community. Whether it's a token-gated access bot or a custom game integration, I test it rigorously.",
        outcome: "You receive weekly 'Show and Tell' updates to see the technology in action before it goes public.",
        icon: Code2,
    },
    {
        id: 4,
        title: "The Launch",
        subtitle: "Deployment & Education",
        description: "We go live. I deploy the infrastructure and immediately transition into education mode, creating 'User Manuals' for your team and tutorials for your community.",
        outcome: "Your users actually use the new features we've built, maximizing your ROI immediately.",
        icon: Rocket,
    },
    {
        id: 5,
        title: "The Growth Engine",
        subtitle: "Management & Optimization",
        description: "This is where I switch from 'Developer' to 'Community Architect,' acting as your Fractional Community Lead. I monitor uptime, patch bugs, and manage your moderation team.",
        outcome: "I use data from our bots to iterate on community strategy, ensuring your ecosystem evolves as your user base grows.",
        icon: TrendingUp,
    },
];

export default function ProcessPage() {
    const { theme } = useTheme();

    return (
        <main className="min-h-screen px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24 bg-background transition-colors duration-300">

            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-center">
                    <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${theme === 'discord' ? 'text-accent' : 'opacity-60'}`}>
                        How I Work
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold font-theme tracking-tight mb-4">
                        From Chaos to Clarity
                    </h1>
                    <p className="opacity-80 text-lg max-w-2xl mx-auto">
                        A proven methodology for building and managing communities that actually grow.
                        No guesswork, no wasted sprints, just high-impact delivery.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className={`
                absolute left-8 md:left-1/2 top-4 bottom-0 w-0.5 -ml-[1px]
                ${theme === 'minimalist' ? 'bg-theme opacity-30' : ''}
                ${theme === 'neubrutalist' ? 'w-2 -ml-1 bg-black' : ''}
                ${theme === 'discord' ? 'bg-accent/30 w-1 -ml-0.5' : ''}
            `} />

                    <div className="flex flex-col gap-12 md:gap-20">
                        {STEPS.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex items-start md:justify-between gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Icon / Marker */}
                                    <div className={`
                                absolute left-8 md:left-1/2 -ml-6 md:-ml-6 z-10 w-12 h-12 flex items-center justify-center
                                ${theme === 'minimalist' ? 'bg-background border border-foreground rounded-full' : ''}
                                ${theme === 'neubrutalist' ? 'bg-accent border-[3px] border-black shadow-[4px_4px_0px_#000] z-20' : ''}
                                ${theme === 'discord' ? 'bg-accent-secondary rounded-full border-2 border-accent text-accent' : ''}
                            `}>
                                        <step.icon className={`w-5 h-5 ${theme === 'neubrutalist' ? 'text-black' : ''}`} />
                                    </div>

                                    {/* Content Side */}
                                    <div className={`
                                w-full md:w-[calc(50%-3rem)] ml-20 md:ml-0
                                p-6
                                ${theme === 'minimalist' ? 'border border-theme hover:border-foreground transition-colors' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                                ${theme === 'discord' ? 'bg-accent-secondary rounded-lg border border-[#202225]' : ''}
                            `}>
                                        <div className={`
                                    text-xs font-bold uppercase mb-2
                                    ${theme === 'minimalist' ? 'opacity-60 tracking-widest' : ''}
                                    ${theme === 'neubrutalist' ? 'bg-black text-white inline-block px-2 py-0.5' : ''}
                                    ${theme === 'discord' ? 'text-accent' : ''}
                                `}>
                                            Step 0{step.id}: {step.subtitle}
                                        </div>
                                        <h3 className="text-2xl font-bold font-theme mb-3">{step.title}</h3>
                                        <p className="opacity-80 mb-4">{step.description}</p>
                                        <div className={`
                                            text-sm font-medium p-3 rounded-lg
                                            ${theme === 'minimalist' ? 'bg-accent-secondary' : ''}
                                            ${theme === 'neubrutalist' ? 'bg-[#B8F2E6] border-2 border-black' : ''}
                                            ${theme === 'discord' ? 'bg-[#202225] border-l-4 border-l-accent' : ''}
                                        `}>
                                            <strong>Outcome:</strong> {step.outcome}
                                        </div>
                                    </div>

                                    {/* Empty space for the other side on desktop */}
                                    <div className="hidden md:block w-[calc(50%-3rem)]" />
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

                {/* CTA at bottom */}
                <div className={`
                    mt-24 text-center p-8 rounded-lg
                    ${theme === 'minimalist' ? 'border border-theme' : ''}
                    ${theme === 'neubrutalist' ? 'bg-accent border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                    ${theme === 'discord' ? 'bg-accent' : ''}
                `}>
                    <h3 className={`text-2xl font-bold font-theme mb-4 ${theme !== 'minimalist' ? 'text-white' : ''}`}>
                        Ready to Start Your Project?
                    </h3>
                    <p className={`mb-6 ${theme === 'minimalist' ? 'opacity-70' : 'text-white/80'}`}>
                        Let&apos;s jump on a quick 15-minute call. I&apos;ll give you honest advice on whether I can help.
                    </p>
                    <Link href="/contact" className="w-full sm:w-auto">
                        <button className={`
                            w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold transition-all
                            ${theme === 'minimalist' ? 'bg-foreground text-background hover:opacity-90' : ''}
                            ${theme === 'neubrutalist' ? 'bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000]' : ''}
                            ${theme === 'discord' ? 'bg-white text-accent hover:bg-gray-100 rounded-lg' : ''}
                        `}>
                            Book a Free Call <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </button>
                    </Link>
                </div>

            </div>
        </main>
    );
}
