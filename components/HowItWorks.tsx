"use client";

import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Code2, Rocket } from "lucide-react";

const STEPS = [
    {
        icon: MessageSquare,
        step: "01",
        title: "Discovery Call",
        description: "We hop on a quick call to understand your goals, timeline, and budget. No pitch—just honest advice.",
    },
    {
        icon: FileText,
        step: "02",
        title: "Proposal & Scope",
        description: "You receive a clear proposal with fixed pricing, milestones, and a timeline. No surprises.",
    },
    {
        icon: Code2,
        step: "03",
        title: "Build & Iterate",
        description: "I build in weekly sprints with regular demos. You see progress and provide feedback in real-time.",
    },
    {
        icon: Rocket,
        step: "04",
        title: "Launch & Support",
        description: "We launch together, and I stick around for 30 days of support to ensure everything runs smoothly.",
    },
];

export default function HowItWorks() {
    const { theme } = useTheme();

    return (
        <section className={`
            py-20 px-6 border-b border-theme transition-colors duration-300
            ${theme === 'neubrutalist' ? 'bg-[#FFFDF5] border-b-[3px] border-black' : ''}
            ${theme === 'discord' ? 'bg-[#36393f]' : ''}
        `}>
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-theme tracking-tight mb-4">
                        Simple, Transparent Process
                    </h2>
                    <p className="opacity-70 text-lg max-w-2xl mx-auto">
                        No mystery. No endless back-and-forth. Here&apos;s exactly how we&apos;ll work together.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className={`
                                relative p-6 flex flex-col gap-4
                                ${theme === 'minimalist' ? 'border border-theme hover:border-foreground transition-colors' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                                ${theme === 'discord' ? 'bg-[#2f3136] rounded-lg border-l-4 border-l-accent' : ''}
                            `}
                        >
                            <div className="flex items-center justify-between">
                                <div className={`
                                    p-3 rounded-theme
                                    ${theme === 'minimalist' ? 'bg-foreground text-background' : ''}
                                    ${theme === 'neubrutalist' ? 'bg-accent border-2 border-black' : ''}
                                    ${theme === 'discord' ? 'bg-accent text-white' : ''}
                                `}>
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <span className={`
                                    text-4xl font-bold
                                    ${theme === 'minimalist' ? 'opacity-10' : ''}
                                    ${theme === 'neubrutalist' ? 'opacity-30' : ''}
                                    ${theme === 'discord' ? 'text-accent/30' : ''}
                                `}>
                                    {step.step}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold font-theme">
                                {step.title}
                            </h3>

                            <p className="text-sm opacity-70 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
