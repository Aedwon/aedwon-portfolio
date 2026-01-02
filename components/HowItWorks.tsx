"use client";

import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import { Search, FileText, Code2, Rocket, TrendingUp } from "lucide-react";

const STEPS = [
    {
        icon: Search,
        step: "01",
        title: "The Diagnostic",
        description: "Deep-dive audit of your infrastructure. I identify security gaps, engagement bottlenecks, and automation opportunities.",
    },
    {
        icon: FileText,
        step: "02",
        title: "The Blueprint",
        description: "Comprehensive roadmap with fixed pricing. You know exactly what you're paying for and when it delivers.",
    },
    {
        icon: Code2,
        step: "03",
        title: "The Build",
        description: "Agile development in a staging environment. Weekly demos so you see progress before anything goes live.",
    },
    {
        icon: Rocket,
        step: "04",
        title: "The Launch",
        description: "Deployment plus education. User manuals for your team, tutorials for your community. Immediate ROI.",
    },
    {
        icon: TrendingUp,
        step: "05",
        title: "The Growth Engine",
        description: "Ongoing management and optimization. I use data from our tools to evolve your strategy as you scale.",
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
                        From Chaos to Clarity
                    </h2>
                    <p className="opacity-70 text-lg max-w-2xl mx-auto">
                        A proven methodology that delivers high-impact results. Here&apos;s exactly how we&apos;ll work together.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`
                                relative p-5 flex flex-col gap-3
                                w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                                ${theme === 'minimalist' ? 'border border-theme hover:border-foreground transition-colors' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                                ${theme === 'discord' ? 'bg-[#2f3136] rounded-lg border-l-4 border-l-accent' : ''}
                            `}
                        >
                            <div className="flex items-center justify-between">
                                <div className={`
                                    p-2.5 rounded-theme
                                    ${theme === 'minimalist' ? 'bg-foreground text-background' : ''}
                                    ${theme === 'neubrutalist' ? 'bg-accent border-2 border-black' : ''}
                                    ${theme === 'discord' ? 'bg-accent text-white' : ''}
                                `}>
                                    <step.icon className="w-4 h-4" />
                                </div>
                                <span className={`
                                    text-3xl font-bold
                                    ${theme === 'minimalist' ? 'opacity-10' : ''}
                                    ${theme === 'neubrutalist' ? 'opacity-30' : ''}
                                    ${theme === 'discord' ? 'text-accent/30' : ''}
                                `}>
                                    {step.step}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold font-theme">
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
