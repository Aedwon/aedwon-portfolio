"use client";

import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import { Briefcase, Users, Clock, CheckCircle } from "lucide-react";

const STATS = [
    { icon: Briefcase, value: "50+", label: "Projects Delivered" },
    { icon: Users, value: "20k+", label: "Community Members" },
    { icon: Clock, value: "<24h", label: "Response Time" },
    { icon: CheckCircle, value: "100%", label: "On-Time Delivery" },
];

export default function StatsBar() {
    const { theme } = useTheme();

    return (
        <section className={`
            py-12 px-6 border-b border-theme transition-colors duration-300
            ${theme === 'minimalist' ? 'bg-foreground text-background' : ''}
            ${theme === 'neubrutalist' ? 'bg-[#FFE66D] border-b-[3px] border-black' : ''}
            ${theme === 'discord' ? 'bg-accent' : ''}
        `}>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center gap-2"
                        >
                            <stat.icon className={`
                                w-6 h-6 mb-1
                                ${theme === 'minimalist' ? 'opacity-60' : ''}
                                ${theme === 'neubrutalist' ? 'text-black' : ''}
                                ${theme === 'discord' ? 'text-white/80' : ''}
                            `} />
                            <div className={`
                                text-3xl md:text-4xl font-bold font-theme
                                ${theme === 'neubrutalist' ? 'text-black' : ''}
                                ${theme === 'discord' ? 'text-white' : ''}
                            `}>
                                {stat.value}
                            </div>
                            <div className={`
                                text-sm font-medium uppercase tracking-wider
                                ${theme === 'minimalist' ? 'opacity-70' : ''}
                                ${theme === 'neubrutalist' ? 'text-black/70' : ''}
                                ${theme === 'discord' ? 'text-white/70' : ''}
                            `}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
