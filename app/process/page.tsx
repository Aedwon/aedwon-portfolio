"use client";

import { useTheme } from "@/components/ThemeContext";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const STEPS = [
    {
        id: 1,
        title: "Discovery & Audit",
        description: "We dive deep into your current infrastructure and business goals. No assumptions, just data.",
        icon: Search,
    },
    {
        id: 2,
        title: "Blueprint & Strategy",
        description: "Architecting the solution. We deliver a comprehensive technical roadmap before writing a single line of code.",
        icon: PenTool,
    },
    {
        id: 3,
        title: "Agile Development",
        description: "Iterative sprints with transparent updates. You watch your product come to life in real-time.",
        icon: Code2,
    },
    {
        id: 4,
        title: "Handoff & Training",
        description: "Complete documentation and team training. We ensure you own your system, not rent it.",
        icon: Rocket,
    },
];

export default function ProcessPage() {
    const { theme } = useTheme();

    return (
        <main className="min-h-screen p-8 md:p-12 lg:p-24 bg-background transition-colors duration-300">

            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-theme tracking-tight mb-4">
                        The Process
                    </h1>
                    <p className="opacity-80 text-lg">
                        From chaos to clarity. Our proven methodology ensuring high-impact delivery.
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

                    <div className="flex flex-col gap-12 md:gap-24">
                        {STEPS.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex items-center md:justify-between gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
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
                                ${theme === 'minimalist' ? ' md:hover:bg-accent-secondary/30 transition-colors rounded-sm' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] hover:-translate-y-1 transition-transform' : ''}
                                ${theme === 'discord' ? 'bg-accent-secondary rounded-theme border border-[#202225] hover:border-accent transition-colors' : ''}
                            `}>
                                        <div className={`
                                    text-xs font-bold uppercase mb-2
                                    ${theme === 'minimalist' ? 'opacity-60 tracking-widest' : ''}
                                    ${theme === 'neubrutalist' ? 'bg-black text-white inline-block px-2 py-0.5' : ''}
                                    ${theme === 'discord' ? 'text-accent' : ''}
                                `}>
                                            Step 0{step.id}
                                        </div>
                                        <h3 className="text-2xl font-bold font-theme mb-2">{step.title}</h3>
                                        <p className="opacity-80">{step.description}</p>
                                    </div>

                                    {/* Empty space for the other side on desktop */}
                                    <div className="hidden md:block w-[calc(50%-3rem)]" />
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

                {/* CTA at bottom */}
                <div className="mt-24 text-center">
                    <p className="text-lg mb-6 font-bold">Ready to start?</p>
                    {/* This could link to contact page */}
                </div>

            </div>
        </main>
    );
}
