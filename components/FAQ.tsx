"use client";

import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
    {
        question: "What if I don't like the final result?",
        answer: "We work in weekly sprints with regular demos, so you see progress throughout. If something's not right, we catch it early. Plus, every project includes revision cycles built into the price, no surprise fees.",
    },
    {
        question: "How do you handle communication?",
        answer: "You'll have direct access to me throughout the project. I send weekly progress updates with demos, and we can hop on calls whenever needed. No project managers in between - just you and me.",
    },
    {
        question: "What happens after launch?",
        answer: "Every project includes 30 days of post-launch support at no extra cost. After that, I offer monthly maintenance packages or you can reach out anytime for one-off fixes and updates.",
    },
    {
        question: "Why should I hire a freelancer instead of an agency?",
        answer: "With me, you get senior-level work without the agency markup. You work directly with the person building your product - faster decisions, clearer communication, and someone who actually cares about your success.",
    },
    {
        question: "How long does a typical project take?",
        answer: "Timelines depend on scope and complexity. After our discovery call, I'll give you a specific estimate in the proposal. I pride myself on transparent scheduling and on-time delivery.",
    },
    {
        question: "What's your pricing like?",
        answer: "I work on fixed-price projects, not hourly. You'll know exactly what you're paying before we start. After understanding your requirements, I'll provide a custom quote based on scope and complexity.",
    },
];

export default function FAQ() {
    const { theme } = useTheme();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className={`
            py-20 px-6 border-b border-theme transition-colors duration-300
            ${theme === 'minimalist' ? 'bg-accent-secondary/10' : ''}
            ${theme === 'neubrutalist' ? 'bg-[#FFDEE9] border-b-[3px] border-black' : ''}
            ${theme === 'discord' ? 'bg-[#36393f]' : ''}
        `}>
            <div className="max-w-3xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-theme tracking-tight mb-4">
                        Questions? I&apos;ve Got Answers.
                    </h2>
                    <p className="opacity-70 text-lg max-w-2xl mx-auto">
                        Here are the things clients usually ask before we start working together.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className={`
                                overflow-hidden transition-all
                                ${theme === 'minimalist' ? 'border border-theme bg-background' : ''}
                                ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
                                ${theme === 'discord' ? `bg-[#2f3136] rounded-lg ${openIndex === i ? 'border-l-4 border-l-accent' : 'border-l-4 border-l-transparent'}` : ''}
                            `}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className={`
                                    w-full p-6 flex items-center justify-between text-left
                                    ${theme === 'minimalist' ? 'hover:bg-accent-secondary/50' : ''}
                                    ${theme === 'neubrutalist' ? 'hover:bg-gray-50' : ''}
                                    ${theme === 'discord' ? 'hover:bg-[#40444b]' : ''}
                                    transition-colors
                                `}
                            >
                                <span className="font-bold font-theme text-lg pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown className={`
                                    w-5 h-5 shrink-0 transition-transform duration-300
                                    ${openIndex === i ? 'rotate-180' : ''}
                                `} />
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className={`
                                            px-6 pb-6 text-sm leading-relaxed opacity-80
                                            ${theme === 'neubrutalist' ? 'border-t-2 border-black pt-4' : 'border-t border-theme/50 pt-4'}
                                        `}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
