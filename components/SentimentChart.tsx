"use client";

import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

const DATA = [
    { label: "Mon", pos: 65, neg: 10 },
    { label: "Tue", pos: 45, neg: 30 },
    { label: "Wed", pos: 75, neg: 5 },
    { label: "Thu", pos: 55, neg: 15 },
    { label: "Fri", pos: 85, neg: 8 },
    { label: "Sat", pos: 90, neg: 2 },
    { label: "Sun", pos: 70, neg: 12 },
];

export default function SentimentChart() {
    const { theme } = useTheme();

    return (
        <div className={`
      w-full p-6 flex flex-col gap-4 h-full
      ${theme === 'minimalist' ? 'bg-background border border-theme' : ''}
      ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000]' : ''}
      ${theme === 'discord' ? 'bg-accent-secondary rounded-theme' : ''}
    `}>
            <h3 className="text-xl font-bold font-theme tracking-tight flex justify-between items-center">
                <span>Sentiment Analysis</span>
                <span className={`text-xs px-2 py-1 ${theme === 'neubrutalist' ? 'bg-black text-white' : 'bg-accent-secondary opacity-70'} rounded-sm`}>Last 7 Days</span>
            </h3>

            <div className="flex-grow flex items-end justify-between gap-2 mt-4 min-h-[150px]">
                {DATA.map((d, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 w-full h-full justify-end group">
                        <div className="w-full flex gap-1 items-end justify-center h-full relative">
                            {/* Positive Bar */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${d.pos}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`
                    w-3 md:w-4 min-h-[4px]
                    ${theme === 'minimalist' ? 'bg-foreground' : ''}
                    ${theme === 'neubrutalist' ? 'bg-[#98c379] border-2 border-black' : ''}
                    ${theme === 'discord' ? 'bg-accent shadow-[0_0_10px_#5865F2]' : ''}
                 `}
                            />
                            {/* Negative Bar */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${d.neg}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 + 0.05 }}
                                className={`
                    w-3 md:w-4 min-h-[4px]
                    ${theme === 'minimalist' ? 'bg-foreground opacity-30' : ''}
                    ${theme === 'neubrutalist' ? 'bg-[#e06c75] border-2 border-black' : ''}
                    ${theme === 'discord' ? 'bg-[#ed4245] opacity-80' : ''}
                 `}
                            />
                        </div>
                        <span className="text-xs opacity-60 font-mono uppercase">{d.label}</span>
                    </div>
                ))}
            </div>

            <div className="flex gap-4 text-xs font-bold mt-2">
                <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${theme === 'neubrutalist' ? 'bg-[#98c379] border border-black' : theme === 'discord' ? 'bg-accent' : 'bg-foreground'}`}></div>
                    <span>Positive</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${theme === 'neubrutalist' ? 'bg-[#e06c75] border border-black' : theme === 'discord' ? 'bg-[#ed4245]' : 'bg-foreground opacity-30'}`}></div>
                    <span>Negative</span>
                </div>
            </div>
        </div>
    );
}
