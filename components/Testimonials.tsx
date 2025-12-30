"use client";

import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        id: 1,
        quote: "Aedwon transformed our outdated e-commerce site into a conversion machine. Sales increased by 35% in the first month.",
        author: "Sarah J.",
        role: "CTO, EcoStyle Fashion",
    },
    {
        id: 2,
        quote: "The automated Discord system saved our moderators 20+ hours a week. It runs flawlessly.",
        author: "Mike R.",
        role: "Community Manager, Alpha Gaming",
    },
    {
        id: 3,
        quote: "Uncompromising quality. The code was clean, documented, and delivered ahead of schedule.",
        author: "Elena V.",
        role: "Product Lead, Apex Finance",
    },
];

export default function Testimonials() {
    const { theme } = useTheme();

    return (
        <section className={`
            py-20 px-6 border-b border-theme transition-colors duration-300
            ${theme === 'minimalist' ? 'bg-accent-secondary/10' : ''}
            ${theme === 'neubrutalist' ? 'bg-[#FFDEE9] border-b-[3px] border-black' : ''}
            ${theme === 'discord' ? 'bg-[#2f3136]' : ''}
        `}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-theme tracking-tight mb-4">
                        Trusted by Founders & Teams
                    </h2>
                    <p className="opacity-70 text-lg max-w-2xl mx-auto">
                        I build long-term partnerships, not just one-off projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`
                                relative p-8 flex flex-col gap-4
                                ${theme === 'minimalist' ? 'bg-background border border-theme hover:border-foreground transition-colors' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                                ${theme === 'discord' ? 'bg-[#36393f] rounded-theme hover:bg-[#40444b] transition-colors' : ''}
                            `}
                        >
                            <Quote className={`
                                w-8 h-8 opacity-20
                                ${theme === 'neubrutalist' ? 'text-black opacity-100' : ''}
                                ${theme === 'discord' ? 'text-accent opacity-100' : ''}
                            `} />

                            <p className="text-lg font-medium leading-relaxed italic opacity-90 flex-grow">
                                &quot;{t.quote}&quot;
                            </p>

                            <div className="mt-4 pt-4 border-t border-theme/50">
                                <div className="font-bold font-theme">{t.author}</div>
                                <div className="text-sm opacity-60 uppercase tracking-wider">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
