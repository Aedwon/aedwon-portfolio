"use client";

import { useTheme } from "@/components/ThemeContext";
import { motion } from "framer-motion";
import { Send, Hash, ChevronDown } from "lucide-react";

export default function ContactPage() {
    const { theme } = useTheme();

    return (
        <main className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-background transition-colors duration-300">

            <div className={`
        w-full max-w-2xl
        ${theme === 'minimalist' ? '' : ''}
        ${theme === 'neubrutalist' ? '' : ''}
        ${theme === 'discord' ? '' : ''}
      `}>

                <div className="mb-8 flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <span className="text-sm font-bold tracking-wide uppercase opacity-70">Currently Accepting New Clients</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold font-theme tracking-tight mb-12">
                    Start a Project
                </h1>

                <form className="flex flex-col gap-6">

                    {/* Input Group */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold opacity-70">Name</label>
                            <input
                                type="text"
                                placeholder={theme === 'discord' ? "username#0000" : "John Doe"}
                                className={`
                            w-full p-4 bg-transparent outline-none transition-all
                            ${theme === 'minimalist' ? 'border-b border-theme focus:border-foreground placeholder:opacity-30' : ''}
                            ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] focus:shadow-[2px_2px_0px_#000] focus:translate-x-[2px] focus:translate-y-[2px]' : ''}
                            ${theme === 'discord' ? 'bg-[#202225] rounded-theme text-gray-200 placeholder:text-gray-500' : ''}
                        `}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold opacity-70">Email</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className={`
                            w-full p-4 bg-transparent outline-none transition-all
                            ${theme === 'minimalist' ? 'border-b border-theme focus:border-foreground placeholder:opacity-30' : ''}
                            ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] focus:shadow-[2px_2px_0px_#000] focus:translate-x-[2px] focus:translate-y-[2px]' : ''}
                            ${theme === 'discord' ? 'bg-[#202225] rounded-theme text-gray-200 placeholder:text-gray-500' : ''}
                        `}
                            />
                        </div>
                    </div>

                    {/* Dropdown / Select */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold opacity-70">Project Type</label>
                        <div className="relative">
                            <select className={`
                        w-full p-4 appearance-none outline-none cursor-pointer bg-transparent
                        ${theme === 'minimalist' ? 'border-b border-theme focus:border-foreground' : ''}
                        ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] focus:shadow-[2px_2px_0px_#000] focus:translate-x-[2px] focus:translate-y-[2px]' : ''}
                        ${theme === 'discord' ? 'bg-[#202225] rounded-theme text-gray-200' : ''}
                    `}>
                                <option>Web Development</option>
                                <option>Discord Community</option>
                                <option>Full Ecosystem</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                <ChevronDown className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold opacity-70">Goal</label>
                        <textarea
                            rows={4}
                            placeholder={theme === 'discord' ? "Message #general..." : "Tell me about your vision..."}
                            className={`
                         w-full p-4 bg-transparent outline-none transition-all resize-none
                         ${theme === 'minimalist' ? 'border-b border-theme focus:border-foreground placeholder:opacity-30' : ''}
                         ${theme === 'neubrutalist' ? 'bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] focus:shadow-[2px_2px_0px_#000] focus:translate-x-[2px] focus:translate-y-[2px]' : ''}
                         ${theme === 'discord' ? 'bg-[#40444b] rounded-theme text-gray-200 placeholder:text-gray-500' : ''}
                    `}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4">
                        <button className={`
                    w-full py-4 px-8 font-bold transition-all flex items-center justify-center gap-3
                    ${theme === 'minimalist' ? 'bg-foreground text-background hover:opacity-90' : ''}
                    ${theme === 'neubrutalist' ? 'text-4xl uppercase tracking-tighter bg-accent text-black border-[3px] border-black shadow-[8px_8px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] py-8' : ''}
                    ${theme === 'discord' ? 'bg-accent hover:opacity-90 text-white rounded-theme' : ''}
                `}>
                            {theme === 'neubrutalist' ? "LET'S BUILD" : (
                                <>
                                    Send Message <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>

                </form>

            </div>
        </main>
    );
}
