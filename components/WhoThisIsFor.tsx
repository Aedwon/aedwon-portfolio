"use client";

import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const GOOD_FIT = [
    "Startups needing to ship fast without sacrificing quality",
    "Creators with growing communities (1k+ members)",
    "E-commerce brands doing $10k+/month looking to scale",
    "Teams that value clear communication and transparency",
    "Anyone tired of missed deadlines and excuses",
];

const NOT_A_FIT = [
    "Looking for the cheapest option available",
    "Need something \"quick and dirty\"",
    "Unwilling to invest in quality",
    "Expecting 24/7 availability",
];

export default function WhoThisIsFor() {
    const { theme } = useTheme();

    return (
        <section className={`
            py-20 px-6 border-b border-theme transition-colors duration-300
            ${theme === 'neubrutalist' ? 'bg-[#FFFDF5] border-b-[3px] border-black' : ''}
            ${theme === 'discord' ? 'bg-[#36393f]' : ''}
        `}>
            <div className="max-w-5xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-theme tracking-tight mb-4">
                        Is This Right For You?
                    </h2>
                    <p className="opacity-70 text-lg max-w-2xl mx-auto">
                        I work best with certain types of clients. Here&apos;s how to know if we&apos;re a fit.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Good Fit */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`
                            p-8
                            ${theme === 'minimalist' ? 'border border-theme' : ''}
                            ${theme === 'neubrutalist' ? 'bg-[#90EE90] border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                            ${theme === 'discord' ? 'bg-[#2f3136] rounded-lg border-l-4 border-l-[#57F287]' : ''}
                        `}
                    >
                        <h3 className={`
                            text-xl font-bold font-theme mb-6 flex items-center gap-2
                            ${theme === 'neubrutalist' ? 'text-black' : ''}
                        `}>
                            <span className={`
                                p-1 rounded-full
                                ${theme === 'minimalist' ? 'bg-green-100 text-green-600' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-2 border-black' : ''}
                                ${theme === 'discord' ? 'bg-green-500/20 text-green-400' : ''}
                            `}>
                                <Check className="w-5 h-5" />
                            </span>
                            Perfect Fit
                        </h3>
                        <ul className="space-y-4">
                            {GOOD_FIT.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`
                                        flex items-start gap-3 text-sm
                                        ${theme === 'neubrutalist' ? 'text-black/80' : 'opacity-80'}
                                    `}
                                >
                                    <Check className={`
                                        w-4 h-4 mt-0.5 shrink-0
                                        ${theme === 'minimalist' ? 'text-green-600' : ''}
                                        ${theme === 'neubrutalist' ? 'text-green-800' : ''}
                                        ${theme === 'discord' ? 'text-green-400' : ''}
                                    `} />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Not a Fit */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`
                            p-8
                            ${theme === 'minimalist' ? 'border border-theme' : ''}
                            ${theme === 'neubrutalist' ? 'bg-[#FFB3BA] border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                            ${theme === 'discord' ? 'bg-[#2f3136] rounded-lg border-l-4 border-l-[#ED4245]' : ''}
                        `}
                    >
                        <h3 className={`
                            text-xl font-bold font-theme mb-6 flex items-center gap-2
                            ${theme === 'neubrutalist' ? 'text-black' : ''}
                        `}>
                            <span className={`
                                p-1 rounded-full
                                ${theme === 'minimalist' ? 'bg-red-100 text-red-600' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-2 border-black' : ''}
                                ${theme === 'discord' ? 'bg-red-500/20 text-red-400' : ''}
                            `}>
                                <X className="w-5 h-5" />
                            </span>
                            Probably Not a Fit
                        </h3>
                        <ul className="space-y-4">
                            {NOT_A_FIT.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`
                                        flex items-start gap-3 text-sm
                                        ${theme === 'neubrutalist' ? 'text-black/80' : 'opacity-80'}
                                    `}
                                >
                                    <X className={`
                                        w-4 h-4 mt-0.5 shrink-0
                                        ${theme === 'minimalist' ? 'text-red-600' : ''}
                                        ${theme === 'neubrutalist' ? 'text-red-800' : ''}
                                        ${theme === 'discord' ? 'text-red-400' : ''}
                                    `} />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
