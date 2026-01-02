"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeContext";
import { Briefcase, Zap, Gamepad2 } from "lucide-react";

import Logo from "./Logo";

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Trigger attention animation every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            // Stop animation after 1.5 seconds
            setTimeout(() => setIsAnimating(false), 1500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Get animation class based on current theme
    const getAnimationClass = () => {
        if (!isAnimating) return '';
        switch (theme) {
            case 'minimalist':
                return 'theme-toggle-pulse-minimalist';
            case 'neubrutalist':
                return 'theme-toggle-wiggle';
            case 'discord':
                return 'theme-toggle-bounce-discord';
            default:
                return '';
        }
    };

    // Discord theme renders a simplified title bar (navigation is in sidebar)
    if (theme === 'discord') {
        return (
            <>
                <style jsx global>{`
                    @keyframes bounceDiscord {
                        0%, 100% { 
                            transform: translateY(0);
                            box-shadow: 0 0 0 0 rgba(88, 101, 242, 0);
                        }
                        10%, 30%, 50% { 
                            transform: translateY(-4px);
                            box-shadow: 0 4px 20px 4px rgba(88, 101, 242, 0.4);
                        }
                        20%, 40% { 
                            transform: translateY(0);
                            box-shadow: 0 0 10px 2px rgba(88, 101, 242, 0.2);
                        }
                        60% {
                            transform: translateY(-2px);
                            box-shadow: 0 2px 10px 2px rgba(88, 101, 242, 0.3);
                        }
                        70% {
                            transform: translateY(0);
                        }
                    }
                    
                    .theme-toggle-bounce-discord {
                        animation: bounceDiscord 1.5s ease-in-out;
                    }
                `}</style>
                {/* Navbar starts after the server sidebar */}
                <nav className="fixed top-0 left-[72px] right-0 z-50 hidden md:flex h-12 items-center bg-[#202225] border-b border-[#1a1b1e]">
                    {/* Server Name Section - matches channel sidebar width */}
                    <div className="flex w-60 h-full items-center px-4 shrink-0 border-r border-[#1a1b1e] bg-[#2f3136]">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            {/* Server Badge/Icon */}
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-[#4752c4] flex items-center justify-center shrink-0">
                                <span className="text-white font-bold text-sm">TL</span>
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="font-semibold text-white text-sm truncate">The Living Lab</span>
                                <span className="text-[10px] text-gray-400 uppercase tracking-wide">Portfolio Server</span>
                            </div>
                        </div>
                    </div>

                    {/* Spacer + Controls */}
                    <div className="flex-1 flex items-center justify-end px-4 gap-3">
                        {/* Theme Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-[#36393f] hover:bg-[#404449] text-gray-200 rounded transition-all ${isAnimating ? 'theme-toggle-bounce-discord' : ''}`}
                            >
                                <Gamepad2 className="w-3.5 h-3.5" />
                                <span>DiscordOS</span>
                            </button>

                            {isDropdownOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-10"
                                        onClick={() => setIsDropdownOpen(false)}
                                    />
                                    <div className="absolute right-0 top-full mt-2 w-48 bg-[#18191c] shadow-xl rounded-md p-1.5 z-20 border border-[#1a1b1e]">
                                        <button
                                            onClick={() => { setTheme('minimalist'); setIsDropdownOpen(false); }}
                                            className="flex items-center w-full gap-2 px-3 py-2 text-sm hover:bg-[#36393f] rounded text-gray-200"
                                        >
                                            <Briefcase className="w-4 h-4" /> Minimalist
                                        </button>
                                        <button
                                            onClick={() => { setTheme('neubrutalist'); setIsDropdownOpen(false); }}
                                            className="flex items-center w-full gap-2 px-3 py-2 text-sm hover:bg-[#36393f] rounded text-gray-200"
                                        >
                                            <Zap className="w-4 h-4" /> Neubrutalist
                                        </button>
                                        <button
                                            onClick={() => { setTheme('discord'); setIsDropdownOpen(false); }}
                                            className="flex items-center w-full gap-2 px-3 py-2 text-sm hover:bg-[#36393f] rounded text-gray-200 bg-[#36393f] text-white"
                                        >
                                            <Gamepad2 className="w-4 h-4" /> DiscordOS
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Window Controls (decorative) */}
                        <div className="flex items-center gap-2 ml-2">
                            <div className="w-3 h-3 rounded-full bg-[#3ba55c] opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
                            <div className="w-3 h-3 rounded-full bg-[#faa61a] opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
                            <div className="w-3 h-3 rounded-full bg-[#ed4245] opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
                        </div>
                    </div>
                </nav>

                {/* Mobile navbar - full width */}
                <nav className="fixed top-0 left-0 right-0 z-50 flex md:hidden h-12 items-center bg-[#202225] border-b border-[#1a1b1e] px-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center">
                            <Logo className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-white text-sm">The Living Lab</span>
                    </div>

                    <div className="flex-1 flex justify-end">
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-[#36393f] hover:bg-[#404449] text-gray-200 rounded transition-all ${isAnimating ? 'theme-toggle-bounce-discord' : ''}`}
                            >
                                <Gamepad2 className="w-3.5 h-3.5" />
                            </button>

                            {isDropdownOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-10"
                                        onClick={() => setIsDropdownOpen(false)}
                                    />
                                    <div className="absolute right-0 top-full mt-2 w-48 bg-[#18191c] shadow-xl rounded-md p-1.5 z-20 border border-[#1a1b1e]">
                                        <button
                                            onClick={() => { setTheme('minimalist'); setIsDropdownOpen(false); }}
                                            className="flex items-center w-full gap-2 px-3 py-2 text-sm hover:bg-[#36393f] rounded text-gray-200"
                                        >
                                            <Briefcase className="w-4 h-4" /> Minimalist
                                        </button>
                                        <button
                                            onClick={() => { setTheme('neubrutalist'); setIsDropdownOpen(false); }}
                                            className="flex items-center w-full gap-2 px-3 py-2 text-sm hover:bg-[#36393f] rounded text-gray-200"
                                        >
                                            <Zap className="w-4 h-4" /> Neubrutalist
                                        </button>
                                        <button
                                            onClick={() => { setTheme('discord'); setIsDropdownOpen(false); }}
                                            className="flex items-center w-full gap-2 px-3 py-2 text-sm hover:bg-[#36393f] rounded text-gray-200 bg-[#36393f] text-white"
                                        >
                                            <Gamepad2 className="w-4 h-4" /> DiscordOS
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </>
        );
    }

    // Default navbar for Minimalist and Neubrutalist themes
    return (
        <>
            <style jsx global>{`
                @keyframes pulseMinimalist {
                    0%, 100% { 
                        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                        transform: scale(1);
                        background-color: inherit;
                    }
                    15%, 45% { 
                        box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.15);
                        transform: scale(1.08);
                    }
                    30% { 
                        box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.1);
                        transform: scale(1.05);
                    }
                    60% {
                        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
                        transform: scale(1.03);
                    }
                }
                
                @keyframes wiggleNeubrutalist {
                    0%, 100% { transform: rotate(0deg); }
                    10% { transform: rotate(-3deg) scale(1.05); }
                    20% { transform: rotate(3deg) scale(1.05); }
                    30% { transform: rotate(-3deg) scale(1.05); }
                    40% { transform: rotate(3deg) scale(1.05); }
                    50% { transform: rotate(-2deg); }
                    60% { transform: rotate(2deg); }
                    70% { transform: rotate(-1deg); }
                    80% { transform: rotate(1deg); }
                    90% { transform: rotate(0deg); }
                }
                
                .theme-toggle-pulse-minimalist {
                    animation: pulseMinimalist 1.5s ease-in-out;
                }
                
                .theme-toggle-wiggle {
                    animation: wiggleNeubrutalist 1.5s ease-in-out;
                }
            `}</style>
            <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-theme bg-background px-6 transition-colors duration-300">
                <div className="flex items-center gap-2">
                    <Logo className="w-8 h-8 md:w-10 md:h-10" />
                    <div className="text-xl font-bold font-theme tracking-tight hidden md:block">
                        The Living Lab
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-10 font-theme text-sm font-medium text-foreground opacity-80">
                    <Link href="/" className="hover:text-accent transition-colors">
                        Home
                    </Link>
                    <Link href="/web-solutions" className="hover:text-accent transition-colors">
                        Web Solutions
                    </Link>
                    <Link href="/community-systems" className="hover:text-accent transition-colors">
                        Community Systems
                    </Link>
                    <Link href="/process" className="hover:text-accent transition-colors">
                        The Process
                    </Link>
                    <Link href="/contact" className="hover:text-accent transition-colors">
                        Start a Project
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium border border-theme rounded-theme hover:bg-accent-secondary transition-all ${getAnimationClass()}`}
                        >
                            <span className="capitalize">{theme}</span>
                        </button>

                        {isDropdownOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={() => setIsDropdownOpen(false)}
                                />
                                <div className="absolute right-0 top-full mt-2 w-48 border border-theme bg-background shadow-theme rounded-theme p-2 z-20 transition-all">
                                    <button
                                        onClick={() => { setTheme('minimalist'); setIsDropdownOpen(false); }}
                                        className={`flex items-center w-full gap-2 px-3 py-2 text-sm hover:bg-accent-secondary rounded-theme ${theme === 'minimalist' ? 'bg-accent-secondary font-bold' : ''}`}
                                    >
                                        <Briefcase className="w-4 h-4" /> Minimalist
                                    </button>
                                    <button
                                        onClick={() => { setTheme('neubrutalist'); setIsDropdownOpen(false); }}
                                        className={`flex items-center w-full gap-2 px-3 py-2 text-sm hover:bg-accent-secondary rounded-theme ${theme === 'neubrutalist' ? 'bg-accent-secondary font-bold' : ''}`}
                                    >
                                        <Zap className="w-4 h-4" /> Neubrutalist
                                    </button>
                                    <button
                                        onClick={() => { setTheme('discord'); setIsDropdownOpen(false); }}
                                        className="flex items-center w-full gap-2 px-3 py-2 text-sm hover:bg-accent-secondary rounded-theme"
                                    >
                                        <Gamepad2 className="w-4 h-4" /> DiscordOS
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
