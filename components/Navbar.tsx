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

    return (
        <>
            <style jsx global>{`
                @keyframes pulseMinimalist {
                    0%, 100% { 
                        box-shadow: 0 0 0 0 rgba(128, 128, 128, 0);
                        transform: scale(1);
                    }
                    50% { 
                        box-shadow: 0 0 12px 4px rgba(128, 128, 128, 0.3);
                        transform: scale(1.02);
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
                
                .theme-toggle-pulse-minimalist {
                    animation: pulseMinimalist 1.5s ease-in-out;
                }
                
                .theme-toggle-wiggle {
                    animation: wiggleNeubrutalist 1.5s ease-in-out;
                }
                
                .theme-toggle-bounce-discord {
                    animation: bounceDiscord 1.5s ease-in-out;
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
                            <span className="capitalize">{theme === 'discord' ? 'DiscordOS' : theme}</span>
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
                                        className={`flex items-center w-full gap-2 px-3 py-2 text-sm hover:bg-accent-secondary rounded-theme ${theme === 'discord' ? 'bg-accent-secondary font-bold' : ''}`}
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
