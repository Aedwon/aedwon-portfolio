"use client";

import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Calendar } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
    const { theme } = useTheme();

    return (
        <section className={`
            py-24 px-6 transition-colors duration-300
            ${theme === 'minimalist' ? 'bg-foreground text-background' : ''}
            ${theme === 'neubrutalist' ? 'bg-[#5865F2] border-t-[3px] border-black' : ''}
            ${theme === 'discord' ? 'bg-accent' : ''}
        `}>
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={`
                        text-3xl md:text-5xl font-bold font-theme tracking-tight mb-6
                        ${theme === 'neubrutalist' ? 'text-white' : ''}
                        ${theme === 'discord' ? 'text-white' : ''}
                    `}>
                        Ready to Build Something Great?
                    </h2>

                    <p className={`
                        text-lg md:text-xl mb-10 max-w-2xl mx-auto
                        ${theme === 'minimalist' ? 'opacity-80' : ''}
                        ${theme === 'neubrutalist' ? 'text-white/90' : ''}
                        ${theme === 'discord' ? 'text-white/90' : ''}
                    `}>
                        Let&apos;s hop on a quick 15-minute call. No pitch, no pressure - just honest advice on whether I can help.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-12 w-full sm:w-auto px-4 sm:px-0">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className={`
                                w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold transition-all
                                ${theme === 'minimalist' ? 'bg-background text-foreground hover:opacity-90' : ''}
                                ${theme === 'neubrutalist' ? 'bg-[#FFE66D] text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000]' : ''}
                                ${theme === 'discord' ? 'bg-white text-accent hover:bg-gray-100 rounded-theme' : ''}
                            `}>
                                <Calendar className="w-5 h-5" aria-hidden="true" />
                                Book a Free Call
                            </button>
                        </Link>

                        <Link href="/web-solutions" className="w-full sm:w-auto">
                            <button className={`
                                w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold transition-all
                                ${theme === 'minimalist' ? 'border border-background/50 hover:bg-background/10' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000]' : ''}
                                ${theme === 'discord' ? 'bg-white/10 text-white border border-white/30 hover:bg-white/20 rounded-theme' : ''}
                            `}>
                                See My Work <ArrowRight className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </Link>
                    </div>

                    {/* Guarantee */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={`
                            inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium
                            ${theme === 'minimalist' ? 'bg-background/10 border border-background/20' : ''}
                            ${theme === 'neubrutalist' ? 'bg-white/20 border-2 border-white text-white' : ''}
                            ${theme === 'discord' ? 'bg-white/10 text-white/80' : ''}
                        `}
                    >
                        <Shield className="w-5 h-5" />
                        <span>30-Day Post-Launch Support Included • No Hidden Fees</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
